# Chapter 1: What's the Scope?
____

## Clousures
JS functions are themselves first-class values; they can be assigned and passed around just like numbers or strings. But since these functions hold and access variables, they maintain their original scoper no matter where in the program the functions are evntually executed.

Modules are a code organization patter characterized by public methods that have privileged access(via closure) to hidden variables and functions in the internalscopeof the module.

## Compiled vs Interpreted
Processing model is different unlike a program being compiled all at once, with interpretation the source code is transformed line by line.

Modern JS engines actually employ numerous variations of both compilation and interpretation in the handling of JS programs.

### Compiling code
A program is processed by a compuler in three basic stages:
1. **Tokenizing/Lexing:** Breaking up a string of characters into meaningful chunks, called tokens. Tokens are idetified in a stateless or stateful way.
2. **Parsing:** Taking a stream(array) of tokens and turning it intoa tree of nested elements, whichcollectively represent the grammatical structure of the program. This is called an Abstract Syntax Tree(AST)
3. **Code Generation:** Taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform its targeting and other factors.

### Required: Two Phases
1. Parsing/Compilation 
2. Execution

The separation of this two phases is an observable fact. JS behavior is essentially compile-then-execute. And this can be verified by three characteristics
1. Syntax
2. Early errors
3. Hoisting

#### Syntax errors from the start
JS wouldnt render a well formed console.log() if one of the following lines include a syntax error.This is beacause the JS engine parsed the entire file first.

#### Early errors
For example a function having duplicate names for parameters will prevent the program's execution. This means that the code is fully parsed before any execution occurs.

#### Hoisting
Cannot access variables before its declaration

## Chapter 2: Illustrating Lexical Scope

**Target** of an assignment (If a value is assigned to it)
    A function definition is a special case of a target reference. You can think of it like 
    function temp(param){}  === var temp = function(param){}
**Source** of a value

### Lexical Scope
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

### Nested Scope
Scopes are created by code blocks, functions, modules. While const and let variables are scoped by code blocks, functions or modules, var variables are scoped only by functions or modules. Scopes can be nested. Inside an inner scope you can access the variables of an outer scope.

## Chapter 3: The Scope Chain

The scope chain controls variable access, directionally oriented upward and outward.
Arrow functions are lexically anonymous.
When a variable name is repeated at a different level of scope chain, shadowing occurs,  which prevents access to outer variable from that point inward.

## Chapter 4: Around the Global Scope
**Always use var for globals. Reserve let and const for block scopes**


### DOM Globals
`````
var name = 42;
console.log(name, typeof name);
`````

### Web Workers
Are treated as a whole separate program, it does not share the global scopewith the main JS program. In a web worker, the global object reference is typically made using self.

### Developer Tools Console/REPL
Differences programs and developer tools
- The behavior of the global scope
- Hoisting
- Block-scoping declarators(let/const) when used in outer most scope

## ES Modules (ESM)
ES6 introduced first-class support for the module pattern. One of the most obvious impacts of using ESM is how it changes the behavior of the top level scope in a file.
Global variables dont get created by declaring variables in the top-level scope of a module.

ESM encourages a minimization of reliance on the global scope, where you import whatever modules you may need for the current module to operate.

**The top level of your ESM program in never actually the global scope**

Before processing Node effectively wraps a module code in a functionso that the vars and function declarations are contained in that wrapping function scope, not treated as global variables.

## Chapter 5: (Not so) Secret Lifecycle of Variables
The term most commonly used for a variable being visible from the beginning of its enclosing scope, even though its declaration may appear further down in the scope is called **hoisting**

## Chapter 6: Limiting Scope Exposure

### Least Exposure
Why do we need blocks to create exposure?
POLP - Principle of least priviledge
POLE - A variation of POLP which stands for Principle of least priviledge 

POLE experesses a defensive posture to software architecture.
- Least Priviledge
- Least Access
- Least Exposure

POLP focuses on the system-level component design and POLE exposure variant focuses on the lower level. POLE simply wants to minimize the exposure of the variables registered on each scope.

When variables used by one part of the program are exposed to another part of the program via scope there are three  main hazards :
- Naming collisions
- Unexpected behavior
- Unintended dependency

### Hidding in Plain (Function) Scope
let/const (block scoped declarators) keywords help hide our variable and function declarations.

**Memoization** Caching a function's computed output to optimize performance when repeated calls of the same inputs are expected. Commonly used in Functional Programming

IIFE - Immediately Invoked Function Expression
Are useful when we want to create a scope to hide variable/functions. Since its an expression, it can be used in any placein a JS program where an experssion is allowed. An IIFE can be named or can be anonymous.

### Function Boundaries
