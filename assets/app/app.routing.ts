import { TuristComponent } from './tilbyder/turist/turist.component';
import { PartyComponent } from './tilbyder/party/party.component';
import { HandicapComponent } from './tilbyder/handicap/handicap.component';
import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TekniskInfoComponent } from './teknisk-info/teknisk-info.component';


const APP_ROUTES: Routes = [
   // { path: '', redirectTo: '/', pathMatch: `full` }, //pathMatch tells to only redirect if the path is default
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tekniskInfo', component: TekniskInfoComponent }, { path: 'handicap', component: HandicapComponent },
    { path: 'party', component: PartyComponent },
    { path: 'turist', component: TuristComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)