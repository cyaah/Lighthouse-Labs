// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
    	
      found(i);   // execute callback
    }
  }
arr.forEach(findWaldo);




}

function actionWhenFound(i) {
  
  console.log(`Found waldo at: ${i}`);
  
}
//actionWhenFound is the callback,
//Basially what were doing is the were calling the function as an argument to another function
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
