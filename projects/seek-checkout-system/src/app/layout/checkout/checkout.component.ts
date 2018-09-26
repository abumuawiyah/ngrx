import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    TemplateRef
} from "@angular/core";
import { routerTransition } from "../../router.animations";
import { select, Store } from "@ngrx/store";
import * as fromJobAds from "./../job-ads/reducers";
import * as JobAds from "./../job-ads/actions/job-ads.action";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { JobAdsApiService } from "job-ads-api";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.scss"],
    animations: [routerTransition()],
    providers: [JobAdsApiService]
})
export class CheckoutComponent implements OnInit {
    getJobAdsState$ = this.store.select(fromJobAds.getJobAdsState);
    selectedPackagesState$: Observable<any>;

    constructor(
        private store: Store<fromJobAds.State>,
        public router: Router,
        public jobAdsServ: JobAdsApiService
    ) {}

    ngOnInit() {
        this.selectedPackagesState$ = this.store.pipe(
            select(fromJobAds.getSelectedPackages)
        );

        this.selectedPackagesState$.subscribe(state =>
            console.log(state.selections)
        );
    }

    onPayClick(e) {}
}
