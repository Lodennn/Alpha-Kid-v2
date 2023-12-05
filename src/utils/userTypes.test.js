// import { convertObjectToArray, sum } from "./userTypes";

// test("it returs true in case of 10", () => {
//   const itShouldBeTen = sum(5, "4");
//   expect(itShouldBeTen).toBe(true);
// });

// test("it returs true in case of 10", () => {
//   const itShouldBeTen = sum();
//   expect(itShouldBeTen).toBe(true);
// });

// test("it converts object to array", () => {
//   const input = {
//     1: { name: "khaled", age: 27 },
//     2: { name: "khaled", age: 27 },
//   };
//   const result = convertObjectToArray(input);

//   expect(result).toHaveLength(2);
// });

// test("it converts object to array", () => {
//   const input = {
//     1: { name: "khaled", age: 27 },
//     2: { name: "khaled", age: 27 },
//     x: { name: "qwe", age: 20 },
//   };
//   const result = convertObjectToArray(input);

//   expect(result[2]).toMatchObject({ id: "x", name: "qwe", age: 20 });
// });

import { checkUserType } from "./userTypes";

describe("utils/userTypes/checkUserType", () => {
  test("it returns 2 in case of a valid Parent user type", () => {
    const input = "Parent";
    const output = checkUserType(input);
    expect(output).toBe(2);
  });

  test("it returns 1 in case of a valid Teacher user type", () => {
    const input = "Teacher";
    const output = checkUserType(input);
    expect(output).toBe(1);
  });

  test("it returns undefined if no id", () => {
    const input = "Please select user type";
    const output = checkUserType(input);
    expect(output).not.toBeDefined();
  });

  test("it returns undefined if missing arguments", () => {
    const output = checkUserType();
    expect(output).not.toBeDefined();
  });
});
