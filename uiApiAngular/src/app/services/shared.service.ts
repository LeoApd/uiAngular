import { User } from './../model/user';

import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public static instance : SharedService = null;
  user : User;
  token: string;
  usuarioLogado = new EventEmitter<boolean>();


  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

   isLoggdIn():boolean {
    if(this.user == null){
      return false;
    }
    return this.user.login != '';
  }




}
