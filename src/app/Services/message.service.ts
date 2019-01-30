import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Observable from rxjs library
import { HttpClient } from '@angular/common/http';

//Interfaces
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //API URL
  private endpointUrl = "http://localhost:60197";

  //Operations Path
  private sendMessageURL = "/api/Messages/message";
  private getMessageByUserIDPath = "/api/Messages/message/user/";
  private getChatListURL = "/api/Messages/message/chatlist/";

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any> {
    return this.http.post<any>(this.endpointUrl + this.sendMessageURL, message);
  }

  getMessagesByUserID(idFrom: number, idTo:number): Observable<any> {
    return this.http.get<any>(this.endpointUrl + this.getMessageByUserIDPath + idFrom + "/" + idTo);
  }

  getChatList(id: number): Observable<any> {
    return this.http.get<any>(this.endpointUrl + this.getChatListURL + id);
  }
}
