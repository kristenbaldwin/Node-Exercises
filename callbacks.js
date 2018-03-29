// Function #1

// Original
// function add(x, y) {
//     var result = x + y;
//     return result;
//   }

// Rewritten
function add(x, y, callback) {
    setTimeout(function () {
        var result = x + y;
        callback(result);
    });
}
add(1, 2, function(result){console.log(result);});

// Function #2

// Original
// function subtract(x, y) {
//     return x - y;
//   }

//Rewritten
function subtract(x, y, callback) {
    setTimeout(function () {
        callback(x, y);
    });
}
subtract(2, 1, function(x, y){console.log(x - y);});

// Function #3

// Original 
// function greeting(person) {
//     return 'Hola, ' + person + '!';
//   }

// Rewritten
function greeting(person, callback) {
    setTimeout(function () {
        callback(person);
    });
}
greeting("Sam", function(person){console.log('Hola, ' + person + '!');});

// Function #4

// Original
// function product(numbers) {
//     return numbers.reduce(function(a, b) {
//       return a * b;
//     }, 1);
//   }

// Rewritten
function product(numbers, callback) {
    setTimeout(function () {
        callback(numbers);
    });
}

product([1, 2, 3], function(numbers){console.log(numbers.reduce(function(a, b){return a * b;}, 1))});
