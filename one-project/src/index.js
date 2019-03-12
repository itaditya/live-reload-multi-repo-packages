import { now } from 'lodash';

import { difference } from 'two-project/difference';
import print from 'utils/print';

import { multiply } from 'one-project/multiply';

import { sum } from './sum';

console.log(now());

console.log(sum(1, 3));

print(difference(7, 11));

print(multiply(7, 11));
