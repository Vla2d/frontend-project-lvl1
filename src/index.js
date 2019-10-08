import readlineSync from 'readline-sync';
const welcome = () => {
	          console.log('Welcome to the Brain Games!');
	          console.log('Answer "yes" if number even otherwise answer "no".');
};
const welcomePrime = () => {
	console.log('Welcome to the Brain Games!');
	console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
};
const welcomeCalc = () => {
	console.log('Welcome to the Brain Games!');
	console.log('What is the result of the expression?');
};
const welcomeGcd = () => {
	console.log('Welcome to the Brain Games!');
	console.log('Find the greatest common divisor of given numbers.');
};
const welcomeProgression = () => {
	console.log('Welcome to the Brain Games!');
	console.log('What number is missing in the progression?');
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
export const brainProgressionGame = () => {
	welcomeProgression();
	console.log('');
	const name = readlineSync.question('May I have your name?: ');
	const greeting = () => {
		console.log(`Hello, ${name}`);
	};
	greeting();
	console.log('');
	let firstResult = '';
	let result = '';
	let answer = '';
	let i = '';
	let rightAnswer = '';
	let lastResult = '';
	const question = () => {
		const number1 = Math.floor(Math.random()*9) + 1;
		const randomNumber = Math.floor(Math.random()*25) + 1;
		firstResult = `${number1} ${number1 + 2} ${number1 + 4} ${number1 + 6} ${number1 + 8} ${number1 + 10} ${number1 + 12} ${number1 + 14} ${number1 + 16} ${number1 + 18}`;
		result = `${number1} ${number1 + 2} ${number1 + 4} ${number1 + 6} ${number1 + 8} ${number1 + 10} ${number1 + 12} ${number1 + 14} ${number1 + 16} ${number1 + 18}`;
		console.log(result);
		const replace = (str, index, replacement) => {
			return str.substr(0, index) + replacement + str.substr(index + replacement.length);
		};
		for (i = randomNumber; i < 25; i += 1) {
			if (result[i] !== ' ' && result[i + 1] !== ' ') {
			  	console.log(replace(result, i + 3, '..'));
			  	rightAnswer = firstResult[i + 3] + firstResult[i + 4]; 
				break;
			};
		}; 
		answer = readlineSync.question('Your answer: ');
		if (Number(answer) !== Number(rightAnswer)) {
			lastResult = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
		}
		if ((Number(answer) === Number(rightAnswer))) {
			lastResult = 'Correct!';
		};
		console.log(lastResult);
	};
	const roundsCalculate = () => {
		for (let i = 0; i !== 3; i++) {
			question();                                                                                                             if (i === 2) {
			console.log(`Congratulations, ${name}`);
			}
			if (lastResult !== 'Correct!') {
				break;
			};
		};
	};
	roundsCalculate();
};
export const brainPrimeGame = () => {
	welcomePrime();
	console.log('');
	const name = readlineSync.question('May I have your name?: ');
	const greeting = () => {
		console.log(`Hello, ${name}`);
	};
	greeting();
	console.log('');
	let answer = '';
	let quest = '';
	let result = '';
	let answ = '';
	const question = () => {
		const number = Math.floor(Math.random()*10) + 1;
		quest = `Question: ${number}`;
		console.log(quest);
		answer = readlineSync.question('Your answer: ');
		const isPrime = (n) => {
			if (n === 1) {
				return false;
			}
			for (let i = 2; i < n; i++) {
					if (n % i === 0) {
						return false;
						break;
					}
			}
			return true;
		};
		if (answer === 'yes' && isPrime(number) === true) {
			answ = 'Correct!';
		}
		if (answer === 'yes' && isPrime(number) === false) {
			answ = `'yes' is wrong answer :(. Correct answer is 'no'`; 
		}
		if (answer === 'no' && isPrime(number)  === false) {
			answ = 'Correct!'; 
		}
		if (answer === 'no' && isPrime(number) === true) {
			answ = `'no' is wrong answer :(. Correct answer is 'yes'`;
		}
		console.log(answ);
	};
	const roundsCalculate = () => {                                                                                                 for (let i = 0; i !== 3; i++) {
			question();                                                                                     
			if (answ !== 'Correct!') {
				break;
			}
			if (i === 2) {
				console.log(`Congratulations, ${name}`);
			}
		};
	};
	roundsCalculate();
};
