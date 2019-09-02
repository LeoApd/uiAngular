import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarioLogado: boolean = false
  shared: SharedService;

  constructor(){
    this.shared = SharedService.getInstance();
  }

  ngOnInit(){
    this.shared.usuarioLogado.subscribe(
      show => this.usuarioLogado = show
    );
  }


}
