import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginData } from "./login.component";

@Injectable()

export class AuthService {

    BASE_URL = 'http://localhost:3030/auth';

    NAME_KEY = 'name';

    TOKEN_KEY = 'token';

    constructor(private http: HttpClient, private router: Router) { }
    
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user: any) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user, { responseType: 'json' }).subscribe(res => {
            this.authenticate(res);
         });
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
        this.router.navigate(['/']);

    }

    login(loginData: LoginData) {
        this.http.post(this.BASE_URL + '/login', loginData, { responseType: 'json' }).subscribe(res => {
            this.authenticate(res);
        });
    }

    authenticate(res : any) {
        let response : User = JSON.parse(JSON.stringify(res));
            let authResponse = response;
            if (!authResponse.token){
                return;
            }

            localStorage.setItem(this.TOKEN_KEY, authResponse.token);
            localStorage.setItem(this.NAME_KEY, authResponse.firstName);
            this.router.navigate(['/']);
    }
}
 
export interface User {
    token: string;
    firstName: string;
}