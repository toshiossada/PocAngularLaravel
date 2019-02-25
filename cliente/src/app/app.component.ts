import { Component } from '@angular/core';
import { AppHttpService } from './app-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste';
  isLogged = false;
  constructor(private service: AppHttpService) {

  }

  ngOnInit(): void {
    let urlParts = window.location.href.split('#');
    if (urlParts[1]) {
      urlParts = urlParts[1].split('&');
      urlParts.forEach(
        (item, key) => {
          const items = item.split('=');
          urlParts[items[0]] = items[1];

          urlParts.splice(key, 1);

        }
      );

      window.localStorage.setItem('token', urlParts['access_token']);
    }

    if (window.localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  login($event) {
    $event.preventDefault();
    this.service.login();
  }

  logout($event) {
    window.localStorage.removeItem('token');
    window.location.href = window.location.href;
    this.isLogged = false;
  }
}
