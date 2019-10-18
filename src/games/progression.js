import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What number is missing in the progression?';
const length = 10;
const getQuestion = (start, step, hiddenElementPosition, progressionLength) => {
  const iter = (counter, progressionMember, progression) => {
    const member = (counter === hiddenElementPosition) ? '..' : `${progressionMember}`;
    if (counter === progressionLength) {
      return progression;
    }
    if (counter === 0) {
      return iter(counter + 1, progressionMember + step, member);
    }
    return iter(counter + 1, progressionMember + step, `${progression} ${member}`);
  };
  return iter(0, start, '');
};

const getData = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 20);
  const hiddenElementPosition = getRandomInt(1, length);
  const gameQuestion = getQuestion(start, step, hiddenElementPosition, length);
  const rightAnswer = (start + step * (hiddenElementPosition)).toString();
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
