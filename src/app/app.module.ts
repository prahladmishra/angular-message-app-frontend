import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages.component';
import { NavComponent } from './nav-component';
import { NewMessagesComponent } from './new-message.component';
import { RegisterComponent } from './register.component';
import { WebService } from './web.service';

let routes: any = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "messages",
    component: MessagesComponent,
  },
  {
    path: "messages/:name",
    component: MessagesComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessagesComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ WebService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
