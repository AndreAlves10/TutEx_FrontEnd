import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Observable from rxjs library
import { HttpClient } from '@angular/common/http';

//Interface
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private endpointUrl = "http://localhost:60197";

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any> {
    return this.http.post<any>(this.endpointUrl + "/api/Messages/message", message);
  }

  getMessagesByUserID(id: number): Observable<any> {
    return this.http.get<any>(this.endpointUrl + "/api/Messages/message/user/" + id);
  }
}
