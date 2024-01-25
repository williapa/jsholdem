const { Card, highCardRank } = require('../poker.js');

test('returns the highest card rank when the highest is an Ace', () => {
  const hand = [new Card("h", 14), new Card("d", 13), new Card("s", 12), new Card("c", 11), new Card("h", 9), new Card("d", 8), new Card("s", 7)]; // Hand with an Ace high
  expect(highCardRank(hand)).toBe(14); // Expecting rank of Ace (14)
});

test('returns the highest card rank when the highest is a 9', () => {
  const hand = [new Card("h", 2), new Card("d", 3), new Card("s", 4), new Card("c", 5), new Card("h", 7), new Card("d", 8), new Card("s", 9)]; // Hand with a 9 high
  expect(highCardRank(hand)).toBe(9); // Expecting rank of 9
});
