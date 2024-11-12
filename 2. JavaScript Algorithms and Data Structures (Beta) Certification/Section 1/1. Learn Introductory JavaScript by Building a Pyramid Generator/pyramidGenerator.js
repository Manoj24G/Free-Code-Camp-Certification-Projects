// Step 44
// Instead of pushing i to the array, push the value of your character variable.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
