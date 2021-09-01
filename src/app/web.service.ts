import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3030/api';

  messages : any = [];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.getMessages();
  }
  async getMessages() {
    try {
      this.messages = await this.http.get(this.BASE_URL + "/messages",{ responseType: "json" }).toPromise(); 
    } catch (error) {
      this.handleError("Unable to Get messages.");
    }
  }

  async postMessage(message: Message) {
     try {
        let response = await this.http.post(this.BASE_URL + "/messages", message).toPromise();
        this.messages.push(response);
     } catch (error) {
       this.handleError("Unable to Post message.");
     }
    
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
