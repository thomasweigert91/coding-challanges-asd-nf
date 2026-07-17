import { test } from "@/test.ts";

function elevator(left: number, right: number, call: number): string {
  const diffRight = Math.abs(right - call);
  const diffLeft = Math.abs(left - call);

  return diffLeft === diffRight || diffRight < diffLeft ? "right" : "left";
}

test(elevator(1, 5, 3), "right");
test(elevator(0, 10, 3), "left");
test(elevator(5, 5, 5), "right");
test(elevator(0, 0, 0), "right");
test(elevator(10, 3, 6), "right");
