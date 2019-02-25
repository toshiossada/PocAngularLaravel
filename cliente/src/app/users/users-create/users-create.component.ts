import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../app-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  public user: object = {};

  constructor(private service: AppHttpService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    console.log(this.user);
    this.service
      .build('users')
      .create(this.user)
      .subscribe(() => {
        this.router.navigate(['/users']);
      });
  }
}
