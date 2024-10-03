const character = "#";
const count = 8;
const rows = [];

// Step 64
// Give your padRow function a rowNumber and rowCount parameter. Multiple parameters are separated by a comma:

function padRow(rowNumber, rowCount) {}

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);