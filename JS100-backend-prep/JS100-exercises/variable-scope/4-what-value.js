// What will the following code log to the console and why? Don't run it until
// you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// This will log: 1
// a is declared inside the function scope,
// so it can also be accessed inside that scope.