import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Observable from rxjs library
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../Models/teacher';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private endpointUrl = "http://localhost:54824/api/Catalog/teachers";

  constructor(private http: HttpClient) { }


  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.endpointUrl);
  }
}
