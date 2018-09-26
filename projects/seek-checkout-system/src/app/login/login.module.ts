import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AuthService } from "./services/auth.service";
import { AuthEffects } from "./effects/auth.effects";
import { reducers } from "./reducers";

export const COMPONENTS = [LoginComponent];

@NgModule({
    imports: [LoginRoutingModule, CommonModule, ReactiveFormsModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class LoginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RootLoginModule,
            providers: [AuthService]
        };
    }
}

@NgModule({
    imports: [
        LoginModule,
        RouterModule.forChild([{ path: "login", component: LoginComponent }]),
        StoreModule.forFeature("auth", reducers),
        EffectsModule.forFeature([AuthEffects]),
        ReactiveFormsModule
    ]
})
export class RootLoginModule {}
