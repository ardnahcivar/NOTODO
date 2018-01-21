import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LoginService ]
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

}
