// You receive some random elements as a space-delimited string.
// Check if the elements are part of an ascending sequence of integers starting with 1,
// with an increment of 1 (e.g. 1, 2, 3, 4).
// Return:
// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing,
// and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

import { test } from "@/test.ts";

function findMissingNumber(s: string): number {
  if (s.length === 0) return 0;
  const array = s.split(" ");

  const hasInvalidNumber = array.some((v) => Number.isNaN(Number(v)));

  if (hasInvalidNumber) return 1;

  const numbers = array.map(Number);

  for (
    let expectedNumber = 1;
    expectedNumber <= numbers.length;
    expectedNumber++
  ) {
    if (!numbers.includes(expectedNumber)) return expectedNumber;
  }

  return 0;
}

test(findMissingNumber("1 2 4 3"), 0);
test(findMissingNumber("1 2 a"), 1);
test(findMissingNumber("1 2 4"), 3);
test(findMissingNumber("1 5"), 2);
test(findMissingNumber(""), 0);
