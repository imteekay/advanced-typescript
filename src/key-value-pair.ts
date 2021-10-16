// Interface + Extends + Array + Generics + Union = Tuple

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}

const aTuple: KeyValuePair<string, number> = ['TK', 24];

// @ts-expect-error "Type '22' is not assignable to type 'string'."
aTuple[0] = 22;

// @ts-expect-error "Type '"Name"' is not assignable to type 'number'."
aTuple[1] = 'Name';

aTuple[0] = 'Name';
aTuple[1] = 22;
