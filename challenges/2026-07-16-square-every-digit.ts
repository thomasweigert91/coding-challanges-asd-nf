import { test } from "@/test.ts";

function squareDigits(num: number): number {
  return Number(
    num
      .toString()
      .split("")
      .map((num) => Number(num) ** 2)
      .join(""),
  );
}

test(squareDigits(9119), 811181);
test(squareDigits(0), 0);
test(squareDigits(12), 14);
test(squareDigits(123), 149);
test(squareDigits(999), 818181);
