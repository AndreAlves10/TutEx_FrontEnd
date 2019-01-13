import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    console.log("Message sent");
    var message: Message = {
      "userIDFrom": 1,
      "userIDTo": 2,
      "content": 'olá',
      "messageUTCCreatedDate": new Date(),
      "seenByUserTo": false
    };

    this.messageService.sendMessage(message).subscribe(
      data => console.log(data)
      );
  }
}