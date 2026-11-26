import { fetchTwoSequential, fetchTwoParallel } from './orders.mjs';

let start = Date.now();

await fetchTwoSequential(1,2);

let elapsed = Date.now() - start;
console.log(elapsed);

start = Date.now();

await fetchTwoParallel(1,2);

elapsed = Date.now() - start;
console.log(elapsed);