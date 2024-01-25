const { Card, Player, determineWinner } = require('../poker.js');

function dealPlayerCards(player, newCards) {
  // Clear the existing player's hand
  player.hand = [];

  // Deal the new cards using the Player's deal method
  newCards.forEach(card => player.deal(card));
}

// set up two players for the tests
const computer = new Player("computer", 1000); // Assuming starting chips of 1000 for illustration
const human = new Player("human", 1000);

test('High card win - Computer wins with Ace high', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 14), new Card("d", 5)]); // Computer has Ace high
  dealPlayerCards(human, [new Card("s", 13), new Card("c", 6)]); // Human has King high

  const board = [new Card("d", 2), new Card("c", 4), new Card("s", 7), new Card("h", 9), new Card("c", 10)];
  
  expect(determineWinner(computer, human, board)).toBe(computer);
});

test('Tie - Both players play the board', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 2), new Card("d", 3)]); // Computer's cards do not contribute to the board
  dealPlayerCards(human, [new Card("s", 4), new Card("c", 8)]); // Human's cards do not contribute to the board

  const board = [new Card("d", 9), new Card("c", 10), new Card("s", 11), new Card("h", 12), new Card("c", 13)]; // Board is a straight 9-K
  
  expect(determineWinner(computer, human, board)).toBe('TIE');
});

test('Straight win by one card - Human wins with 8-Q straight', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 4), new Card("d", 7)]); // Computer's best is 7-J straight
  dealPlayerCards(human, [new Card("s", 8), new Card("c", 5)]); // Human's best is 8-Q straight

  const board = [new Card("d", 9), new Card("c", 10), new Card("s", 11), new Card("h", 12), new Card("c", 2)]; // Board allows for 7-J and 8-Q straights
  
  expect(determineWinner(computer, human, board)).toBe(human);
});

test('Tie - Board contains a Royal Flush, resulting in a tie', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 2), new Card("d", 3)]); // Computer's hole cards do not contribute
  dealPlayerCards(human, [new Card("s", 4), new Card("c", 5)]); // Human's hole cards do not contribute

  const board = [new Card("h", 10), new Card("h", 11), new Card("h", 12), new Card("h", 13), new Card("h", 14)]; // Board is a Royal Flush in hearts
  
  expect(determineWinner(computer, human, board)).toBe('TIE');
});

test('Full house beaten by a better full house - Human wins with better pair', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 10), new Card("d", 10)]); // Computer has 10s full of 3s
  dealPlayerCards(human, [new Card("s", 8), new Card("c", 8)]); // human has 8s full of 3s

  const board = [new Card("d", 8), new Card("c", 10), new Card("s", 14), new Card("h", 3), new Card("c", 3)]; // Board allows for full houses with 10s and 8s
  
  expect(determineWinner(computer, human, board)).toBe(computer);
});

test('Same two pair but one has a better kicker - Computer wins with better kicker', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 13), new Card("d", 2)]); // Computer's kicker is King
  dealPlayerCards(human, [new Card("s", 4), new Card("c", 12)]); // Human's kicker is queen - lower

  const board = [new Card("d", 6), new Card("c", 6), new Card("s", 9), new Card("h", 9), new Card("c", 8)]; // Board has two pairs: 6s and 9s
  
  expect(determineWinner(computer, human, board)).toBe(computer);
});

test('Flush beats a straight - Human wins with a flush', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 7), new Card("d", 8)]); // Computer has potential for a straight
  dealPlayerCards(human, [new Card("s", 6), new Card("s", 7)]); // Human has potential for a flush

  const board = [new Card("s", 9), new Card("s", 10), new Card("s", 11), new Card("d", 3), new Card("h", 2)]; // Board allows for a flush in spades and a straight
  
  expect(determineWinner(computer, human, board)).toBe(human);
});

test('Same pair but tie split by kicker - Human wins with better kicker', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 8), new Card("d", 3)]); // Computer's kicker is lower
  dealPlayerCards(human, [new Card("s", 8), new Card("c", 13)]); // Human's kicker is King, which is higher

  const board = [new Card("d", 6), new Card("c", 7), new Card("s", 2), new Card("h", 9), new Card("c", 4)]; // Board has no relevant pairs or kickers for the pair of 8s
  
  expect(determineWinner(computer, human, board)).toBe(human);
});

test('Wheel straight beaten by 2-6 straight - Computer wins with higher straight', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 6), new Card("d", 3)]); // Computer has the higher straight 2-6
  dealPlayerCards(human, [new Card("s", 4), new Card("c", 3)]); // Human has a wheel straight A-5

  const board = [new Card("d", 2), new Card("c", 4), new Card("s", 5), new Card("h", 14), new Card("c", 14)]; // Board allows for both wheel straight and 2-6 straight
  
  expect(determineWinner(computer, human, board)).toBe(computer);
});

test('Two pair beaten by another two pair - Computer wins with higher pairs', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 13), new Card("d", 13)]); // Computer has a higher two pair with Kings and 9s
  dealPlayerCards(human, [new Card("s", 10), new Card("c", 10)]); // Human has a lower two pair with 10s and 9s

  const board = [new Card("d", 9), new Card("c", 9), new Card("s", 3), new Card("h", 2), new Card("c", 4)]; // Board has a pair of 9s
  
  expect(determineWinner(computer, human, board)).toBe(computer);
});

test('Three of a kind beats two pair - Human wins with three of a kind', () => {
  const computer = new Player("computer", 1000);
  const human = new Player("human", 1000);
  dealPlayerCards(computer, [new Card("h", 8), new Card("d", 8)]); // Computer has two pairs with 8s and 6s
  dealPlayerCards(human, [new Card("s", 12), new Card("c", 6)]); // Human has three of a kind with 6s

  const board = [new Card("d", 6), new Card("c", 6), new Card("s", 11), new Card("h", 3), new Card("c", 2)]; // Board allows for a three of a kind in Jacks and two pairs in 8s and 6s
  
  expect(determineWinner(computer, human, board)).toBe(human);
});