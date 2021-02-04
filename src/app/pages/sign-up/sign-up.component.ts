import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  model: NgbDateStruct;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Colombia,
    CountryISO.Venezuela,
  ];
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: [13, [Validators.required]],
      gender: ['Sin definir'],
      pregnant: [false],
      phone: [],
      birthDate: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get getForm() {
    return this.form.controls;
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Colombia, CountryISO.Venezuela];
  }

  async onSubmit() {
    this.submitted = true;
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }

    this.auth.signUp(this.form.value).then(
      (res) => {
        Swal.fire('Usuario registrado exitosamente!', 'Bienvenido!', 'success');
        this.auth.setConfigClient(res);
      },
      (err) => {
        console.log(err);
        if (err.error.code == 404) {
          Swal.fire('Error!', 'Correo o contraseña incorrecto!', 'error');
        } else if (err.error.code == 400) {
          Swal.fire(
            'Error!',
            'La fecha de nacimiento no coincide con la edad seleccionada',
            'error'
          );
        } else {
          Swal.fire('Error!', environment.DefaultMessages.error, 'error');
        }
      }
    );
  }

  counter(i: number) {
    return new Array(i);
  }
}
