import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: "AIzaSyBQ-N5GuX5II7F3fVuYRe6NhTIYWqpvGNk",
  authDomain: "chat-test-56bc0.firebaseapp.com",
  databaseURL: "https://chat-test-56bc0.firebaseio.com",
  projectId: "chat-test-56bc0",
  storageBucket: "chat-test-56bc0.appspot.com",
  messagingSenderId: "996870946855"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
