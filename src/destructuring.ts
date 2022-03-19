// Destructuring Arrays
const medals = ['Gold', 'Silver', 'bronze'];

const first = medals[0];
const second = medals[1];
const third = medals[2];

const [gold, silver, bronze] = medals;
// Destruturing Objects

const person = {
  name: 'TK',
  address: '123 Some Street',
  phone: '99994828',
};

const personName = person.name;
const personAddress = person.address;
const personPhone = person.phone;

const { name, address, phone } = person;
