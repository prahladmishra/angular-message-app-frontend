import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from "rxjs";

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3030/api';

  private messageStore: any = [];
  
  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable() as Observable<Array<Message>>;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.getMessages();
  }
  getMessages(user? : Message["owner"]) {
      user = (user) ? '/' + user : '';
      this.http.get(this.BASE_URL + "/messages" + user, { responseType: "json" }).subscribe(response => {
        this.messageStore = response;
        this.messageSubject.next(this.messageStore);
      }, error => {
        this.handleError("Unable to Get messages.");
      });
  }

  postMessage(message: Message) {
    this.http.post(this.BASE_URL + "/messages", message).subscribe(response => { 
      this.messageStore.push(response);
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError("Unable to Post message."); 
    });    
  }

  private handleError(error : string) {
    console.error();
    this._snackBar.open(error, "Close", {duration: 5000});
  }
}

export interface Message {
  text: string;
  owner: string;
}
