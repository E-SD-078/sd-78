//type inference
let age = 23;

age = 'john';
console.log(age);
//implicit type
let name: string = 'mark';

//type definition
type Student = {
  name: string;
  age: number;
  email: string;
  isActive?: boolean;
};
// object of type Student
const student1: Student = {
  name: 'student1',
  age: 22,
  email: 's@s.com',
};
console.log(student1);
// we can initialize with null and set the type to be one of 2 types
let students: Student[] | null = null;

students = [student1];
console.log(students);
let data: string;
data = 'hello';
data = 42; // ❌ Error: Type 'number' is not assignable to type 'string'

console.log(data);

const getName = (name: string, age: number): string => {
  return `Hello my name is ${name} and age is ${age}`;
};
const getName1 = (name: string, age: number): void => {
  console.log(`Hello my name is ${name} and age is ${age}`);
};
console.log(getName('John', 33));
getName1('adsf', 22);
const numberA = '1';
const numberB = '2';

function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(1, 2));

function isOldEnough(age: number): string {
  if (age >= 18) {
    return 'You are old enough.';
  } else {
    return 'you are not old';
  }
}
console.log(isOldEnough(10));
//arrays
const scores: number[] = [95, 87, 100];
console.log(scores);

//tuples
const user: [string, number] = ['Ada', 36];
console.log(user);
const user2: { name: string; age: number } = {
  name: 'Ada',
  age: 36,
};

console.log(user2);
type Product1 = { name: string; description?: string };
const product: Product1 = {
  name: 'Laptop',
};

console.log(product);
console.log(product.description?.toUpperCase());
//?? is nullish operator if the value is null or undefined it will show the right side
console.log(product.description ?? 'No description available');
const settings: { readonly theme: string } = {
  theme: 'dark',
};

settings.theme = 'light'; // ❌ Error: Cannot assign to 'theme' because it is a read-only property
console.log(settings);
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductList = Product[];

const products: ProductList = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 149.5,
  },
  {
    id: 3,
    name: '4K Monitor',
    price: 329.99,
  },
];

for (const product of products) {
  console.log(product);
}
type Direction = 'left' | 'right' | 'up' | 'down';

// Example 1: Using in a variable
let move: Direction = 'up';

// Example 2: Function accepting a Direction
function movePlayer(direction: Direction) {
  console.log(`Player moves ${direction}`);
}

movePlayer('left'); // ✅
movePlayer('down'); // ✅
movePlayer('forward'); // ❌ Error: Argument of type '"forward"' is not assignable to type 'Direction'

// Example 3: Switch statement with exhaustive checking
function handleDirection(dir: Direction) {
  switch (dir) {
    case 'left':
      console.log('Moving left');
      break;
    case 'right':
      console.log('Moving right');
      break;
    case 'up':
      console.log('Moving up');
      break;
    case 'down':
      console.log('Moving down');
      break;
    default:
      // TypeScript will warn if we forget a case
      const _exhaustiveCheck: never = dir;
      return _exhaustiveCheck;
  }
}

handleDirection('left');
handleDirection('forward'); // ❌ Error: Argument of type '"forward"' is not assignable to type 'Direction'
type Greeter = (name: string) => string;
type Comparator = (a: number, b: number) => number;
type Log = 'error' | 'warn' | 'info' | 'log';
// type for the function that will take one param we give it any name in this case is prefix the type will be Log which is one of the 4 values above this function need to return a function that takes in msg as param and return void
type LoggerFactory = (prefix: Log) => (msg: string) => void;

// Example 1: Assigning a Function to a Variable
const greet: Greeter = (name) => `Hello, ${name}`;
console.log(greet('Alejandra'));

// Example 2: Passing as a Callbac
const sortNumbers = (arr: number[], compare: Comparator): number[] => {
  return arr.sort(compare);
};
const descending: Comparator = (a, b) => b - a;
console.log(sortNumbers([3, 1, 2], descending));

// Example 3: Returning a Function
const createLogger: LoggerFactory = (prefix) => (msg) => {
  console[prefix](`[${prefix.toUpperCase()}] ${msg}`);
};

const errorLogger = createLogger('error');
const warnLogger = createLogger('warn');
errorLogger('Something broke'); // [ERROR] Something broke
warnLogger('Something almost broke');
