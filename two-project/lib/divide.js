import print from 'utils/print';

function divide(a, b) {
  if(b === 0) {
    throw new Error('divisor cannot be zero');
  }
  print('divide');
  return a / b;
}

export { divide };
