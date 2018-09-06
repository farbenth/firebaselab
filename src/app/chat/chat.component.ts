import { Component, OnInit, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Message } from '../message.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userAuth : string;
  
  messages: Observable<any[]>;
  private msgRef: AngularFirestoreCollection<Message>;
  @ViewChild('msgContainer') private messagesContainer: ElementRef;

  constructor(private db: AngularFirestore) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
    this.messages.subscribe(res => console.log(res));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
      try {
          this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }
}
