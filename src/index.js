import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const engine = (gameTask, getGameData) => {
	const attemptsCount = 3;
	console.log('Welcome to the Brain Games!');
	console.log(`${gameTask}\n`);
	const userName = readlineSync.question('May i have your name? ');
	console.log(`Hello, ${userName}!\n`);
	const roundsCalculate = () => {
		for (let i = 1; i <= attemptsCount; i++) {
			const gameData = getGameData();
			const gameQuestion = car(gameData);
			console.log(`Question: ${gameQuestion}`);
			const inputAnswer = readlineSync.question('Your answer: ');
			const rightAnswer = cdr(gameData);
			if (i === attemptsCount && rightAnswer === inputAnswer) {
				console.log('Correct!');
				console.log(`Congratulations, ${userName}!`);
				break;
			}
			if (rightAnswer !== inputAnswer) {
				console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}".`);
				console.log(`Let's try again, ${userName}!`);	
				break;
			}
			console.log('Correct!');
		}
	}
	roundsCalculate();
};
export default engine;
