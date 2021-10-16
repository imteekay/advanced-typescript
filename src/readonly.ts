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

// using readonly
type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
};

const readonlyPerson: ReadonlyPerson = {
  name: 'TK',
  age: 23,
};

// @ts-expect-error Cannot assign to 'name' because it is a read-only property
readonlyPerson.name = 'Other than TK';
readonlyPerson.name; // 'TK'

// using Readonly
type Person = {
  name: string;
  age: number;
};

const ReadonlyPerson: Readonly<Person> = {
  name: 'TK',
  age: 23,
};

// @ts-expect-error Cannot assign to 'name' because it is a read-only property
ReadonlyPerson.name = 'Other than TK';
ReadonlyPerson.name; // 'TK'

// using Readonly for a complex object
type Address = Readonly<{
  address: string;
  number: number;
  complement: string;
}>;

type Book = Readonly<{
  title: string;
  author: string;
}>;

type Books = Readonly<Book[]>;

type ComplexPerson = Readonly<{
  name: string;
  age: number;
  address: Address;
  books: Books;
}>;

const complexPerson: ComplexPerson = {
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
};

// @ts-expect-error "Cannot assign to 'name' because it is a read-only property."
complexPerson.name = 'Other than TK';
complexPerson.name; // 'TK'

// @ts-expect-error "Cannot assign to 'number' because it is a read-only property."
complexPerson.address.number = 2;

// @ts-expect-error "Cannot assign to 'address' because it is a read-only property."
complexPerson.address = 'An address';

// @ts-expect-error "Property 'push' does not exist on type 'readonly ["Effective TypeScript", "Atomic Habits", "Leonardo Da Vinci"]'."
complexPerson.books.push({ title: 'Another book', author: 'Another Author' });

// @ts-expect-error "Cannot assign to 'author' because it is a read-only property"
complexPerson.books[0].author = 'TK';
