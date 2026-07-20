// Implement the function unique_in_order which takes as argument a sequence and returns a list of
// items without any elements with the same value next to each other and preserving the original order
// of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

import { test } from "@/test.ts";
import type { types } from "node:util";

function uniqueInOrder(s: string | any[]): any[] {
  const start = typeof s === "string" ? s.split("") : s;
  let prevChar = start[0];
  const result: any[] = [start[0]];

  if (!start.length) return [];

  for (let i = 0; i < start.length; i++) {
    if (start[i] === prevChar) continue;

    result.push(start[i]);
    prevChar = start[i];
  }

  return result;
}

test(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
test(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
test(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
test(uniqueInOrder(""), []);
test(uniqueInOrder([1, 1, 1, 1]), [1]);
