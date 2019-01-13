import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessagesByUserID(1);
  }

  sendMessage(messageContent: string) {
    var message: Message = {
      "userIDFrom": 1,
      "userIDTo": 2,
      "content": messageContent,
      "messageUTCCreatedDate": new Date(),
      "seenByUserTo": false
    };

    this.messageService.sendMessage(message).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("sendMessage finished")
    );
  }

  getMessagesByUserID(id: number) {
    this.messageService.getMessagesByUserID(id).subscribe(
      data => this.messages = data.value,
      error => console.log(error),
      () => console.log("sendMessage finished")
    );
  }
}