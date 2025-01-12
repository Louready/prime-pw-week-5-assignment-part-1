console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Lou',
  lastName: 'Coughlin',
  hasSiblings: true,
  shoeCount: 3,
  favThreeFoods: ['chicken', 'beef', 'tacos'],

};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
console.log ('Hi I am' , fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log (me.favThreeFoods[0]);
console.log (me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
//console.log (me.shoeCount);
//function addItem(item) {
//  me.shoeCount.push(item);
//  return true;
//}
function updateShoeCount() {
   me.shoeCount += 1; // or do shoeCount++;
}
updateShoeCount(); // no arguments! because three lines above, the function doesnt WANT/NEED arguments.
console.log(me.shoeCount); // will print 11!
updateShoeCount();
console.log(me.shoeCount); // will print 12!
for (let i=0; i<5; i++) {
   updateShoeCount();
}
console.log(me.shoeCount); // will print... 17! because we ran the function 5 times in the loop



//console.log ( addItem(1));

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/


me.favoriteColor = "grey";

console.log (me);

function doit(x) {

return true;
}
console.log (doit(1,2,3));
