const character = "#";
const count = 8;
const rows = [];

// Step 66
// Replace the character.repeat(i + 1) in your .push() call with a function call for your padRow function.

function padRow(rowNumber, rowCount) {
  return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow());
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
