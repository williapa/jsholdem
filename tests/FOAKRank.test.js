const { Card, FOAKrank } = require('../poker.js');

test('identifies a valid four of a kind with four Aces', () => {
  const hand = [new Card("h", 14), new Card("d", 14), new Card("s", 14), new Card("c", 14), new Card("d", 5), new Card("h", 8), new Card("s", 6)]; // Four Aces and three other cards
  expect(FOAKrank(hand)).toBe(14); // Rank of Aces
});

test('identifies a valid four of a kind with four 10s and a higher card', () => {
  const hand = [new Card("h", 10), new Card("d", 10), new Card("s", 10), new Card("c", 10), new Card("d", 11), new Card("h", 3), new Card("s", 4)]; // Four 10s and a Jack
  expect(FOAKrank(hand)).toBe(10); // Rank of 10s
});

test('identifies a valid four of a kind with four 2s', () => {
  const hand = [new Card("h", 2), new Card("d", 2), new Card("s", 2), new Card("c", 2), new Card("d", 5), new Card("h", 8), new Card("s", 9)]; // Four 2s and three other cards
  expect(FOAKrank(hand)).toBe(2); // Rank of 2s
});

test('returns 0 for a hand with only three of a kind', () => {
  const hand = [new Card("h", 4), new Card("d", 4), new Card("s", 4), new Card("c", 6), new Card("d", 7), new Card("h", 8), new Card("s", 9)]; // Three 4s and four other cards
  expect(FOAKrank(hand)).toBe(0); // Not a Four of a Kind
});