import { SubheaderRightComponent } from 'src/app/components/header/subheader-right/subheader-right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { UserRoutingModule } from './user-routing.module';
// Components
import { HeaderComponent } from '../../components/header/header.component';

import { UserComponent } from './user.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
@NgModule({
  declarations: [UserComponent, HeaderComponent, SubheaderRightComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [],
})
export class UserModule {}
