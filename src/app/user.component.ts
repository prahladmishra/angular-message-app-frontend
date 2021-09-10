import { Component } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebService } from "./web.service";

@Component({
  selector: "user",
  template: `
    <mat-card class="card">
        <mat-card-content>
            <p> 
            <mat-form-field appearance="standard">
                <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
            </mat-form-field>
            </p>
            <p>
            <mat-form-field appearance="standard">
                <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
            </mat-form-field>
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="primary" (click)="post()">Save changes</button>
        </mat-card-actions>
    </mat-card>
  `,
})
export class UserComponent {


    constructor(private webService: WebService, private _snackBar:MatSnackBar ) { }
    model = {
        firstName:"",
        lastName:""
    }

    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            let response = JSON.parse(JSON.stringify(res));
            this.model.firstName = response.firstName;
            this.model.lastName = response.lastName;
        })
    }
    
    post() {
        this.webService.saveUser(this.model).subscribe(res => {
            this._snackBar.open("Changes Saved", "", {duration: 5000});
        });
    }
}
