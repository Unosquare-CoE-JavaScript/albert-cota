# You Dont Know Javascript Yet

### Kyle Simpsom

***

## Chapter 1:  What Is JavaScript?
Language Specification
    TC39 - The technical steering committee that manages JS.
    ECMA - Nonprofit standards organization for information and communication systems.

Paradigm-level code categories (How programmers approach problems and solutions. How they structure and maintain code.)
    - Procedural
    - Object-Oriented
    - Functional-Programming

Javascript is a multi-paradigm language.


## Chapter 2: Surveying JS
Each File is a Program
Values
    - Primitive
        - Strings
        - Numbers
        - Booleans
        - Symbols (Symbols are almost exclusively used as keys on objects)
            objectName[Symbol("keyName")]; //Mostly used on libraries and frameworks
    - Object
        - Arrays
        - Functions
 
Arrays And Objects
- Arrays are a special type of object.
- JS arrays can hold any value type either primitive or object.

Value Type Determination
    The typeof operator tells you its built-in type, if primitive or "object". Converting from one type to another such as from string to number is refered to in JS as 'coercion'. Primitive and object values behave differently.

Declaring and using variables
    'let' has more limited access than var.
    Block scoping vs function or regular scoping

````
    var adult = true;

    if (adult) {
        var name = "Kyle";
        let age = 39;
        console.log("Shhh, this is a secret")
    }
    console.log(name)
    //Kyle
    console.log(age)
    //Error !

````

Accessing let variable outside causes an error

'const' must be given a value at the moment is declared, and cannot be re-assigned a different value later.

Besides var/let/const there are other syntactic forms that declare identifiers (variables) in various scopes. for example:

````
function hello(name) {
    console.log(`Hello, ${name}.`);
}
````
Another syntax that decalres a variable is a catch

````
try{

}
catch(err){
    console.log(err) //err is block-scoped and can only exist inside catch
}
````

function expressions vs function declaration
    - fucntions are values that can be assigned
    - Since functions are values they can be assigned as properties to objects

Comparissons
Making decisions in programs requires comparing values to determine theri identity and relationship to each other.
examples:
- "42" === 42                   //false

- "hello" === "Hello"           //false

- true === 1                    //false

- 3 === 3.0                     //true
'===' operator exceptions
- NaN === NaN                   //false
- 0 === -0                      //true

Other examples:
-  [1,2,3] === [1,2,3]          //false
-  {a: 42} === {a: 42}          //false
-  {x => x*2} === {x => x*2}    //false

Coercive Comparisons
Coercion means a value of one type being converted to its respective representation in another type.
t

### How we organize in JS

Classes
    A definition of a typeof custom data structure that includes both data and behaviors that operate on that data.

Class Inheritance and Polymorphism
    - extend To include additional behavior
    - super Delegates the parent

Modules
The module pattern are an outer function that groups data and behavior into a logical unit.

Clasic Modules
Outer function that runs a least once, which returns an instanceof the module with one or more functions exposed that can operate on the module instance's internal(hidden) data.

ESM(ES Modules) introduces in ES6 differ from AMD and UMD mostly in the wrapping. 
- ESM doesnt have a fucntion to define a module instead a file is a module. 
- ESM use the export keyword.
- No need to instantiate.
- Just 'import' to use a single instance
- ESM are in effect singletons

## Chapter 3: Digging to the Roots of JS

### Consuming Iterators

- for ..of loop 
```
for(let val of items){
    console.log(`iterator value : ${val}`)
}
```
- Array spread 
```
doSomethingUseful(...items)
```
### Iterables
Values that can be iterated over.
var temp = [1,2,4,5,6] //An array is an iterable
examples : 
- Strings
- Arrays
- Maps
- Sets

Since arrays are iterables we can copy and array using iterator consumption via the spread operator
```
var temp = [ ...arr ]
```

Maps
A map is a data structure that uses objects as keys, associating a value (of any type) with that object. Maps have different default iteration. Is not just over the maps values but instead its entries. An entry is a tuple.

Array destructuring
````
var buttonNames = new Map();
buttonNames.set(btn1, "Button 1")
buttonNames.set(btn2, "Button 2")

for (let [btn, btnName] of buttonNames) {
    btn.addEventListener("click", function onClick(){
        console.log(`Clicked ${btnName}`);
    })
}
````
If we want to consume only the values

````
for (let btnName of btnNames.values()){
    console.log(btnName);
}
//btn1
//btn2
````

