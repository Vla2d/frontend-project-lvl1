import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have your name?: ');
export const greeting = () => {
	        console.log(`Hello, ${name}!`);
};
export const welcome = () => {
	          console.log('Welcome to the Brain Games!');
	          console.log('Answer "yes" if number even otherwise answer "no".');
	          console.log('');
};
export const question = () => {
		let number = Math.floor(Math.random()*30);
	        console.log(`Question: ${number}`);
	        let result = '';
	        let answer = readlineSync.question('Your answer: ');
	        if (answer === 'yes' && number % 2 === 0) {
			result = 'Correct!';
		};
	        if (answer === 'no' && number % 2 !== 0) {
			result = 'Correct!';
		};
	        if (answer === 'yes' && number % 2 !== 0) {
			result = `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
		};
	        if (answer === 'no' && number % 2 === 0) {
			result = `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
		};
	        console.log(result);
};
export const correcting = () => {
	const one = () => question();
	const two = () => question(); 
	const three = () => question(); 
	const iter = (one, two, three) => {
		if (one && two && three === 'Correct!') {
			console.log('Congratulations!');
		};
		correcting();
	};
};
export const brainEvenGame = () => {
	greeting();
	console.log('');
	welcome();
        console.log('');
	let result = '';
	const question1 = () => {
		let number = Math.floor(Math.random()*30);
	        console.log(`Question: ${number}`);
		let answer = readlineSync.question('Your answer: ');
		if (answer === 'yes' && number % 2 === 0) {
			result = 'Correct!';
		};
		if (answer === 'no' && number % 2 !== 0) {
			result = 'Correct!';
		};
		if (answer === 'yes' && number % 2 !== 0) {
			result = `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
		};
		if (answer === 'no' && number % 2 === 0) {
			result = `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
		};
		console.log(result);
	};
	const question2 = () => {	
		for (let i = 0; i !== 3; i++) {
		 	question1()
			if (i === 2) {
				console.log(`Congratulations, ${name}`);
			}
			else if (result !== 'Correct!') {
				break;
			};
		}; 
	};
	question2()
};
