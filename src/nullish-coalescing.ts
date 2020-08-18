// using logical OR operator
const username = null || 'TK';
username; // 'TK'

const age = 0 || 10;
age; // 0

const isDev = false || true;
isDev; // false

// using nullish coalescing
const nullishUsername = null ?? 'TK';
nullishUsername; // 'TK'

const undefinedUsername = undefined ?? 'TK';
undefinedUsername; // 'TK'

const nullishAge = 0 ?? 10;
nullishAge; // 0

const nullishIsDev = false ?? true;
nullishIsDev; // false
