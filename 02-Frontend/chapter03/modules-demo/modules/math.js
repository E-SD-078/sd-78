export function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
const divide = (a, b) => {
  return a / b;
};
export const subtract = (a, b) => {
  return a - b;
};

export default { add, multiply, divide };
// anything we export as default we can import with a name
