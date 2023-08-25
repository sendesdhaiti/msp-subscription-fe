import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Comp/home/home.component';
import { AuthComponent } from './Comp/auth/auth.component';

const routes: Routes = [];

const main: Routes = [
  {path:"", component:HomeComponent}
];

const auth: Routes = [
  {path:"portal", component:AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(main),
    RouterModule.forRoot(auth),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
