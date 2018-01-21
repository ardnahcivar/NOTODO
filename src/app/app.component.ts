import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent {

  constructor(private login: LoginService) {

  }
}
