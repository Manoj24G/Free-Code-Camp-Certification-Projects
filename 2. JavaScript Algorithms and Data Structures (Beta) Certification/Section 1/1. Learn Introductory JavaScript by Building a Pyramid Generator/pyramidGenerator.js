// Step 74
// Update the first argument of your padRow call to be i.

const character = "#";
const count = 10;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);