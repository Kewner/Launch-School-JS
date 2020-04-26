// Write a while loop that logs all odd natural numbers between 1 and 40.
let index = 1;

while (index <= 40) {
  console.log(index);
  index += 2;
}

// Alternative solution:
let i = 1;

while (i <= 40) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i += 1;
}