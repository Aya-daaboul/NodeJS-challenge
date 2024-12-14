
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text=text.trim().toLowerCase()
  console.log("showing the text "+text)
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if(text.startsWith('hello')){
    hello(text);
  }
  else if(text==='help'){
      showHelp();
    }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/** this function prints all possible commands
 * this function runs if the user inputs the word help
 */
function showHelp()
{
  console.log('The available commands are')
  console.log('1 type in hello so we welcome you')
  console.log('2 type in exit or quit to quit the application')
  console.log('3 type in anything so the app prints it back')
  console.log('4 type in help to see al existing commands')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(e){
  console.log(e+"!")
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Aya's app")
