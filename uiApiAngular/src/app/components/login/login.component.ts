import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';

import { UserAuth } from './../../model/userAuth';
import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuth = new UserAuth('','','');

  constructor(
    private userService: UserService,
    private router: Router,
    private shared: SharedService
  ) { }

  ngOnInit() {

  }

  login(){
    this.userService.login(this.userAuth).subscribe((response: any) =>{
      console.log(response)
      this.shared.token = response.token;
      this.shared.user = response.user;
      this.shared.usuarioLogado.emit(true);
      this.router.navigate(['']);

    }, err =>{
      this.shared.token = null;
      this.shared.user = null;
      this.shared.usuarioLogado.emit(false);
    });

  }

}

