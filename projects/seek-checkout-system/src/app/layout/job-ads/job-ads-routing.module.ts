import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobAdsComponent } from "./job-ads.component";

const routes: Routes = [
    {
        path: "",
        component: JobAdsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobAdsRoutingModule {}
