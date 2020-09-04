import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';// on importe le service 'Title'


import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemon';

@Component({
    selector: 'pokemon-app',
    templateUrl: `../app/app.component.html`,
})
export class AppComponent implements OnInit {
    public constructor(private titleService: Title) {}

    ngOnInit(){
        this.titleService.setTitle("Pokémon-app"); 
    }
}

   /* private pokemons: Pokemon[];
    private title: string = "Pokémons";
    //private value: string = '';
    //age = 10;

    ngOnInit() {
        this.pokemons = POKEMONS;

    }

    selectPokemon(pokemon: Pokemon) {
        alert("Vous avez cliqué sur " + pokemon.name);
    }
*/


    /*
        onClick() {
            console.log("clique");
        }
    
        onKey(value: string) {
            this.value = 'Bonjour ' + value;
        }
    */







/*
<ul>
    <li>Bulbizzar</li>
    <li>salameche</li>
    <li>carapuce</li>
</ul>

<-------- propriété click et utlisation de la fonction onClick() --------------->
<button (click)=onClick()>Cliquer</button>


<input #box (keyup)="onKey(box.value)">
<--------- l'interpolation ------------>
<p>{{ box.value }}</p>

<----------#box (référence) + definition de la variable values dans le composant HTML même ---------->
<input #box2 (keyup.enter)="values=box2.value" (blur)="values=box2.value">
<--------- l'interpolation ------------>
<p>{{ values }}</p>

<----- La directive *ngIf ------------->
<p *ngIf="age > 18"> Ceci est un message destiné aux majeurs</p>
*/