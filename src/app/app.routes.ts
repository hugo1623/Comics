import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { DcComponent } from './components/dc/dc.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { AboutComponent } from './components/about/about.component';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dc', component: DcComponent },
    { path: 'marvel', component: MarvelComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
