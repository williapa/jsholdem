const { Card, pairRank } = require('../poker.js');

test('identifies the highest possible pair (Aces)', () => {
  const hand = [new Card("h", 14), new Card("d", 14), new Card("s", 4), new Card("c", 5), new Card("h", 8), new Card("d", 10), new Card("s", 2)]; // Pair of Aces
  expect(pairRank(hand)).toBe(14); // Expecting rank of Aces
});

test('identifies the lowest possible pair (Twos)', () => {
  const hand = [new Card("h", 2), new Card("d", 2), new Card("s", 4), new Card("c", 5), new Card("h", 8), new Card("d", 10), new Card("s", 11)]; // Pair of Twos
  expect(pairRank(hand)).toBe(2); // Expecting rank of Twos
});

test('returns 0 for a hand with no pairs', () => {
  const hand = [new Card("h", 3), new Card("d", 4), new Card("s", 5), new Card("c", 6), new Card("h", 9), new Card("d", 11), new Card("s", 13)]; // All unique ranks, no pairs
  expect(pairRank(hand)).toBe(0);
});
