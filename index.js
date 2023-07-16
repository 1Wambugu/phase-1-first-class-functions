// Function: receivesAFunction
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// Function: returnsANamedFunction
function returnsANamedFunction() {
  // Define and return a named function
  function namedFunction() {
    // Function body
  }
  
  return namedFunction;
}

// Function: returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  // Return an anonymous function directly
  return function() {
    // Function body
  };
}
