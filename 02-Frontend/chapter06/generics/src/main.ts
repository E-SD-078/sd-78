/*
Generics allow you to create reusable components, functions, and types that work with a variety of data types while preserving type safety.

They act as placeholders for types, letting you write more flexible and reusable code.

Generic Functions
Instead of repeating logic for every possible type, you can write a function that works for any type.
*/
// T is a placeholder for the type of data returned by the API.
// The caller chooses the type, so the result is checked by TypeScript.
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
}

type Post = { userId: number; id: number; title: string; body: string };
// async function fetchPosts(url: string): Promise<any[]> {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error('Fetch failed');
//   return res.json();
// }

// Here, T is Post[], meaning that posts is known to be an array of Post objects.
const posts = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');

// console.log(posts);

type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

// Here, T is Person[], so each item in people has properties such as name and height.
const people = await fetchData<Person[]>('https://swapi.info/api/people');
// console.log(people);

/**
 * Generic Types and Type Aliases
You can define generic types using type aliases. ApiResponse<T> can hold data of any type:
 */
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
// type UserResponse = {
//   success: boolean;
//   data: { name: string };
// };
// type PostResponse = {
//   success: boolean;
//   data: { userId: number; id: number; title: string; body: string };
// };

// In this example, T is { name: string }.
const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: 'Ada' },
};
const postResponse: ApiResponse<Post> = {
  success: true,
  data: { userId: 1, id: 2, title: 'Ada', body: 'sdfdsf' },
};

console.log(userResponse.data);
console.log(postResponse.data);
// T is inferred from the value passed to the function.
// A string goes in and a string comes back; a number goes in and a number comes back.
function printValue<T>(value: T): T {
  return value;
}

const message = printValue<string>('Hello, TypeScript');
const score = printValue<number>(100);
console.log(message, score);

// T represents the type of every item in the array.
// The result can be undefined because an empty array has no first item.
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = getFirst<string>(['Luke', 'Leia']);
const firstNumber = getFirst([10, 20, 30]);
console.log(firstName, firstNumber);

/**
 * Partial<T>
 * Makes all properties in T optional.
 * This is useful when updating only some properties of an object.
 */
type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Patrick',
    email: 'patrick@mail.com',
  },
  {
    id: 2,
    name: 'Reagan',
    email: 'reagan@mail.com',
  },
];
/*
 Built-in utilities and helpers
TypeScript ships with a number of built-in utility types that help you transform and manipulate types. These are especially useful when working with reusable patterns, APIs, or dynamically shaped data.
*/
// newData can contain name, email, or id, but none of them are required.
const updateUser = (id: number, newData: Partial<User>) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...newData };
  }
};

console.log(users);
updateUser(1, { name: 'Ada' });
console.log(users);

/**
 * Required<T>
 * Converts every optional property in T into a required property.
 * It is the opposite of Partial<T>.
 */
type Settings = {
  darkMode?: boolean;
  language?: string;
};

// Settings allows an empty object because both properties are optional.
const defaultSettings: Settings = {};

// Required<Settings> now requires both darkMode and language.
// This is useful when the application needs complete settings before it starts.
const initSettings = (config: Required<Settings>) => {
  return config;
};

const appSettings = initSettings({
  darkMode: true,
  language: 'English',
});

console.log(defaultSettings);
console.log(appSettings);

/**
 * Readonly<T>
 * Makes every property in T immutable after an object is created.
 * This is useful for data that should not be changed by accident.
 */
type Todo = {
  title: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: 'Learn TypeScript',
  completed: false,
};

// TypeScript prevents this change because todo is read-only.
// todo.title = 'Try JavaScript';
console.log(todo);

/**
 * Pick<T, K>
 * Creates a new type using only the selected properties from T.
 * A public profile usually does not need to expose a user's email address.
 */
type PublicUser = Pick<User, 'id' | 'name'>;

const publicUser: PublicUser = {
  id: 1,
  name: 'Ada',
};

console.log(publicUser);

/**
 * Omit<T, K>
 * Creates a new type with the selected properties removed from T.
 * This is useful when creating a form that should not edit a user's id.
 */
type UserForm = Omit<User, 'id'>;

const userForm: UserForm = {
  name: 'Grace',
  email: 'grace@mail.com',
};

console.log(userForm);

/**
 * Record<K, T>
 * Creates an object type where every key in K has a value of type T.
 * This makes sure that every role has an access rule.
 
 */
type Role = 'admin' | 'user' | 'guest';
type RoleAccess = Record<Role, boolean>;

const roleAccess: RoleAccess = {
  admin: true,
  user: true,
  guest: false,
};

console.log(roleAccess);

/**
 * Exclude<T, U>
 * Removes types from T that are also found in U.
 * Here, a scroll event is excluded because the app only handles clicks and hovers.
 * exclude works with union type x | y | z
 * while omit works with normal types a = {id:string,email:string}
 */
type AppEvent = 'click' | 'hover' | 'scroll';
type InteractiveEvent = Exclude<AppEvent, 'scroll'>;

const eventToHandle: InteractiveEvent = 'click';
console.log(eventToHandle);

/**
 * Extract<T, U>
 * Keeps only the types from T that are also found in U.
 * This selects the mouse-related events from all application events.
 */
type MouseEventName = Extract<AppEvent, 'click' | 'hover'>;

const mouseEvent: MouseEventName = 'hover'; //assign value to a var (mouseEvent)
console.log(mouseEvent);

/**
 * NonNullable<T>
 * Removes null and undefined from T.
 * This is useful after checking that optional data actually exists.
 */
type Name = string | null | undefined;
type CleanName = NonNullable<Name>;

const userName: CleanName = 'Ada';
console.log(userName);
// NonNullable works with union types only
// type NewType = {
//   x: string;
//   y: string | null;
//   z?: string;
// };
// type CleanNewType = NonNullable<NewType>
