import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient){

    }

    fetchUrl = "https://fake-json-api.mock.beeceptor.com/users";

    getUserData(){
      return this.http.get<User[]>(this.fetchUrl);
    }
}
