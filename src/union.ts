// Union Types

type Book = {
  title: string;
  author: string;
};

const books: Book[] = [
  {
    title: 'Harry Potter 1',
    author: 'JK Rowling',
  },
  {
    title: 'Harry Potter 2',
    author: 'JK Rowling',
  },
];

type Paper = {
  title: string;
  researcher: string;
};

const papers: Paper[] = [
  {
    title: 'Why Functional Programming Matters',
    researcher: 'John Hughes',
  },
  {
    title: 'Out of the Tar Pit',
    researcher: 'Ben Moseley & Peter Marks',
  },
];

const readingMaterial: Book | Paper = books[0];
const anotherReadingMaterial: Book | Paper = papers[0];
