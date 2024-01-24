const { Card, fullHouseRank } = require('../poker.js');

test('identifies a valid full house', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 4), new Card("h", 7), new Card("d", 7)];
  expect(fullHouseRank(hand)).toBe(47); // the function returns 3-of-a-kind rank * 10 + pair rank
});

test('returns 0 for a hand with only three-of-a-kind', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 4), new Card("h", 8), new Card("d", 6)];
  expect(fullHouseRank(hand)).toBe(0);
});

test('returns 0 for a hand with only a pair', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 5), new Card("h", 6), new Card("d", 7)];
  expect(fullHouseRank(hand)).toBe(0);
});

test('identifies a full house among multiple pairs', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 4), new Card("c", 7), new Card("d", 7), new Card("h", 8), new Card("s", 8)]; // Extra pairs in the hand
  expect(fullHouseRank(hand)).toBe(48); // the function picks the highest valid full house
});