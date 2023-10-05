import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Home12Component } from './home12/home12.component';
import { BussdetailsComponent } from './bussdetails/bussdetails.component';
import { AutodetailsComponent } from './autodetails/autodetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [

  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'navbar',
    component : NavbarComponent,
    children:[
    {
      path : '',
      component : Home12Component
    },
    {
      path : 'home12',
      component : Home12Component
    },
    {
      path : 'bussdetails',
      component : BussdetailsComponent
    },
    {
      path : 'autodetails',
      component : AutodetailsComponent
    },
    {
      path : 'contactus',
      component : ContactusComponent
    },
    {
      path : 'aboutus',
      component : AboutusComponent
    },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
