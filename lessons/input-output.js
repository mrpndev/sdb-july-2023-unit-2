// CTRL-C will exit a node env

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// ! COMPUTER RESPONSE COLOR
function computerResponse(string) {
  let white = "\033[0;39m";
  let yellow = "\033[0;33m";
  console.log(yellow + string + white);
}

// ! END OF COMPUTER RESPONSE COLOR

async function start() {
  let firstName = await ask("What is your name? ");
  let quest = await ask("What is your quest? ");
  let color = await ask("What is your color choice? ");
  computerResponse(
    `Hello${firstName}! Good luck with,${quest}, and here is a ${color}, flower for good luck`
  );

  process.exit();
}

start();

/* 
Make a program that uses `readline` and `ask()` to ask three things:
* "What is your name?"
* "What is your quest?"
* "What is your favorite color?"

After asking all three questions, the program should output:

'Hello {name}! Good luck with {quest}, and here is a {color} flower for good luck

> Replace `{name}`, `{quest}`, and `{color}`, with the INPUT values.

*/
