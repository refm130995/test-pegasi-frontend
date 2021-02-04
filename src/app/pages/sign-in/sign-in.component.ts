import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get getForm() {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.auth.signIn(this.form.value).then(
      (res) => {
        this.auth.setConfigClient(res);
      },
      (err) => {
        console.log(err);
        if (err.error.code == 404) {
          Swal.fire('Error!', 'Correo o contraseña incorrecto!', 'error');
        } else {
          Swal.fire('Error!', environment.DefaultMessages.error, 'error');
        }
      }
    );
  }
}
