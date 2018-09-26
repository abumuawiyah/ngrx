import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    TemplateRef
} from "@angular/core";
import { routerTransition } from "../../router.animations";
import { select, Store } from "@ngrx/store";
import * as fromJobAds from "./reducers";
import * as JobAds from "./actions/job-ads.action";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { JobAdsApiService } from "job-ads-api";
import { Metadata } from "../../shared/model/metadata";
import { SeekUlComponent } from "../../shared/modules/seek-ul/seek-ul.component";

@Component({
    selector: "app-job-ads",
    templateUrl: "./job-ads.component.html",
    styleUrls: ["./job-ads.component.scss"],
    animations: [routerTransition()],
    providers: [JobAdsApiService]
})
export class JobAdsComponent implements OnInit, OnDestroy {
    getJobAdsState$ = this.store.select(fromJobAds.getJobAdsState);
    adsState$: Observable<any>;
    selectedPackagesState$: Observable<any>;
    containerMetadata: Metadata = {};
    checkoutItems: Array<any> = [];

    constructor(
        private store: Store<fromJobAds.State>,
        public router: Router,
        public jobAdsServ: JobAdsApiService
    ) {
        this.adsState$ = this.store.pipe(select(fromJobAds.getAds));
        this.selectedPackagesState$ = this.store.pipe(
            select(fromJobAds.getSelectedPackages)
        );
        this.containerMetadata = {
            texts: {
                header: "label",
                body: "Please select below package",
                footer: "dateCreated"
            },
            components: {
                body: SeekUlComponent
            },
            dataAccess: {
                body: "packages"
            },
            actionReference: {
                body: "radioClicked"
            },
            actions: {
                radioClicked: e => {
                    this.store.dispatch(
                        new JobAds.PackageSelected({
                            ad: e.metadata.uniqId,
                            package: e.data.id
                        })
                    );
                }
            }
        };

        this.selectedPackagesState$.subscribe(
            state => (this.checkoutItems = state.selections)
        );
    }

    ngOnInit() {
        this.store.dispatch(new JobAds.LoadAds({}));
    }

    onCheckoutClick(e) {
        e.preventDefault();
        console.log("onCheckoutClick", this.checkoutItems);
        this.store.dispatch(new JobAds.Checkout(this.checkoutItems));
    }

    ngOnDestroy(): void {}
}
