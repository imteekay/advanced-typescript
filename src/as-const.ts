// using var
var varPerson = {
  name: 'TK',
  age: 23,
};

varPerson.name = 'Other than TK';
varPerson.name; // 'Other than TK'

// using let
let letPerson = {
  name: 'TK',
  age: 23,
};

letPerson.name = 'Other than TK';
letPerson.name; // 'Other than TK'

// using const
const person = {
  name: 'TK',
  age: 23,
};

person.name = 'Other than TK';
person.name; // 'Other than TK'

// using as const to add readonly utility for the whole object
const personAsConst = {
  name: 'TK',
  age: 23,
} as const;

// @ts-expect-error "Cannot assign to 'name' because it is a read-only property."
personAsConst.name = 'Other than TK';
personAsConst.name; // 'TK'

// using as const for a complex object
const complexPerson = {
  name: 'TK',
  age: 23,
  address: {
    address: 'Shinjuku, Tokyo',
    number: 10,
    complement: 'Ap 52',
  },
  books: [
    {
      title: 'Effective TypeScript',
      author: 'Dan Vanderkam',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
    },
    {
      title: 'Leonardo Da Vinci',
      author: 'Walter Isaacson',
    },
  ],
} as const;

// @ts-expect-error "Cannot assign to 'name' because it is a read-only property."
complexPerson.name = 'Other than TK';
complexPerson.name; // 'TK'

// @ts-expect-error "Cannot assign to 'number' because it is a read-only property."
complexPerson.address.number = 2;

// @ts-expect-error "Cannot assign to 'address' because it is a read-only property."
complexPerson.address = 'An address';

// @ts-expect-error "Property 'push' does not exist on type 'readonly ["Effective TypeScript", "Atomic Habits", "Leonardo Da Vinci"]'."
complexPerson.books.push({ title: 'Another book', author: 'Another Author' });
