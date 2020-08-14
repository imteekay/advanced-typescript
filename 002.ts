// Spread Operator

const bookIds = [1, 2, 3];

const [firstBookId, ...otherIds] = bookIds;

const allBookIds = [firstBookId, ...otherIds, 4, 5];
