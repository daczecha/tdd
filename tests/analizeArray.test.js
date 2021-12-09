import { analizeArray } from "../scripts/analizeArray";

test("check min value", () =>
expect(analizeArray([1, 8, 3, 4, 2, 6]).min).toBe(1));

test("check max value", () =>
expect(analizeArray([1, 8, 3, 4, 2, 6]).max).toBe(8));

test("check max length", () =>
expect(analizeArray([1, 8, 3, 4, 2, 6]).length).toBe(6));

test("check average", () =>
expect(analizeArray([1, 8, 3, 4, 2, 6]).average).toBe(4));

test("check whole object", () =>
expect(analizeArray([1, 8, 3, 4, 2, 6])).toEqual({
  average: 4,
  min: 1,
  max: 8,
  length: 6,
}));