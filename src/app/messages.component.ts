import { Component } from "@angular/core";

@Component({
  selector: "messages",
  template: `
    <div *ngFor = "let message of messages">
    {{message.text}} by {{message.owner}}
    </div>
  `,
})
export class MessagesComponent {
  messages = [
    {
      text: "Some Text",
      owner: "Tim",
    },
    {
      text: "Other Message",
      owner: "Jane",
    }
  ];
}
