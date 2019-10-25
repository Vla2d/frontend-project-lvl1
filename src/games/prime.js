import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getData = () => {
  const gameQuestion = getRandomInt(-10, 100);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
