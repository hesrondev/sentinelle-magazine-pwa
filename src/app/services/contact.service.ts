import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  sendJoinInfo(data: any) {
    return this.http.post(this.url + '/contact', data);
  }
}
