# Chapter 5. Synchronous VS Asynchronous
____



### Asynchronous Code

| Advantages             | Disadvantages             |
| ---------------------- | ------------------------- |
| Performant             | Difficul to write/reason  |
| Elminates Code-blocking|                           |

### Event Loop


### Callbacks 
- Not Asynchronous code
- Doesnt take advantage of the *event loop*
- Used for example :
    - Requests
    - Inputs from the user
    - Repeated tasks

*CODE*
````
let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});

console.log("End of processStudents");

let determineTotal = function() {
    let total = 0,
        count = 0;

    processStudents(students, function(obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}

determineTotal();
````

*OUTPUT*
````
Mary passed!
James passed!
Rachel passed!
Lynette passed!
End of processStudents
Total Score: 390 - Total Count: 5
````

### Problems with callbacks
- Callback Hell
- Difficult to reason about
- Inversion of Control




## IIFEs (Immediately Invoked Function Eexpressions)
Javacript function that runs as it is defined.

Exmaples of use:
- Set-up event listeners
- Creation of global variables

Code Examples :

`````
let product = function(){
    console.log(5*5)
}();
`````

`````
(function(){
    console.log(5*5)
})();
`````

Reusable IIFEs
`````
(funcName = function(num=5){
    console.log(num*num)
})();

funcName(8);
`````

Clousure in IIFEs
`````
var num=5;

(function(){
    let num = 3
    console.log(num)
})();

console.log(num);
//3
//5
`````

Using block scope
`````
var num=5;

{
    let num = 3
    console.log(num)
}

console.log(num);
//3
//5
`````

## Promise

- Object with properties and methods(then, catch, finally ...)
- Represents the eventual completition (or failure) of an Asynchronous Operation
- Provides a resulting value

### Asynchronous Functions
- setTimeout()
- setInterval()
- Node.js setImmediate()
- Node.js process.nextTick()
- Node.js readFile()


## Using the Promise all and race Static Methods
Promise.all returns all promises in an array. Promise.rece return the first promise to be completed

- #### promise.all

Method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises.

- #### promise.allSettled

Method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.J

- #### promise.any

Takes an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise.

## Asyn & Await
Use of async and await enables the use of ordinary try / catch blocks around asynchronous code. 

**Note:** The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError .


## Using Maps on Arrays

