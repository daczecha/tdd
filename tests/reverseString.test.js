import { reverseString } from "../scripts/reverseString";


test('Input "Hello World!" should return "!dlroW olleH"', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
});
test('Input "racecar" should return "racecar"', () => {
    expect(reverseString('racecar')).toBe('racecar');
});