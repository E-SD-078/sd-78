class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

let bob = new Human('Bob', 30);
const laila = new Human('l', 1);
console.log(laila);
console.log(bob.describe());

function show(name) {
  console.log('what is this', this); // undefined in strict mode, window in non-strict mode
}
show(name);
let obj2 = {
  name: 'Bob',
  greet() {
    console.log('what is this in arrow ', this.name); // In an arrow function the this is inherited from the surrounding context, by default it'll be the global this. We are using the optional chaining ? to avoid crashing since global this is undefined
  },
};
obj2.greet();

console.info('Falling out of scope');
// But do not give up on arrow functions!
let person1 = {
  name: 'Onur',
  hobbies: ['coding', 'reading', 'cooking'],
  listHobbies: function () {
    console.log(this);
    this.hobbies.forEach(function (hobby) {
      console.log(`My name is ${this?.name} and I like ${hobby}`); // Callback functions are called in the global context, so this is undefined!
    });
  },
};
const person = { name: 'sdf', address: '4 something street xcity xcountry' };
console.warn(person.address);

person1.listHobbies();
console.info('Lexical scope with arrow functions');
let person2 = {
  name: 'Onur',
  hobbies: ['coding', 'reading', 'cooking'],
  listHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`My name is ${this.name} and I like ${hobby}`); // An arrow function binds its this context from the surroinding context, in this case the person2 object!
    });
  },
};
// Base class representing a character in a game
class Character {
  // Private fields
  #name;
  #health;
  #strength;

  constructor(name, health, strength) {
    this.#name = name;
    this.#health = health;
    this.#strength = strength;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Getter for health
  getHealth() {
    return this.#health;
  }

  // Method to reduce health
  takeDamage(damage) {
    this.#health -= damage;
    if (this.#health < 0) {
      this.#health = 0;
    }
  }

  // Method to attack another character
  attack(target) {
    target.takeDamage(this.#strength);
  }

  greet() {
    return `Hey there! Traveler. Need a hero?`;
  }
}

// Derived class representing a wizard
class Wizard extends Character {
  // Private field for mana
  #mana;

  constructor(name, health, strength, mana) {
    super(name, health, strength);
    this.#mana = mana;
  }

  // Method to cast a spell
  castSpell(target) {
    if (this.#mana >= 10) {
      console.log(`${this.getName()} casts a spell!`);
      target.takeDamage(this.getHealth() * 2);
      this.#mana -= 10;
    } else {
      console.log(`${this.getName()} does not have enough mana!`);
    }
  }

  // Getter for mana
  getMana() {
    return this.#mana;
  }

  greet() {
    return `I can do magic!`;
  }
}

// Creating instances of characters
const hero = new Character('Hero', 100, 10);
const wizard = new Wizard('Gandalf', 80, 5, 30);

// Demonstrating encapsulation and abstraction
console.log(hero.getName()); // Output: Hero
console.log(hero.getHealth()); // Output: 100
hero.takeDamage(20);
console.log(hero.getHealth()); // Output: 80

// Demonstrating inheritance and polymorphism
const characters = [hero, wizard];

characters.forEach((character) => {
  character.attack(hero);
  console.log(`${character.getName()} attacked Hero!`);
  console.log(`Hero's health: ${hero.getHealth()}`);
  console.log(character.greet());
});

// Wizard specific method
console.log(wizard.getMana()); // Output: 30
wizard.castSpell(hero);
console.log(hero.getHealth()); // Output: 70
