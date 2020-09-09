function Pokemon(name, health, attack, defense) {


    this.name = name;
    this.health health;
    this.attack = attack;
    this.defense = defense;
    console.log(this.attack);
    this.speak = function(){
        this.attack;
        console.log(this.name);
    }
}
//pass our arguments
var pichu = new Pokemon('Pichu', 15, 8, 5)
pichu.speak();
var squishy = new Pokemon('squishy', 9001, 4, 10)
squishy.speak();
// pokemon fighting function
function PokemonBattle(pokemon1, pokemon2) {
    while (pokemon1.health > 0 || pokemon2.health > 0)
    pokemon1.health -= pokemon2.attack
}

//assign to a function as value onto the blueprint for making a Pokemon
Pokemon.prototype.speak = function(){

}

PokemonBattle(pichu,squishy);
var pokedex = [pichy, squishy]
var pokedex = [0] = {Pokemon}
//parameters in the parentheses next to function name of constructor function
//they are placeholders for argument values
//need to be present for argument to work

console.log(pichu) //refers to global window object outside of the function 

//code within a function vs global???
