"use strict"

//comparison

const name1 = 'Ridho'
const name2 = 'Geofenna'
const nameCompared = name1 == name2

console.log(nameCompared); //false

console.log('Ridho' > 'Geofenna'); //true

// if else
let name = prompt("What's ur name ?");
let age = prompt("how old are you ?");

if(age >= 17) {
  alert(`Hello ${name}, You are ${age} years Old, Welcome to this site!`);
} else if(age < 16) {
  alert(`Hello ${name}, you're just ${age} years old, Comeback later :))`)
} else {
  alert("maaf format yang anda masukan salah");
}

//break

const personA = {
  name: 'Ridho',
  age: 25
}

const personB = {
  name: 'Geofenna',
  age: 27
}

switch (personA.age > personB.age) {
  case true:
    document.write(`Ya, Usia ${personA.name} lebih tua daripada usia ${personB.name}`)
    break
  case false:
    document.write(`Tidak, usia ${personB.name} lebih muda daripada usia ${personA.name}`);
    break
  default:
    document.write('test');
}
