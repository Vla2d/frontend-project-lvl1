import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const attemptsCount = 3;
const engine = (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTask}\n`);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= attemptsCount; i += 1) {
    const gameData = getGameData();
    const gameQuestion = car(gameData);
    console.log(`Question: ${gameQuestion}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(gameData);
    if (rightAnswer === inputAnswer) {
      console.log('Correct!');
    }
    if (rightAnswer !== inputAnswer) {
      console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default engine;
