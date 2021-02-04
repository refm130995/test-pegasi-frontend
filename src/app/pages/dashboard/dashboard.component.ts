import { AuthService } from 'src/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    console.log('llamando');

    this.auth.getUserData().then(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
