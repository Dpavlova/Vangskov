import { TekniskInfoComponent } from './teknisk-info/teknisk-info.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AboutComponent } from './about/about.component';
import { AppComponent } from "./app.component";
import { ContactComponent } from './contact/contact.component';
import { GgmapsComponent } from './ggmaps/ggmaps.component';
import { FacebookComponent } from './facebook/facebook.component';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header.component";
import { TuristComponent } from './tilbyder/turist/turist.component';
import { PartyComponent } from './tilbyder/party/party.component';
import { HandicapComponent } from './tilbyder/handicap/handicap.component';


import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent, 
        ContactComponent,
        GgmapsComponent,
        FacebookComponent,
        HeaderComponent,
        HomeComponent,
        TekniskInfoComponent,
        TuristComponent,
        PartyComponent,
        HandicapComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'Vangskov'}),
        FormsModule, 
        routing, 
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey : 'AIzaSyARIgtUIe96L24BlgSJFXooQibq7ZAZmlY',
          }),
          FacebookModule.forRoot()
     ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {

}