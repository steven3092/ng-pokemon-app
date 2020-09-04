import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from '../pokemons/pokemon-routing.module';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from '../pokemons/edit-pokemon.component';
import { PokemonFormComponent } from '../pokemons/pokemon-form.component';
import { PokemonSearchComponent } from '../pokemons/search-pokemon.component';
import { LoaderComponent } from '../loading/loader.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

import { PokemonsService } from '../pokemons/pokemons.service'



@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
        FormsModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        PokemonSearchComponent,
        LoaderComponent,
        BorderCardDirective,
        PokemonTypeColorPipe

    ],
    providers: [
        PokemonsService
    ]
})
export class PokemonsModule { }