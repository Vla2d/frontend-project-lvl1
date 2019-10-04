import readlineSync from 'readline-sync';
const welcome = () => {
	          console.log('Welcome to the Brain Games!');
	          console.log('Answer "yes" if number even otherwise answer "no".');
};
const welcomeCalc = () => {
	console.log('Welcome to the Brain Games!');
	console.log('What is the result of the expression?');
};
const welcomeGcd = () => {
	console.log('Welcome to the Brain Games!');
	console.log('Find the greatest common divisor of given numbers.');
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
		const number1 = Math.floor(Math.random()*30) + 1;
		const number2 = Math.floor(Math.random()*30) + 1;
		const operator = Math.floor(Math.random()*3) + 1;
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
			lastResult = `'${answer}' is wrong answer ;(. Correct answer was '${resultToNumber}'. Let's try again, ${name}!`;
		};
		console.log(lastResult);
	};
	const roundsCalculate1 = () => {
		for (let i = 0; i !== 3; i++) {
			question();
			if (i === 2) {
			console.log(`Congratulations, ${name}`);
			};
			if (lastResult !== 'Correct!') {
				break;
			};
		};
	};
	roundsCalculate1();
};
export const brainGcdGame = () => {
	welcomeGcd();
	console.log('');
	const name = readlineSync.question('May I have your name?: ');
	const greeting = () => {
		console.log(`Hello, ${name}`);
	};
	greeting();
	console.log('');
	let result = '';
	let answer = '';
	let resultForGdc;
	const question = () => {
		const number1 = Math.floor(Math.random()*80) + 1;
		const number2 = Math.floor(Math.random()*80) + 1;
		result = `${number1} ${number2}`
		console.log(result);
		const gcd = (number1, number2) => {
			while (number1 !== number2) {
				if (number1 > number2) {
					number1 = number1 - number2;
				}
				else {
					number2 = number2 - number1;
				};
			};
			return number1;
		};
		console.log(gcd(number1, number2));
		gcd(number1, number2);
		answer = readlineSync.question('Your answer: ');
		if (Number(answer) === gcd(number1, number2)) {
			resultForGdc = 'Correct!';
		};
		if (Number(answer) !== gcd(number1, number2)) {
			resultForGdc = `'${answer}' is wrong answer ;(. Correct answer was '${gcd(number1, number2)}'.`;
		};
		console.log(resultForGdc);
	};
	const roundsCalculate2 = () => {
		for (let i = 0; i !== 3; i++) {
			question();
			if (i === 2) {
				console.log(`Congratulations, ${name}`);
			};
			if (resultForGdc !== 'Correct!') {
				break;
			};
		};
	};
	roundsCalculate2();
};
