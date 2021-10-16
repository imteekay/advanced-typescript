/**
 * Here the compiler checks that we have handled all possible cases in the switch statement
 * in other words, a compile-time exhaustive check
 */

/**
 * This function enables the exhaustive check.
 * It works by returning `never`, and accepting the first param as `never`
 * @param value The type that we're checking
 * @param message A message to display if it errors
 * @param lastWords A callback to call before the error
 */
export function assertUnreachable(
  value: never,
  message?: string,
  lastWords?: () => void
): never {
  if (lastWords) lastWords();
  throw {
    message:
      message || "Invariant unreachable type error. Something isn't right!",
  };
}

/**
 * You have to write this type, it should have all possible types for the possible
 * switch values
 */
type Union = 'A' | 'B' | 'C';

let value: Union;

switch (value) {
  case 'A':
    // handle 'A'
    break;
  case 'B':
    // handle 'B'
    break;
  // since C block is commented out, the code will
  // not compile since the _type argument to assertUnreachable
  // must a `never`
  // case "C":
  //   // handle 'C'
  //   break;

  default:
    // @ts-expect-error Argument of type '"C"' is not assignable to parameter of type 'never'.ts(2345)
    assertUnreachable(value, 'Switch has a missing clause!', () =>
      console.log({ typeError: 'on switch' })
    );
}
