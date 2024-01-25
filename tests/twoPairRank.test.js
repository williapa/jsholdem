const { Card, twoPairRank } = require('../poker.js');

test('identifies a valid hand with two pairs and returns their combined rank', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 7), new Card("c", 7), new Card("h", 9), new Card("d", 11), new Card("s", 2)]; // Two pairs: 4s and 7s
  expect(twoPairRank(hand)).toBe(74); // Higher pair's rank in the ten's digit, lower pair's rank in the one's digit
});

test('identifies the two highest pairs out of three and returns their combined rank', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 8), new Card("c", 8), new Card("h", 6), new Card("d", 6), new Card("s", 2)]; // Three pairs: 4s, 6s, and 8s
  expect(twoPairRank(hand)).toBe(86); // The two highest pairs are 8s and 6s
});

test('returns 0 for a hand with only one pair', () => {
  const hand = [new Card("h", 5), new Card("d", 5), new Card("s", 7), new Card("c", 9), new Card("h", 11), new Card("d", 13), new Card("s", 2)]; // Only one pair: 5s
  expect(twoPairRank(hand)).toBe(0);
});

test('returns 0 for a hand with no pairs', () => {
  const hand = [new Card("h", 3), new Card("d", 5), new Card("s", 7), new Card("c", 9), new Card("h", 11), new Card("d", 13), new Card("s", 2)]; // No pairs, all unique ranks
  expect(twoPairRank(hand)).toBe(0);
});
