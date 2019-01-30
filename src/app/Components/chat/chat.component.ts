import { Component, OnInit, Directive } from '@angular/core';
import { Message } from '../../interfaces/message';
import { Chat } from '../../interfaces/chat';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentUserID = 1;

  chatList: Chat[];
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getChatList(this.currentUserID);
    
  }

  getChatList(id: number) {
    this.messageService.getChatList(id).subscribe(
      data => this.chatList = data.value,
      error => console.log(error),
      () => console.log("getChatList finished")
    );
  }

  onChatClick(userIDTo: number){
    this.getMessagesByUserID(this.currentUserID, userIDTo);//change userID
  }

  sendMessage(messageContent: string) {
    console.log(messageContent);
    var message: Message = {
      "userIDFrom": this.currentUserID,
      "userIDTo": 2,
      "nameUserFrom": "User1",
      "nameUserTo": "User2",
      "content": messageContent,
      "messageUTCCreatedDate": new Date(),
      "seenByUserTo": false
    };

    this.messages.push(message);

    this.messageService.sendMessage(message).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("sendMessage finished")
    );
  }

  getMessagesByUserID(idFrom: number, idTo: number) {
    this.messageService.getMessagesByUserID(idFrom, idTo).subscribe(
      data => {
        this.messages = data.value;
      },
      error => console.log(error),
      () => console.log("getMessagesByUserID finished")
    );
  }

}
