import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FilmListComponent } from './content/film-list/film-list.component';
import { FilmDescComponent } from './content/film-desc/film-desc.component';

import { FilmGetterService } from './services/film-getter.service';
import { FilmManagementService } from './content/film-management.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FilmListComponent, 
    FilmDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FilmGetterService, 
    FilmManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
