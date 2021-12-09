import { capitalize } from "../scripts/capitalize";


test('Input "hello World!" should return "Hello World!"', () => {
    expect(capitalize('hello World!')).toBe('Hello World!')});