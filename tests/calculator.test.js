import { calculator } from "../scripts/calculator";

test('Adds 1 and 2 to equal 3', () => {
    expect(calculator.add(1,2)).toEqual(3);
});

test('Subtract 5 and 2 to equal 3', () => {
    expect(calculator.subtract(5,2)).toEqual(3);
});

test('Subtract 1 and 3 to equal -2', () => {
    expect(calculator.subtract(1,3)).toEqual(-2);
});

test('Multiply 5 and 2 to equal 10', () => {
    expect(calculator.multiply(5,2)).toEqual(10);
});

test('Multiply -11 and -3 to equal 33', () => {
    expect(calculator.multiply(-11,-3)).toEqual(33);
});

test('Divide 5 and 2 to equal 2.5', () => {
    expect(calculator.divide(5,2)).toEqual(2.5);
});

test('Multiply -10 and 2 to equal -5', () => {
    expect(calculator.divide(-10,2)).toEqual(-5);
});