# Hardcore Functional Programming in JavaScript, v2 

Functional Programming = Programming with functions (set of inputs(domain) and outputs(range))

## Functions
- Total
    - For every input there is a corresponding output
- Deterministic
    - Always receive the same output for a given input.(Reliability)
- No Observable Side-Effects
    - No observable effects besides computing a value

Why?
- Reliable
- Reusable
- Portable
- Testable
- Composable
- Properties/Contract

### Array or Pair
```
const add = (x, y) => x + y

const toPair = f =>
    ([x,y]) => f(x,y)

const fromPair = f =>
    (x,y) => f([x,y])

const result = fromPair(toPair(add))(x,y)

console.log(result)
```

### FLIP
```
const add = (x, y) => x + y

const flip = f =>
    (x,y) => f(y,x)

const result1 = flip(add)(1,2)
const result2 = flip(add)(2,1)

console.log(result1)
console.log(result2)
```

### Curry
```
const add = (x, y) => x + y

const curry = f =>
    x => y => f(x,y)

const curriedAdd = curry(add)
//Give it a Y it remembers its X
const increment = curriedAdd(1)
const result = increment(2)

console.log(result)
```

### Modulo example
```
const curry = f =>
    x => y => f(x,y)

const modulo = curry((x,y) => y % x)
const isOdd = modulo(2) // (2, y) => 2 % y

const result = isOdd(2)

console.log(result)
```

### getOdds example
```
const curry = f =>
    x => y => f(x,y)

const modulo = curry((x,y) => y % x)
const isOdd = modulo(2) // (2, y) => 2 % y
const filter = curry((f,xs) => xs.filter(f))
const getOdds = filter(isOdd)
const result = getOdds([1,2,3,4,5])
console.log(result)
```