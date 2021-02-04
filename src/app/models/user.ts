export interface BirthDate {
  year: number;
  month: number;
  day: number;
}

export interface Phone {
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
}

export interface User {
  birthDate: BirthDate;
  phone: Phone;
  gender: string;
  pregnant: boolean;
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  password: string;
  created_at: string;
  updated_at: string;
  __v: number;
}
