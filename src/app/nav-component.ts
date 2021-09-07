import { Component } from "@angular/core";

@Component({
  selector: "navigation",
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/"><span>Message Board</span></button>
            <span class="example-spacer"></span>
            <button mat-button routerLink="/messages">Messages</button>
            <button mat-button routerLink="/register">Register</button>
        </mat-toolbar>`,
})
export class NavComponent {
  constructor() {}
}
