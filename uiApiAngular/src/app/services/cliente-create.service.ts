import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOJA_API } from './loja.api';

@Injectable({
  providedIn: 'root'
})
export class ClienteCreateService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(user: User){
    return this.http.post(`${LOJA_API}/user/create`, user)
  }
}
