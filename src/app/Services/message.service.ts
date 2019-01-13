import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Observable from rxjs library
import { HttpClient } from '@angular/common/http';

//Interface
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private endpointUrl = "http://localhost:60197/api/Messages/message";

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any> {
    console.log("Message sent service");
    return this.http.post<any>(this.endpointUrl, message);
  }
}
