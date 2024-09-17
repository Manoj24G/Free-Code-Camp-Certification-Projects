const character = "#";
const count = 8;
const rows = [];

// Step 39
for (let character = 0; character < count; character = character + 1) {
  rows.push(character);
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);