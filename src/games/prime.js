import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  const iter = (divisior, number) => {
    if (divisior === number) {
      return true;
    }
    return ((num % divisior === 0) ? false : iter(divisior + 1, number));
  };
  return iter(2, num);
};
const getData = () => {
  const gameQuestion = getRandomInt(-10, 100);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
