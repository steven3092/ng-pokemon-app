"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // on importe le service 'Title'
var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Pokémon-app");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-app',
            templateUrl: "../app/app.component.html",
        }),
        __metadata("design:paramtypes", [platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map