//A reference to executable code, or a piece of executable code, that is passed as an argument to other code.
function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
    callback();
  }
  
  mySandwich('ham', 'cheese', function() {
    console.log('Finished eating my sandwich.');
  });

  function missingmySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
    callback();
  }
  
  // Missing required argument. Check the browser's developer tools for the error message: Uncaught TypeError: callback is not a function at mySandwich
  missingmySandwich('ham', 'cheese');

  function checkmySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === 'function') {
      callback();
    }
  }
  
  // Third argument is not a function
  checkmySandwich('ham', 'cheese', 'vegetables');