All built-in iterables have three iterator forms available
- entries()
- values()
- keys()

## Clusure
Is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

````
function greeting(msg){
    return function who(name){
        console.log(${msg}, ${name})
    }
} 

var hello = greeting("Hello")
var howdy = greeting("Howdy")

hello("Sarah")
howdy("John")

//Hello, Sarah
//Howdy, John
````

````
function counter(step = 1){
    var count = 0;
    return function increaseCount(){
        count = count + step;
        return count
    }
}
 var incBy1 = counter(1)
 var incBy3 = counter(3)

 incBy1()   //1
 incBy1()   //2
 
 incBy3()   //3
 incBy3()   //6
 incBy3()   //9
````

Each instance of both the inner increaseCount() function is closed over both 'count' and 'step' variables from its outer counter(..) fucntion's scope. Step remains the same over time but count is updated on each invocation.of that inner function. 

**Closure is most common when working with asynchronous code. Such as with callbacks.**

````
function getSomeData(url){
    ajax(url, function onResponse(resp){
        console.log(
            `Response from ${url} is ${resp}`
        );
    });
}
````

### this Keyword
When a function is defined it is attached to the enclosing scope via closure. Scope is the set of rules that controls how references to variables are resolved. But functions also have another characteristic besides their scope that influences what they can access.This characteristic is best described as an **execution context**, adn is exposed to the function via the this keyword.

**Scope** is static and contains a fixed set of variables available at the moment and location you define a function, but a function's **execution context** is dynamic, entirely dependant on **how it is called**(regardless where it is defined or called from).


### Prototypes
A prototype is a characteristic of an object and specifically resolution of a property access.
Think about prototype as a linkagebetween two objects;The linkage is hidden behind the scenes, though there a are ways to expose and observe it.

A series of objects linked togeather via prototypes is called "prototype chain".

**Object.create(..) specifies an object to link the newly created object to, and then returns the newly created (and linked!!) object.**

Object.create(null) creates an object that is not linked anywhere.

## Chapter 4: The Bigger Picture

###Pillar 1: Scope and Closure
Js is lexically scoped except for two characteristics 
 - Hoisting : When all variables declared anywhere in a scope are treated as if they're declared at the beginning of the scope.
 - var-declared variables : Are function scoped, even if they appear inside a block.

 let/const declarations have a peculiar error behavior called the "Temporal Dead Zone" (TDZ) which result in observable but unusuable variables. 

 Clousure : When a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it maintains access to its original scope variables.

 ###Pillar 2: Prototypes
 JS has the ability to create objects directly and explicitly , without first defining its structure in a class.
 People implementes "class design pattern" on top of prototypes (prototypal inheritance)

 Book collection structure
 - Get Started
 - In Scope & Closures
 - in Objects and Classes
 - Types & Grammar
 - Sync and Async
 - Es.next and Beyond

##Appendix A: Exploring Furhter

###Values vs References (How values are assigned and passed around)
Types of values
- Primitives
- Objects

In JS the way values are passed/assigned is defined bby its kind of value.

Primitive values are always assigned/passed as value copies

````
var myName = "Kyle";
var yourName = myName;
myName = "Frank";
console.log(myName)
//Frank
console.log(yourName)
//Kyle
````
**Each variable holds its own copy of the value**

**Only Objects and Arrays are treated as references**





##Appendix B: Practice

###Schedule a meeting

````
const dayStart = "07:30"
const dayEnd = "17:30"

function scheduleMeeting (meetingTime, meetingDuration) {
    workStart = Number(dayStart.substring(0,2)) + (Number(dayStart.substring(3))/60)
    workEnd = Number(dayEnd.substring(0,2)) + (Number(dayEnd.substring(3))/60)

    meeting = Number(meetingTime.substring(0,2)) + (Number(meetingTime.substring(3))/60)
    meetingBlock = meetingDuration / 60

    if (meeting < workStart) {
        return false
    }
    if (meeting + meetingBlock > workEnd) {
        return false
    }
    else {
        return true
    }
}

console.log(scheduleMeeting("07:00",15))     // false
console.log(scheduleMeeting("07:15",30))     // false
console.log(scheduleMeeting("07:30",30))     // true
console.log(scheduleMeeting("11:30",60))     // true
console.log(scheduleMeeting("17:00",45))     // true
console.log(scheduleMeeting("17:30",30))     // false
console.log(scheduleMeeting("18:00",15))     // false
````
