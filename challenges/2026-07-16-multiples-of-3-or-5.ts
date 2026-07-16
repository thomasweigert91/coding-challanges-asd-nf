// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

import { test } from "@/test.ts";

function solution(n: number): number {
  if (n <= 0) return 0;

  let res = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }

  return res;
}

test(solution(10), 23);
test(solution(1), 0);
test(solution(20), 78);
test(solution(0), 0);
test(solution(15), 45);
