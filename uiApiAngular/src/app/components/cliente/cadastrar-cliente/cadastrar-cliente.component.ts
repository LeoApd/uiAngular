import { Component, OnInit } from '@angular/core';

import { ClienteCreateService } from '../../../services/cliente-create.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  constructor(private cliente: ClienteCreateService) { }

  user = new User();

  ngOnInit() {
  }

  cadastraCliente(){
    console.log(this.user)
    this.cliente.cadastrarCliente(this.user).subscribe(response =>{

    })
  }

}
