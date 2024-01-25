const { Card, sortByRank } = require('../poker.js');

test('sorts cards by rank in descending order', () => {
  const unsortedCards = [new Card("s", 4), new Card("h", 7), new Card("d", 2), new Card("c", 9), new Card("h", 5)];
  const sortedCards = sortByRank(unsortedCards);
  const expectedOrder = [9, 7, 5, 4, 2]; // Expected ranks in descending order
  const actualOrder = sortedCards.map(card => card.rank);
  expect(actualOrder).toEqual(expectedOrder);
});

test('maintains order when cards are already sorted by rank in descending order', () => {
  const sortedCardsInput = [new Card("c", 9), new Card("h", 7), new Card("h", 5), new Card("s", 4), new Card("d", 2)];
  const sortedCardsResult = sortByRank(sortedCardsInput);
  const expectedOrder = [9, 7, 5, 4, 2]; // Ranks should remain in descending order
  const actualOrder = sortedCardsResult.map(card => card.rank);
  expect(actualOrder).toEqual(expectedOrder);
});
