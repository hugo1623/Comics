import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import {HeroesService} from './servicios/heroes.service'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DcComponent } from './components/dc/dc.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { CronologiaComponent } from './components/cronologia/cronologia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DcComponent,
    MarvelComponent,
    CronologiaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  /*van todos los servicios*/
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
