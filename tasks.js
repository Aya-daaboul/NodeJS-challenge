
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
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if(text.startsWith('hello')){
    hello(text);
  }
  else if(text.startsWith('help')){
      showHelp();
    }
  else if(text.startsWith('add')){
    text=text.slice(3).trim(add)
    add(text);
  }
  else if(text.startsWith('remove')){
    text=text.slice(6).trim()
    console.log("item rem is "+text)
    remove(text);
  }
  else if(text.startsWith('print')){
    printtasks();
  }
  else if(text.startsWith('edit')){
    text=text.slice(4).trim()
    edit(text);
  }
  else if(text.startsWith('check')){
    text=text.slice(5).trim()
    check(text);
  }
  else if(text.startsWith('uncheck')){
    text=text.slice(7).trim()
    uncheck(text);
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
  console.log('4 type in add to add task to add this task to your list')
  console.log('5 type in remove to remove last task in the list')
  console.log('6 type in remove index to remove task at specified')
  console.log('7 type in edit task to edit the last task')
  console.log('7 type in edit index task to edit the task at the specified index')
  console.log('note: if you type edit only there will be an error')
  console.log('8 type in check index to check this task at the specified index')
  console.log('9 type in uncheck index to check this task at the specified index')
  console.log('10 type in help to see all existing commands')
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

/**this function lists out all the tasks 
 * it prints the tasks numbered
 * 
*/
let list1=[];
list1[0]="do laundry";
list1[1]="bake cookies";
list1[2]="fry potato";

function add(item){
  if(item===null){
    console.log('no item added')
  }
  else if(list1.includes(item)){
    console.log("item already exists in the list");
  }
  else{
    list1.push(item)
    console.log('item was added to the list')
  }
}
/**
 * This function removes 
 * the specified item from the list
 */
/**function remove(item){
  if(item in list1){
  list1.pop(item);
  console.log('item removed successfully')
  }
  else{
    console.log("there's no such item in the list")
  }

}*/
function remove(index) {

  if(!index){
   list1.pop();
   console.log("last item was removed");
  }
  else if(index < list1.length){
    list1.splice(index, 1);
    console.log('Item removed successfully');
  }
  else{
    console.log('index out of bound');
  }
}

function edit(text){
  const index = parseInt(text);
  if(!text){
    console.log('error')
  }
  if(!index){
    list1[list1.length-1]=text;
  }
  else if(index<list1.length){
    list1[index]=text;
  }
  else{
    console.log("index outof bound")

  }
  
}

function check(text){
 const index = parseInt(text);

 if(isNaN(index)){
  console.log('error')
 }
 else if(index<list1.length){ //still got to figure a way to remove the index
  list1[index] = list1[index] + " DONE"; 
  console.log('checked this task')
   
 }
 else{
  console.log('index out of bound')

 }
}

function uncheck(text){
const index = parseInt(text);

 if(isNaN(index)){
  console.log('error')
 }
 else if(index<list1.length){ //still got to figure a way to remove the index
  list1[index] = list1[index] + " NOT DONE YET"; 
  console.log('unchecked this task')
   
 }
 else{
  console.log('index out of bound')

 }

}

function printtasks(){
  console.log(list1);
}

// The following line starts the application
startApp("Aya's app")
