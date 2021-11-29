/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank = '';

// 3. Select the <main> HTML element

const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const one = prompt("where does the Raptors play at?");
if (one.toUpperCase() === 'TORONTO') {
  correct += 1; 
}
const two = prompt("what is Toronto's hockey team?" );
if (two.toUpperCase() === 'MAPLE LEAFS') {
  correct += 1;
}
const three = prompt("what is Boston's basketball team?" );
if (three.toUpperCase() === 'CELTICS') {
  correct += 1;
}
const four = prompt("what is Detroit's basketball team?" );
if (four.toUpperCase() === 'PISTONS') {
  correct += 1;
}
const five = prompt("what is Buffalo's hockey team?" );
if (five.toUpperCase() === 'SABRES') {
  correct += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correct === 5){
  rank = 'Gold';
} else if (correct >= 3) {
  rank = 'Silver';
} else if (correct >=1) {
  rank = 'Bronze';
} else {
  rank = ':('; 
}

// 6. Output results to the <main> element

main.innerHTML = `
<h2> you got ${correct} out of 5 questions correct</h2>
<p>Crown earned: <strong>${rank}</strong></p>
`;