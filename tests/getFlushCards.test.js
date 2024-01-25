const { Card, getFlushCards } = require('../poker.js');

test('returns all cards of the flush suit when there are exactly 5', () => {
  const hand = [new Card("h", 2), new Card("h", 4), new Card("h", 7), new Card("h", 9), new Card("h", 11), new Card("d", 5), new Card("s", 8)]; // 5 hearts, creating a flush
  const expectedFlush = hand.slice(0, 5); // First 5 cards are hearts
  const flushCards = getFlushCards(hand);
  expect(flushCards).toEqual(expectedFlush);
});

test('returns all 7 cards when the entire hand is of the same suit', () => {
  const hand = [new Card("d", 2), new Card("d", 3), new Card("d", 5), new Card("d", 6), new Card("d", 9), new Card("d", 11), new Card("d", 13)]; // All diamonds
  const flushCards = getFlushCards(hand);
  expect(flushCards).toEqual(hand); // Expecting all cards to be returned since they all form a flush
});

test('returns an empty array when no flush is present (max 4 cards of one suit)', () => {
  const hand = [new Card("c", 2), new Card("c", 4), new Card("c", 6), new Card("c", 8), new Card("s", 5), new Card("s", 9), new Card("s", 11)]; // 4 clubs and 3 spades
  const flushCards = getFlushCards(hand);
  expect(flushCards).toEqual([]); // Expecting an empty array since there's no flush
});