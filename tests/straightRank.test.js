const { Card, straightRank } = require('../poker.js');

test('identifies a valid straight and returns the rank of the highest card', () => {
  const hand = [new Card("h", 2), new Card("d", 3), new Card("s", 4), new Card("c", 5), new Card("h", 6)]; // Straight 2-6
  expect(straightRank(hand)).toBe(6); // Highest card is 6
});

test('returns 0 for a hand with a broken sequence', () => {
  const hand = [new Card("h", 2), new Card("d", 3), new Card("s", 4), new Card("c", 6), new Card("h", 7)]; // Sequence is broken, no 5
  expect(straightRank(hand)).toBe(0);
});

test('identifies a straight within a hand of more than 5 cards', () => {
  const hand = [new Card("h", 3), new Card("d", 4), new Card("s", 5), new Card("c", 6), new Card("h", 7), new Card("d", 9), new Card("s", 2)]; // Straight 3-7
  expect(straightRank(hand)).toBe(7); // Highest card in straight is 7
});

test('identifies the lowest possible straight (A-2-3-4-5)', () => {
  const hand = [new Card("h", 14), new Card("d", 2), new Card("s", 3), new Card("c", 4), new Card("h", 5)]; // Straight A-5
  expect(straightRank(hand)).toBe(5); // Highest card in straight is 5
});

test('identifies the highest possible straight (10-J-Q-K-A)', () => {
  const hand = [new Card("h", 10), new Card("d", 11), new Card("s", 12), new Card("c", 13), new Card("h", 14)]; // Straight 10-A
  expect(straightRank(hand)).toBe(14); // Highest card in straight is Ace (14)
});
