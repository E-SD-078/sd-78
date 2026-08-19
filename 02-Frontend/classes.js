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
