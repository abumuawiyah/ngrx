import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    TemplateRef
} from "@angular/core";
import { routerTransition } from "../../router.animations";
import { select, Store } from "@ngrx/store";
import {} from "./models/job-ads.model";
import * as fromDashboard from "./reducers";
import * as Dashboard from "./actions/job-ads.action";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { JobAdsApiService } from "job-ads-api";
import { Metadata } from "../../shared/model/metadata";

@Component({
    selector: "app-job-ads",
    templateUrl: "./job-ads.component.html",
    styleUrls: ["./job-ads.component.scss"],
    animations: [routerTransition()],
    providers: [JobAdsApiService]
})
export class JobAdsComponent implements OnInit, OnDestroy {
    // data
    getDashboardState$ = this.store.select(fromDashboard.getDashboardState);
    sharedData$: Observable<string>;

    @ViewChild("ads")
    adsTmpl: TemplateRef<any>;
    @ViewChild("package")
    defaultPackageTmpl: TemplateRef<any>;
    @ViewChild("classicPackage")
    classicPackageTmpl: TemplateRef<any>;

    accordianMetadata: Metadata = {};
    cards: Array<Metadata> = [];

    constructor(
        private store: Store<fromDashboard.State>,
        public router: Router,
        public jobAdsServ: JobAdsApiService
    ) {
        this.sharedData$ = this.store.pipe(select(fromDashboard.getSharedData));
    }

    ngOnInit() {
        this.jobAdsServ.getAds({}).subscribe(response => {
            this.accordianMetadata = {
                items: response.data.map(data => {
                    return Object.assign(data, { content: this.adsTmpl });
                })
            };
        });

        this.jobAdsServ.getPackages({}).subscribe(response => {
            this.cards = response.data.map(data => {
                const tmpl = data.template;
                return Object.assign(data, {
                    content: this[`${tmpl}PackageTmpl`],
                    showButton: tmpl === "default" ? true : false
                });
            });
        });

        this.sharedData$.subscribe(data => {
            console.log("getDashboardState", data);
        });
    }

    onSavePackage(e) {
        e.preventDefault();
        alert(1234);
    }

    ngOnDestroy(): void {}
}
