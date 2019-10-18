import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What is the result of the expression?';
const operations = '+-*';
let first;
let second;
let operation;
const randomGenerator = () => {
  first = getRandomInt(1, 50);
  second = getRandomInt(1, 10);
  operation = operations[getRandomInt(0, operations.length - 1)];
};
const getResult = (sign) => {
  switch (sign) {
    case '-': {
      return first - second;
    }
    case '+': {
      return first + second;
    }
    case '*': {
      return first * second;
    }
    default:
  }
  return true;
};
const getData = () => {
  randomGenerator();
  const gameQuestion = `${first} ${operation} ${second}`;
  const rightAnswer = getResult(operation).toString();
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameTask, getData);
