const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password", function (input) {
  let userInput = input.length;
  if (userInput >= 10) {
    console.log("Success");
  } else {
    console.log("failed");
  }
  // This line closes the connection to the command line interface.
  reader.close();
});
