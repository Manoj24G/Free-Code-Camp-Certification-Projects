// Step 43
// You need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. 

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);