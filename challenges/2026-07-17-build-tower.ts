/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/

import { test } from "@/test.ts";

function towerBuilder(floors: number): string[] {
  const result = Array.from({ length: floors }, (_, index) => {
    const floor = index + 1;
    const stars = floor * 2 - 1;
    const spaces = floors - floor;

    const string = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);

    return string;
  });

  return result;
}

test(towerBuilder(1), ["*"]);
test(towerBuilder(2), [" * ", "***"]);
test(towerBuilder(3), ["  *  ", " *** ", "*****"]);
test(towerBuilder(6), [
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********",
]);
test(towerBuilder(4), ["   *   ", "  ***  ", " ***** ", "*******"]);
