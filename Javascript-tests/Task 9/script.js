/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive(){
        if(this.budget>=100000000){
            return true
        } else {
            return false
        }
    }
}

//test

const theShining = new Movie('The Shining', 'Stanley Kubrick', 19000000);
console.log(`Movie ${theShining.title} was directed by ${theShining.director}`)
if(theShining.wasExpensive()){
    console.log(`${theShining.title} had the budget of ${theShining.budget} and it is considered to be expensive`)
} else {
    console.log(`${theShining.title} had the budget of ${theShining.budget} and it is not considered to be expensive`)
}