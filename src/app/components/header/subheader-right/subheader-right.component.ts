import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-subheader-right',
  templateUrl: './subheader-right.component.html',
  styleUrls: ['./subheader-right.component.scss'],
})
export class SubheaderRightComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this.auth.signOut();
  }
}
