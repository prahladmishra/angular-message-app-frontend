import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
  selector: "messages",
  template: `
    <div *ngFor = "let message of messages">
    <mat-card style="margin:8px">
      <mat-card-title>{{message.owner}}</mat-card-title>
      <mat-card-content>
        {{message.text}}
    </mat-card-content>
    </mat-card>
    </div>
  `,
})
export class MessagesComponent {
  constructor(private webService: WebService) { }
  
  messages: any = [];
  
  async ngOnInit() {
    this.messages = await this.webService.getMessages();
  }

  
}
