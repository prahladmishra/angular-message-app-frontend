import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
@Component({
  selector: "navigation",
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/"><span>Message Board</span></button>
            <span class="example-spacer"></span>
            <button mat-button routerLink="/messages">Messages</button>
            <span style="flex: 1 1 auto"></span>
            <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/register">Register</button>
            <button mat-button *ngIf="auth.isAuthenticated" routerLink="/">Welcome {{auth.name}}</button>
            <button mat-button *ngIf="auth.isAuthenticated" (click)="auth.logout()">Logout</button>
        </mat-toolbar>`,
})
export class NavComponent {
  constructor(public auth: AuthService) {}
}
