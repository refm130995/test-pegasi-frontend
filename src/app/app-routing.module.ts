import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
