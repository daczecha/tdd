import { cipher } from "../scripts/cipher";


test("hello world equals mjqqt btwqi with a shift of 5", () => {
    expect(cipher("hello world", 5)).toBe("mjqqt btwqi");
});

test("handle negative numbers", () => {
    expect(cipher("hello world", -10)).toBe("xubbe mehbt");
});

test("handle large positive shifts", () =>{
    expect(cipher("hello world", 1000)).toBe("tqxxa iadxp");
});

test("handle capitals", () =>{
    expect(cipher("HeLlO WoRlD", 5)).toBe("MjQqT BtWqI");
});