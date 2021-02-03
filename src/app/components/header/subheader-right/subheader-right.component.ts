import { AuthService } from 'src/app/services/auth/auth.service';

import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader-right',
  templateUrl: './subheader-right.component.html',
  styleUrls: ['./subheader-right.component.scss'],
})
export class SubheaderRightComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  getUser() {
    return environment.getUser();
  }

  signOut() {
    this.auth.signOut();
  }
}
