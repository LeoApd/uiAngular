import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  name: string;

  constructor(private shared: SharedService) { }

  ngOnInit() {

    this.name = this.shared.user['name'];
  }

}
