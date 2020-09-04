import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';// on importe le service 'Title'

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login.component';
import { LoginRoutingModule } from './authentication/login-routing.module';

import { AppRoutingModule } from '../app/app-routing.module';
import { PokemonsModule } from '../app/pokemons/pokemons.module';

import { AppComponent } from '../app/app.component';
import { PageNotFoundComponent } from '../app/page-not-found.component';

import { LoaderComponent } from './loading/loader.component';



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        PokemonsModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent


    ],
    providers: [
        Title // on fournis le service 'Title' à l'ensemble de l'application 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }