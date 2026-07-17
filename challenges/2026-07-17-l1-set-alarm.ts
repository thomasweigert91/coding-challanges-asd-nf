import { test } from "@/test.ts";

function setAlarm(employed: boolean, vacation: boolean): boolean {
  return employed ? !vacation : false;
}

test(setAlarm(true, false), true);
test(setAlarm(true, true), false);
test(setAlarm(false, false), false);
test(setAlarm(false, true), false);
test(setAlarm(true, false), true);
