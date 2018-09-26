import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { _throw } from "rxjs/observable/throw";
import { User, Authenticate } from "../models/user";

@Injectable()
export class AuthService {
    constructor() {}

    login({ username, password }: Authenticate) {
        return of({ name: "Pepsi" });
    }

    logout() {
        return of(true);
    }
}
