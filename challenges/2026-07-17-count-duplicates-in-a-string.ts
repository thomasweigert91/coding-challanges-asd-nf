// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then
// the result should be { 'a': 2, 'b': 1 }. What if the string is empty ? Then the result should be empty object literal { }

import { test } from "@/test.ts";

function count(s: string): Record<string, number> {
  if (!s) return {};
  let res: Record<string, number> = {};

  for (const char of s) {
    if (!res[char]) {
      res[char] = 1;
    } else {
      res[char]++;
    }
  }
  return res;
}

test(count("aba"), { a: 2, b: 1 });
test(count(""), {});
test(count("hello"), { h: 1, e: 1, l: 2, o: 1 });
test(count("aabb"), { a: 2, b: 2 });
test(count("xyz"), { x: 1, y: 1, z: 1 });
