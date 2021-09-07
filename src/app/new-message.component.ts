import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
  selector: "new-message",
  template: `
    <mat-card class="card">
        <mat-card-content>
            <p> 
            <mat-form-field appearance="standard">
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-form-field>
            </p>
            <p>
            <mat-form-field appearance="standard">
                <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
            </mat-form-field>
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="primary" (click)="post()">POST</button>
        </mat-card-actions>
    </mat-card>
  `,
})
export class NewMessagesComponent {


    constructor(private webService: WebService) { }
    message = {
        text:"",
        owner:""
    }
    post() {
        this.webService.postMessage(this.message);
    }
}
