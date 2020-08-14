// Tuple is an extension of arrays: specify the type for each element of the array.

const aTuple: [string, number] = ['TK', 24];

aTuple[0] = 22; // Error! "Type '22' is not assignable to type 'string'."
aTuple[1] = 'Name'; // Error! "Type '"Name"' is not assignable to type 'number'."

aTuple[0] = 'Name'
aTuple[1] = 22
