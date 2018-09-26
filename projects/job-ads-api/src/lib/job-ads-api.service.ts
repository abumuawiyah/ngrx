import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
    })
};

@Injectable({
    providedIn: "root"
})
export class JobAdsApiService {
    private readonly apiRoot =
        "https://wt-6739ec38574dfcc339bf8f836ba7d104-0.sandbox.auth0-extend.com";
    constructor(private http: HttpClient) {}

    getAds(reqData: any): Observable<any> {
        const url = `${this.apiRoot}/getAds`;
        return this.http.get<any>(url);
    }

    getPackages(reqData: any): Observable<any> {
        const url = `${this.apiRoot}/getPackages`;
        return this.http.get<any>(url);
    }

    checkout(reqData: any): Observable<any> {
        const url = `${this.apiRoot}/checkout`;
        return this.http.post<any>(url, reqData, httpOptions);
    }
}
