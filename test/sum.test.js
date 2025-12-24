import test from "node:test";
import assert from "node:assert";
import { sum } from "../src/sum.js";

test("sum adds two numbers", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("sum throws on invalid input", () => {
  assert.throws(() => sum(1, "2"), TypeError);
});

test("sum throws on NaN input", () => {
  assert.throws(() => sum(NaN, 2), TypeError);
});

test("sum does not return wrong result", () => {
  assert.notStrictEqual(sum(1, 2), 4);
})