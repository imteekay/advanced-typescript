// Interface + Extends + Array + Generics + Union = Tuple

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}

const aTuple: KeyValuePair<string, number> = ['TK', 24];

aTuple[0] = 22; // Error! "Type '22' is not assignable to type 'string'."
aTuple[1] = 'Name'; // Error! "Type '"Name"' is not assignable to type 'number'."

aTuple[0] = 'Name'
aTuple[1] = 22
