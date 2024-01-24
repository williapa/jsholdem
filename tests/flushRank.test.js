const { Card, flushRank } = require('../poker.js');

test('identifies a valid flush and returns the rank of the highest card', () => {
  const hand = [new Card("h", 2), new Card("h", 5), new Card("h", 9), new Card("h", 11), new Card("h", 13)]; // Flush of hearts
  expect(flushRank(hand)).toBe(13); // Highest card is King (rank 13)
});

test('returns 0 for a hand with less than 5 cards of the same suit', () => {
  const hand = [new Card("h", 2), new Card("h", 5), new Card("h", 9), new Card("d", 11), new Card("h", 13)]; // Only 4 hearts
  expect(flushRank(hand)).toBe(0);
});

test('identifies a flush and returns the highest card rank even with more than 5 cards', () => {
  const hand = [new Card("h", 2), new Card("h", 3), new Card("h", 5), new Card("h", 9), new Card("h", 11), new Card("h", 13), new Card("d", 7)]; // 6 hearts and 1 diamond
  expect(flushRank(hand)).toBe(13); // Highest card in flush is King (rank 13)
});

test('identifies a flush among mixed suits and returns the highest card rank', () => {
  const hand = [new Card("h", 4), new Card("d", 7), new Card("h", 9), new Card("h", 11), new Card("h", 13), new Card("s", 6), new Card("h", 2)]; // Flush of hearts with other suits
  expect(flushRank(hand)).toBe(13); // Highest card in flush is King (rank 13)
});

test('identifies the highest possible flush with Ace as the highest card', () => {
  const hand = [new Card("s", 10), new Card("s", 11), new Card("s", 12), new Card("s", 13), new Card("s", 14)]; // Flush of spades, Ace high
  expect(flushRank(hand)).toBe(14); // Ace is the highest card (rank 14)
});

test('identifies the lowest possible flush with 2 as the highest card', () => {
  const hand = [new Card("c", 2), new Card("c", 3), new Card("c", 4), new Card("c", 5), new Card("c", 6)]; // Flush of clubs, 6 high
  expect(flushRank(hand)).toBe(6); // 6 is the highest card in the flush
});
