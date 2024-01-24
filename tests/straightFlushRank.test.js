const { Card, straightFlushRank } = require('../poker.js');

test('identifies a straight flush', () => {
  const hand = [new Card("h", 10), new Card("h", 9), new Card("h", 8), new Card("h", 7), new Card("h", 6)];
  expect(straightFlushRank(hand)).toBe(10);
});

test('returns 0 for a non-straight flush hand', () => {
  const hand = [new Card("h", 10), new Card("d", 9), new Card("h", 8), new Card("h", 7), new Card("h", 6)];
  expect(straightFlushRank(hand)).toBe(0);
});

test('identifies the lowest straight flush', () => {
  const hand = [new Card("h", 2), new Card("h", 3), new Card("h", 4), new Card("h", 5), new Card("h", 14)]; // Ace as 14 representing the lowest card
  expect(straightFlushRank(hand)).toBe(5); // The highest card in the straight flush is 5
});

test('identifies the highest straight flush', () => {
  const hand = [new Card("d", 10), new Card("d", 11), new Card("d", 12), new Card("d", 13), new Card("d", 14)]; // 10-J-Q-K-A of diamonds
  expect(straightFlushRank(hand)).toBe(14); // The highest card in the straight flush is an Ace (14)
});

test('returns 0 for a non-straight flush with consecutive ranks', () => {
  const hand = [new Card("h", 10), new Card("d", 11), new Card("h", 12), new Card("h", 13), new Card("h", 14)]; // Consecutive ranks but not all same suit
  expect(straightFlushRank(hand)).toBe(0); // Not a straight flush
});