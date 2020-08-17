// Type Guards

// typeof
let x: string | number;

if (typeof x === 'string') {
  x; // string
} else {
  x; // number
}

// instanceof
class Phone {
  callSomeone() {
    console.log('Call!');
  }
}

class Tablet {
  watchMovie() {
    console.log('Watch!');
  }
}

let device: Phone | Tablet;

if (device instanceof Phone) {
  device.callSomeone();
}

if (device instanceof Tablet) {
  device.watchMovie();
}

// Custom type guard
type Book = {
  title: string;
  author: string;
};

type Paper = {
  title: string;
  researcher: string;
};

function isBook(text: Book | Paper): text is Book {
  return (text as Book).author !== undefined;
}

let material: Book | Paper;

if (isBook(material)) {
  material.author;
  material.title;
} else {
  material.researcher;
  material.title;
}
