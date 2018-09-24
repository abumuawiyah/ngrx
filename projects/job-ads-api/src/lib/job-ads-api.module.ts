import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    entryComponents: []
})
export class JobAdsApiModule {
    constructor() {}

    static forRoot(options): ModuleWithProviders {
        return {
            ngModule: JobAdsApiModule,
            providers: []
        };
    }
}
