import readlineSync from 'readline-sync';
const welcome = () => {
	          console.log('Welcome to the Brain Games!');
	          console.log('Answer "yes" if number even otherwise answer "no".');
};
const welcomeCalc = () => {
	console.log('Welcome to the Brain Games!');
	console.log('What is the result of the expression?');
};
export const brainEvenGame = () => {
	welcome();
	console.log('');
	const name = readlineSync.question('May I have your name?: ');
	const greeting = () => {
		console.log(`Hello, ${name}!`);
	};
	greeting();
        console.log('');
	let result = '';
	const question = () => {
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
	const roundsCalculate = () => {	
		for (let i = 0; i !== 3; i++) {
		 	question()
			if (i === 2) {
				console.log(`Congratulations, ${name}`);
			}
			else if (result !== 'Correct!') {
				break;
			};
		}; 
	};
	roundsCalculate()
};
export const brainCalcGame = () => {
	welcomeCalc();
	console.log('');
	const name = readlineSync.question('May I have your name?: ');
	const greeting = () => {
		console.log(`Hello, ${name}`);
	};
	greeting();
	console.log('');
	let result = '';
	let resultToNumber;
	let answer = '';
	let lastResult = '';
	const question = () => {
		const number1 = Math.floor(Math.random()*30);
		const number2 = Math.floor(Math.random()*30);
		const operator = Math.floor(Math.random()*3);
		if (operator === 1) {
			resultToNumber = number1 + number2;
			result = `Question: ${number1} + ${number2}`
		};
		if (operator === 2) {
			resultToNumber = number1 - number2;
			result = `Question: ${number1} - ${number2}`;
		};
		if (operator === 3) {
			resultToNumber = number1 * number2;
			result = `Question: ${number1} * ${number2}`;
		};
		console.log(result);
		answer = readlineSync.question('Your answer: ');
		if (Number(answer) === resultToNumber) {
			lastResult = 'Correct!';
		}
		else if (Number(answer) !== resultToNumber) {
			lastResult = `'${answer}' is wrong answer ;(. Correct answer was '${resultToNumber}'.`;
		};
		console.log(lastResult);
	};
	const roundsCalculate1 = () => {
		for (let i = 1; i !== 4; i++) {
			question();
			if (i === 3) {
			console.log(`Congratulations, ${name}`);
			};
			if (lastResult !== 'Correct!') {
				break;
			};
		};
	};
	roundsCalculate1();
};
