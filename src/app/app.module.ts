import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { SingleDvdComponent } from './dvd-list/single-dvd/single-dvd.component';
import { DvdFormComponent } from './dvd-list/dvd-form/dvd-form.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DvdsService } from './services/dvds.service';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'dvds', canActivate: [AuthGuardService], component: DvdListComponent },
  { path: 'dvds/new', canActivate: [AuthGuardService], component: DvdFormComponent },
  { path: 'dvds/view/:id', canActivate: [AuthGuardService], component: SingleDvdComponent },
  { path: '', redirectTo: 'dvds', pathMatch: 'full' },
  { path: '**', redirectTo: 'dvds' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DvdListComponent,
    SingleDvdComponent,
    DvdFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    DvdsService,
    AuthGuardService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
