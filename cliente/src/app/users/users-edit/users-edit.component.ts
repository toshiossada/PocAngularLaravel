import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  public user: any = {};

  constructor(private service: AppHttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.view(params.id));
  }

  view(id) {
    this.service.build('users')
    .get(id)
    .subscribe((data) => this.user = data);
  }

  save() {
    this.service
      .build('users')
      .update(this.user.id, this.user)
      .subscribe(() => {
        this.router.navigate([`/users/${this.user.id}`]);
      });
  }
}
