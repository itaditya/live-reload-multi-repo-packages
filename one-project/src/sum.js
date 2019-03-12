import { now } from 'lodash';

function sum(a, b) {
  console.log('date', now());
  return a + b;
}

export { sum };
