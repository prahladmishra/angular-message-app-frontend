import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
@Component({
  selector: "login",
    template: `
    <mat-card class="card">
        <mat-card-content>
            <p>
                <mat-form-field appearance="standard">
                    <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
                </mat-form-field>
            </p>
            <p>
                <mat-form-field appearance="standard">
                    <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
                </mat-form-field>
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="primary" (click)="login()">Login</button>
        </mat-card-actions>
    </mat-card>
        `,
})
export class LoginComponent {
    constructor(public auth: AuthService) { }
    
    loginData = {
        email: '',
        password: ''
    };

    login() {
        this.auth.login(this.loginData);
    }
}

export interface LoginData {
        email: string,
        password: string
}
