import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { routerTransition } from "../router.animations";
import { Store } from "@ngrx/store";
import { Authenticate } from "./models/user";
import * as fromAuth from "./reducers";
import * as Auth from "./actions/auth";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
    getLoggedIn$ = this.store.select(fromAuth.getLoggedIn);
    user$ = this.store.select(fromAuth.getUser);
    loginForm = new FormGroup({
        username: new FormControl(""),
        password: new FormControl("")
    });

    constructor(private store: Store<fromAuth.State>, public router: Router) {}

    ngOnInit() {}
    ngOnDestroy() {}

    onLoggedin($event) {
        const auth: Authenticate = this.loginForm.value;
        localStorage.setItem("isLoggedin", "true");
        this.store.dispatch(new Auth.Login(auth));
    }
}
