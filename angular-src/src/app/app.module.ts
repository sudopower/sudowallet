import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { AddtowalletComponent } from './components/addtowallet/addtowallet.component';
import { PaymoneyComponent } from './components/paymoney/paymoney.component';
import { SendmoneyComponent } from './components/sendmoney/sendmoney.component';
import { ViewwalletComponent } from './components/viewwallet/viewwallet.component';

const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
{path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
{path:'addtowallet', component: AddtowalletComponent, canActivate:[AuthGuard]},
{path:'paymoney', component: PaymoneyComponent, canActivate:[AuthGuard]},
{path:'sendmoney', component: SendmoneyComponent, canActivate:[AuthGuard]},
{path:'viewwallet', component: ViewwalletComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddtowalletComponent,
    PaymoneyComponent,
    SendmoneyComponent,
    ViewwalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
