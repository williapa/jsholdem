const { Card, TOAKrank } = require('../poker.js');

test('identifies a valid three of a kind', () => {
  const hand = [new Card("h", 7), new Card("d", 7), new Card("s", 7), new Card("c", 5), new Card("h", 9), new Card("d", 11), new Card("s", 2)];
  expect(TOAKrank(hand)).toBe(7); // Three 7s
});

test('returns 0 for a hand with no three of a kind', () => {
  const hand = [new Card("h", 7), new Card("d", 7), new Card("s", 6), new Card("c", 5), new Card("h", 9), new Card("d", 11), new Card("s", 2)];
  expect(TOAKrank(hand)).toBe(0); // Best is a pair of 7s
});

test('identifies the higher three of a kind when two are present', () => {
  const hand = [new Card("h", 7), new Card("d", 7), new Card("s", 7), new Card("c", 9), new Card("h", 9), new Card("d", 9), new Card("s", 2)];
  expect(TOAKrank(hand)).toBe(9); // Higher three of a kind is 9s
});

test('identifies a three of a kind of Aces', () => {
  const hand = [new Card("h", 14), new Card("d", 14), new Card("s", 14), new Card("c", 5), new Card("h", 8), new Card("d", 6), new Card("s", 2)];
  expect(TOAKrank(hand)).toBe(14); // Three Aces
});

test('identifies a three of a kind of Twos', () => {
  const hand = [new Card("h", 2), new Card("d", 2), new Card("s", 2), new Card("c", 5), new Card("h", 8), new Card("d", 11), new Card("s", 9)];
  expect(TOAKrank(hand)).toBe(2); // Three Twos
});
