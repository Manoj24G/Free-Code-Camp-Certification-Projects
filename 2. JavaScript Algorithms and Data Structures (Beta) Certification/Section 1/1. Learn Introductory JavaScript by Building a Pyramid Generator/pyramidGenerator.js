// Step 75
// Update your loop condition to run while i is less than or equal to count.

const character = "*";
const count = 7;
// const count = +prompt("Enter the number");
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
