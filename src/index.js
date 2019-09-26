import { readlineSync } from 'readline-sync';
export const greeting = () => {
	const name = readlineSync.question('May I have your name?: ');
	const greetings = `Hello, ${name}!`;
	return greetings;
}

