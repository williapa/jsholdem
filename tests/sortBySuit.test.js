const { Card, sortBySuit } = require('../poker.js');

test('sorts cards by suit in the order of spades, hearts, diamonds, and clubs', () => {
  const unsortedCards = [new Card("d", 2), new Card("h", 7), new Card("s", 4), new Card("c", 9), new Card("h", 5)];
  const sortedCards = sortBySuit(unsortedCards);
  const expectedSuits = ['s', 'h', 'h', 'd', 'c']; // Expected suits in order: spades, hearts, diamonds, clubs
  const actualSuits = sortedCards.map(card => card.suit);
  expect(actualSuits).toEqual(expectedSuits);
});

test('maintains order when cards are already sorted by suit', () => {
  const sortedCardsInput = [new Card("s", 4), new Card("h", 7), new Card("h", 5), new Card("d", 2), new Card("c", 9)];
  const sortedCardsResult = sortBySuit(sortedCardsInput);
  const expectedSuits = ['s', 'h', 'h', 'd', 'c']; // Suits should remain in order: spades, hearts, diamonds, clubs
  const actualSuits = sortedCardsResult.map(card => card.suit);
  expect(actualSuits).toEqual(expectedSuits);
});