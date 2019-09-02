
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOJA_API } from './loja.api';
import { UserAuth } from '../model/userAuth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(userAuth: UserAuth){
    return this.http.post(`${ LOJA_API }/user/auth`, userAuth);
  }
}
