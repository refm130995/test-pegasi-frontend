import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.email]],
      lastname: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required, Validators.email]],
      pregnant: [false, [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.email]],
      birth: ['', [Validators.required, Validators.email]],
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
    if (this.form.invalid) {
      return;
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
