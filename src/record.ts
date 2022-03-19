// simple record type
type AlphabetToIndex = Record<string, number>;

const alphabetToIndex: AlphabetToIndex = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  f: 4,
  g: 5,
  h: 6,
  i: 7,
  j: 8,
  k: 9,
  l: 10,
  m: 11,
  n: 12,
  o: 13,
  p: 14,
  q: 15,
  r: 16,
  s: 17,
  t: 18,
  u: 19,
  v: 20,
  w: 21,
  x: 22,
  y: 23,
  z: 24,
};

// records and dynamic values
type CharToDigit = Record<string, number>;

function buildMap(numbers: number[]) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const charToDigit: CharToDigit = {};

  for (const number of numbers) {
    // @ts-expect-error "Type 'string' is not assignable to type 'number'"
    charToDigit['a'] = 's';

    // if find the char in the alphabet, use it as the key, if not use an empty string.
    charToDigit[alphabet[number] || ''] = number;
  }

  return charToDigit;
}

buildMap([1, 2, 3, 4, 5]);
/*
{
  "a": "s",
  "b": 1,
  "c": 2,
  "d": 3,
  "e": 4,
  "f": 5
} 
*/
