class Book {
  title: string;
  author?: string;
  readonly pages: number;

  constructor(title: string, author?: string, pages: number = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const myBook = new Book('A Bear Called Paddington', 'Michael Bond');

myBook.title = 'Plagiarist'; // This works
myBook.author = 'john doe';
// myBook.pages = 250; // ❌ Error: Cannot assign to 'pages' because it is a read-only property.
// Access Modifiers (private fields using #)
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  get value() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.value); // 1
// c.#count; // ❌ Property '#count' is not accessible outside class 'Counter' because it has a private identifier

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  updateBalance(val: number): number {
    this.balance += val;
    return this.balance;
  }
  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount(1000);
console.log(acc.getBalance()); // 1000
console.warn(acc.updateBalance(2));
// console.log(acc.balance); // ❌ Error: Property 'balance' is private

/**
When to Use Classes
Use classes when:

You need encapsulation (bundling data and behaviour together)
You want to model stateful entities (e.g. users, accounts, components)
You need inheritance or shared logic through subclassing
Avoid classes when:

You only need a shape/type (prefer type aliases or interfaces)
You don’t need object-oriented features like methods or state
 */

class ContentCreator {
  username: string;
  constructor(username: string) {
    this.username = username;
  }

  post(): void {
    console.log(`${this.username} posts something generic.`);
  }
}

class YouTuber extends ContentCreator {
  //polymorphism
  post(): void {
    console.log(`${this.username} uploads a new video.`);
  }
}

const creator = new YouTuber('devGuru');
creator.post(); // devGuru uploads a new video.

//Use protected when you want subclasses to access members, but keep them hidden from outside code:
class GameCharacter {
  protected energy: number = 100;

  charge(amount: number): void {
    this.energy += amount;
  }
  getEnergy(): number {
    return this.energy;
  }
}

class Mage extends GameCharacter {
  castSpell(): void {
    if (this.energy >= 20) {
      this.energy -= 20;
      console.log('Spell cast!');
    } else {
      console.log('Not enough energy.');
    }
  }
}

const wizard = new Mage();
wizard.charge(30);
wizard.castSpell(); // Spell cast!
console.log(wizard.getEnergy());
//wizard.energy = 40; // Error: Property 'energy' is protected and only accessible within class 'GameCharacter' and its subclasses.

/*
Concrete vs Abstract Methods
A concrete method has an implementation. You can call it directly. A abstract method defines a method signature without implementation, forcing subclasses to implement it. You cannot instantiate a class that has abstract methods.

This leads us to abstract classes.

Abstract Classes
Abstract classes define common structure and behaviour while requiring specific methods to be implemented by subclasses.
When to Use Abstract Classes
You need to share code among several related classes
You want to enforce method implementation while providing shared logic
You need access modifiers like protected or private
*/
abstract class Notification {
  constructor(public recipient: string) {}

  abstract send(): void;

  log(): void {
    console.log(`Sending a notification to ${this.recipient}`);
  }
}

class EmailNotification extends Notification {
  send(): void {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMSNotification extends Notification {
  send(): void {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

const email = new EmailNotification('ada@example.com');
email.log(); // Sending a notification to ada@example.com
email.send(); // Email sent to ada@example.com

const sms = new SMSNotification('+1234567890');
sms.log(); // Sending a notification to +1234567890
sms.send(); // SMS sent to +1234567890

/*
An interface defines the shape of an object or class. It contains method signatures and property declarations, but no implementation.
When everything is abstract (just method and property declarations, no implementation), we use interfaces. These are like pure contracts and help enforce structure without inheritance.
When to Use Interfaces
You want to define a contract for classes, functions, or objects
You need multiple inheritance
You don’t need shared implementation
*/

interface Notifier {
  send(recipient: string): void;
  log(value: string): void;
}

class EmailNotifier1 implements Notifier {
  send(recipient: string): void {
    console.log(`Email sent to ${recipient}`);
  }
  log(value: string): void {
    console.log(`Email sent to ${value}`);
  }
}

class SMSNotifier1 implements Notifier {
  send(recipient: string): void {
    console.log(`SMS sent to ${recipient}`);
  }
  log(value: string): void {
    console.log(`Email sent to ${value}`);
  }
}

class Notification1 {
  constructor(
    public recipient: string,
    private notifier: Notifier, //this to allow the Notification1 class to receieve any class instance that implements the Notifier interface
  ) {}

  send(): void {
    this.notifier.send(this.recipient);
  }

  log(): void {
    console.warn(`Sending a notification to ${this.recipient}`);
  }
}

// Example usage:
const x = new EmailNotifier1();
const emailNotification = new Notification1('ada@example.com', x);
emailNotification.log(); // Sending a notification to ada@example.com
emailNotification.send(); // Email sent to ada@example.com

const smsNotification = new Notification1('+1234567890', new SMSNotifier1());
smsNotification.log(); // Sending a notification to +1234567890
smsNotification.send(); // SMS sent to +1234567890
