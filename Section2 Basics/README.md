# Section 2: Basics

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section covers the essential building blocks of the JavaScript programming language: variable declarations, data types, dynamic typing, objects, arrays, and functions.

---

## 📂 Section Structure

```text
Section2 Basics/
├── 01-variables/          # Variable declaration using 'let' & naming conventions
├── 02-constants/          # Immutable identifiers using 'const'
├── 03-Primitive-types/    # String, Number, Boolean, undefined, null
├── 04-Dynamic/            # Dynamic typing and the 'typeof' operator
├── 05-objects/            # Object literals, dot & bracket notation
├── 06-Arrays/             # Array creation, zero-based indexing, length
├── 07-functions/          # Function declarations, parameters, arguments, return
└── README.md              # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Concepts

### [01-variables](./01-variables/)
- Variable declaration with modern `let` (preferred over legacy `var`).
- **Naming Rules**:
  - Cannot be a reserved keyword (e.g., `let`, `if`, `return`).
  - Must be meaningful and descriptive.
  - Cannot start with a number.
  - Cannot contain spaces or hyphens.
  - Recommended naming convention: `camelCase` (e.g., `firstName`).

### [02-constants](./02-constants/)
- Declaring variables using `const` when values should not be reassigned.
- **Rule of Thumb**: Default to `const`. Use `let` only if the value needs to change later.
```javascript
const interestRate = 0.3;
// interestRate = 1; // Error: Assignment to constant variable.
```

### [03-Primitive-types](./03-Primitive-types/)
JavaScript primitives are immutable and passed by value:
- `string`: text values (e.g., `'Mosh'`)
- `number`: integers and floating-point numbers (e.g., `30`, `3.14`)
- `boolean`: boolean truth values (`true` or `false`)
- `undefined`: default value of uninitialized variables
- `null`: explicit intentional absence of value

### [04-Dynamic](./04-Dynamic/)
- JavaScript is dynamically typed: variable types are determined at runtime, not during compile time.
- The `typeof` operator checks the runtime type of a variable:
```javascript
let name = 'Mosh'; // typeof name => 'string'
name = 1;          // typeof name => 'number'
```

### [05-objects](./05-objects/)
- Objects group related state (properties) together in key-value pairs:
```javascript
let person = {
    name: 'Mosh',
    age: 30
};
// Dot Notation (preferred)
person.name = 'John';

// Bracket Notation (useful when property name is dynamic)
person['name'] = 'Mary';
```

### [06-Arrays](./06-Arrays/)
- Ordered data structure containing lists of items:
```javascript
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length); // 3
```
- Array elements and size in JavaScript are dynamic and can hold mixed types.

### [07-functions](./07-functions/)
- Reusable blocks of code performing a task or calculating a value:
```javascript
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');

// Calculating a value
function square(number) {
    return number * number;
}
console.log(square(2)); // 4
```

---

## 🚀 How to Run

Navigate to any subfolder and either open its `index.html` in your browser with Live Server, or run its script via Node.js:
```bash
node "Section2 Basics/07-functions/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Getting Started](../Section1%20Getting%20Started/README.md) | [Next Section: Operators ➡️](../Section3%20Operators/README.md)

