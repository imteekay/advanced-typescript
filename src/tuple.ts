// Tuple is an extension of arrays: specify the type for each element of the array.

const aTuple: [string, number] = ['TK', 24];

// @ts-expect-error "Type '22' is not assignable to type 'string'."
aTuple[0] = 22;

// @ts-expect-error "Type '"Name"' is not assignable to type 'number'."
aTuple[1] = 'Name';

aTuple[0] = 'Name';
aTuple[1] = 22;
