# JavaScript Foundations & Mastery

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

A structured, hands-on repository covering core JavaScript concepts from beginner fundamentals to advanced mechanics. Each folder contains runnable HTML and JavaScript files demonstrating specific language features, algorithms, patterns, and practical exercises.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Curriculum Breakdown](#curriculum-breakdown)
  - [Section 1: Getting Started](#section-1-getting-started)
  - [Section 2: Basics](#section-2-basics)
  - [Section 3: Operators](#section-3-operators)
  - [Section 4: Control Flow](#section-4-control-flow)
  - [Section 5: Objects](#section-5-objects)
  - [Section 6: Arrays](#section-6-arrays)
  - [Section 7: Functions](#section-7-functions)
- [How to Run the Code](#how-to-run-the-code)
  - [Method 1: Run with Browser / Live Server (Recommended)](#method-1-run-with-browser--live-server-recommended)
  - [Method 2: Run with Node.js](#method-2-run-with-nodejs)
- [Key Concepts Covered](#key-concepts-covered)
- [Author](#author)
- [License](#license)

---

## 🔍 Overview

This repository is designed as a modular reference and practice guide for modern JavaScript (ES6+). Every concept is isolated in its own self-contained directory with an `index.js` logic file and an accompanying `index.html` file for immediate browser testing via DevTools Console.

---

## 📁 Repository Structure

```text
Javascript/
├── README.md
├── Section1 Getting Started/
│   ├── index.html
│   ├── index.js
│   └── README.md
├── Section2 Basics/
│   ├── 01-variables/
│   ├── 02-constants/
│   ├── 03-Primitive-types/
│   ├── 04-Dynamic/
│   ├── 05-objects/
│   ├── 06-Arrays/
│   ├── 07-functions/
│   └── README.md
├── Section3 Operators/
│   ├── 01-arithmetic-operators/
│   ├── 02-assignment-operators/
│   ├── 03-comparison-operator/
│   ├── 04-equality-operators/
│   ├── 05-ternary-operators/
│   ├── 06-logical-operators/
│   ├── 07-logical-operators-non-boolian/
│   ├── 08-bitwise-operators/
│   ├── 09-operator-presidence/
│   ├── 10-quiz/
│   ├── 11-swapping-values/
│   └── README.md
├── Section4 Control Flow/
│   ├── 01-if-else/
│   ├── 02-switch-case/
│   ├── 03-for/
│   ├── 04-while/
│   ├── 05-do-while/
│   ├── 06-infinite-loops/
│   ├── 07-for-in/
│   ├── 08-for-of/
│   ├── 09-break-continue/
│   ├── 10-max-of-two/
│   ├── 11-excercise-landscape-portrait/
│   ├── 12-fizzbuzz/
│   ├── 13-demerit-points/
│   ├── 14-even-odd/
│   ├── 15-count-truthy/
│   ├── 16-string-properties/
│   ├── 17-sum-of-multiple/
│   ├── 18-exercise-grade/
│   ├── 19-stars/
│   ├── 20-prime-number/
│   └── README.md
├── Section5 Objects/
│   ├── 01-basics/
│   ├── 02-factory-functions/
│   ├── 03-constructor/
│   ├── 04-dynamic-nature/
│   ├── 05-constructor-property/
│   ├── 06-functions-are-objects/
│   ├── 07-value-vs-ref/
│   ├── 08-property-of-object/
│   ├── 09-cloning-object/
│   ├── 10-garbage-collection/
│   ├── 11-math/
│   ├── 12-strings/
│   ├── 13-template-literals/
│   ├── 14-date/
│   ├── 15-ex-address/
│   ├── 16-factory-constructor/
│   ├── 17-object-equal/
│   ├── 18-blog-post/
│   ├── 19-constructor-func/
│   ├── 20-price-range/
│   └── README.md
├── Section6 Arrays/
│   ├── 01-adding/
│   ├── 02-find-element/
│   ├── 03-find-el-ref/
│   ├── 04-arrow-func/
│   ├── 05-rmv-elements/
│   ├── 06-emptying-array/
│   ├── 07-combine-slice/
│   ├── 08-spread-operator/
│   ├── 09-iterate-array/
│   ├── 10-join-array/
│   ├── 11-sorting-array/
│   ├── 12-test-element-array/
│   ├── 13-filter-array/
│   ├── 14-map-array/
│   ├── 15-ary-from-range/
│   ├── 17-includes/
│   ├── 18-except/
│   ├── 19-move-element/
│   ├── 20-count-occurences/
│   ├── 21-getmax/
│   ├── 22-movies/
│   └── README.md
└── Section7 Functions/
    ├── 01-function-declare/
    ├── 02-hoisting/
    ├── 03-arguments/
    ├── 04-rest-operator/
    ├── 05-default-perameter/
    ├── 06-getter-setter/
    ├── 07-try-catch/
    ├── 08-local-global/
    ├── 09-let-vs-var/
    ├── 10-this-keyword/
    ├── 11-changing-this/
    ├── 12-sum-of-arg/
    ├── 13-area-circle/
    ├── 14-error-handeling/
    └── README.md
```

---

## 📚 Curriculum Breakdown

### [Section 1: Getting Started](./Section1%20Getting%20Started/README.md)
Introductory environment setup, running JavaScript in the browser console and linking external script files.
- [`Section1 Getting Started`](./Section1%20Getting%20Started/): First script execution and console output (`console.log`).

---

### [Section 2: Basics](./Section2%20Basics/README.md)
Foundational JavaScript syntax, variable declarations, and primitive vs reference types.

| Folder | Description |
| :--- | :--- |
| [`01-variables`](./Section2%20Basics/01-variables/) | Variable declaration using `let`, naming rules, and conventions. |
| [`02-constants`](./Section2%20Basics/02-constants/) | Declaring immutable identifiers using `const`. |
| [`03-Primitive-types`](./Section2%20Basics/03-Primitive-types/) | Primitive data types: `string`, `number`, `boolean`, `undefined`, and `null`. |
| [`04-Dynamic`](./Section2%20Basics/04-Dynamic/) | JavaScript's dynamic typing system and inspecting types using `typeof`. |
| [`05-objects`](./Section2%20Basics/05-objects/) | Object literals, properties, dot notation, and bracket notation. |
| [`06-Arrays`](./Section2%20Basics/06-Arrays/) | Array literals, zero-based indexing, and dynamic length. |
| [`07-functions`](./Section2%20Basics/07-functions/) | Declaring functions, parameters vs arguments, and return values. |

---

### [Section 3: Operators](./Section3%20Operators/README.md)
Mathematical, logical, bitwise, and conditional operators.

| Folder | Description |
| :--- | :--- |
| [`01-arithmetic-operators`](./Section3%20Operators/01-arithmetic-operators/) | Addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), remainder (`%`), exponentiation (`**`), increment (`++`), and decrement (`--`). |
| [`02-assignment-operators`](./Section3%20Operators/02-assignment-operators/) | Assignment (`=`) and compound assignment operators (`+=`, `*=`, etc.). |
| [`03-comparison-operator`](./Section3%20Operators/03-comparison-operator/) | Relational operators (`>`, `>=`, `<`, `<=`). |
| [`04-equality-operators`](./Section3%20Operators/04-equality-operators/) | Strict equality (`===`, `!==`) vs loose equality (`==`, `!=`). |
| [`05-ternary-operators`](./Section3%20Operators/05-ternary-operators/) | Conditional ternary operator (`condition ? a : b`). |
| [`06-logical-operators`](./Section3%20Operators/06-logical-operators/) | Logical AND (`&&`), Logical OR (`\|\|`), and Logical NOT (`!`). |
| [`07-logical-operators-non-boolian`](./Section3%20Operators/07-logical-operators-non-boolian/) | Falsy vs Truthy values and short-circuit evaluation. |
| [`08-bitwise-operators`](./Section3%20Operators/08-bitwise-operators/) | Bitwise AND, OR, and permission flags mask simulation. |
| [`09-operator-presidence`](./Section3%20Operators/09-operator-presidence/) | Order of operations and grouping using parentheses. |
| [`10-quiz`](./Section3%20Operators/10-quiz/) | Practical operator evaluation scenarios and edge cases. |
| [`11-swapping-values`](./Section3%20Operators/11-swapping-values/) | **Exercise:** Swapping two variable values using a temporary variable. |

---

### [Section 4: Control Flow](./Section4%20Control%20Flow/README.md)
Conditionals, loops, iterations, and problem-solving exercises.

| Folder | Description |
| :--- | :--- |
| [`01-if-else`](./Section4%20Control%20Flow/01-if-else/) | Branching with `if`, `else if`, and `else`. |
| [`02-switch-case`](./Section4%20Control%20Flow/02-switch-case/) | Multi-way branching with `switch`, `case`, `break`, and `default`. |
| [`03-for`](./Section4%20Control%20Flow/03-for/) | Standard counting loop with initialization, condition, and increment. |
| [`04-while`](./Section4%20Control%20Flow/04-while/) | Pre-test conditional loop execution. |
| [`05-do-while`](./Section4%20Control%20Flow/05-do-while/) | Post-test loop executing at least once. |
| [`06-infinite-loops`](./Section4%20Control%20Flow/06-infinite-loops/) | Recognizing and preventing uncontrolled infinite loops. |
| [`07-for-in`](./Section4%20Control%20Flow/07-for-in/) | Enumerating enumerable properties of an object or indices of an array. |
| [`08-for-of`](./Section4%20Control%20Flow/08-for-of/) | Iterating directly over iterable items (e.g. array elements). |
| [`09-break-continue`](./Section4%20Control%20Flow/09-break-continue/) | Premature loop exit (`break`) and jumping to the next iteration (`continue`). |
| [`10-max-of-two`](./Section4%20Control%20Flow/10-max-of-two/) | **Exercise:** Function returning the greater of two numbers. |
| [`11-excercise-landscape-portrait`](./Section4%20Control%20Flow/11-excercise-landscape-portrait/) | **Exercise:** Detect whether dimensions represent landscape or portrait format. |
| [`12-fizzbuzz`](./Section4%20Control%20Flow/12-fizzbuzz/) | **Exercise:** The classic FizzBuzz algorithm handling multiples of 3, 5, and both. |
| [`13-demerit-points`](./Section4%20Control%20Flow/13-demerit-points/) | **Exercise:** Speed limit monitor calculating points and license suspension. |
| [`14-even-odd`](./Section4%20Control%20Flow/14-even-odd/) | **Exercise:** Labeling integers up to a limit as "EVEN" or "ODD". |
| [`15-count-truthy`](./Section4%20Control%20Flow/15-count-truthy/) | **Exercise:** Counting non-falsy (truthy) elements in an array. |
| [`16-string-properties`](./Section4%20Control%20Flow/16-string-properties/) | **Exercise:** Inspecting object keys and displaying only string-type properties. |
| [`17-sum-of-multiple`](./Section4%20Control%20Flow/17-sum-of-multiple/) | **Exercise:** Computing the sum of multiples of 3 and 5 up to a limit. |
| [`18-exercise-grade`](./Section4%20Control%20Flow/18-exercise-grade/) | **Exercise:** Calculating average student marks and mapping to letter grades (A–F). |
| [`19-stars`](./Section4%20Control%20Flow/19-stars/) | **Exercise:** Nested loops printing ascending star patterns. |
| [`20-prime-number`](./Section4%20Control%20Flow/20-prime-number/) | **Exercise:** Algorithm to identify and print all prime numbers up to a limit. |

---

### [Section 5: Objects](./Section5%20Objects/README.md)
Object-Oriented JavaScript, factory vs constructor functions, prototypes, references, and built-ins.

| Folder | Description |
| :--- | :--- |
| [`01-basics`](./Section5%20Objects/01-basics/) | Object literals and grouping related data and behaviors (methods). |
| [`02-factory-functions`](./Section5%20Objects/02-factory-functions/) | Factory function design pattern returning object instances. |
| [`03-constructor`](./Section5%20Objects/03-constructor/) | Constructor functions using PascalCase, `this`, and the `new` operator. |
| [`04-dynamic-nature`](./Section5%20Objects/04-dynamic-nature/) | Dynamically adding, modifying, and deleting properties from objects. |
| [`05-constructor-property`](./Section5%20Objects/05-constructor-property/) | The built-in `.constructor` property and object origin inspection. |
| [`06-functions-are-objects`](./Section5%20Objects/06-functions-are-objects/) | Functions as first-class objects, `.call()`, `.apply()`, and `Function` constructor. |
| [`07-value-vs-ref`](./Section5%20Objects/07-value-vs-ref/) | Primitive values (copied by value) vs Objects (copied by reference). |
| [`08-property-of-object`](./Section5%20Objects/08-property-of-object/) | Enumerating keys with `for...in`, `Object.keys()`, `Object.entries()`, and `in`. |
| [`09-cloning-object`](./Section5%20Objects/09-cloning-object/) | Cloning objects using `Object.assign()` and the object spread operator (`{ ...obj }`). |
| [`10-garbage-collection`](./Section5%20Objects/10-garbage-collection/) | Automatic memory allocation and garbage collection lifecycle in JavaScript engines. |
| [`11-math`](./Section5%20Objects/11-math/) | Built-in `Math` object methods (`random`, `round`, `max`, `min`, `abs`). |
| [`12-strings`](./Section5%20Objects/12-strings/) | String primitives vs String objects, search methods, replacements, and trimming. |
| [`13-template-literals`](./Section5%20Objects/13-template-literals/) | ES6 template strings with backticks, placeholders `${...}`, and multiline formatting. |
| [`14-date`](./Section5%20Objects/14-date/) | Working with `Date` objects, timestamp parsing, and ISO string formats. |
| [`15-ex-address`](./Section5%20Objects/15-ex-address/) | **Exercise:** Creating an address object and writing a display utility function. |
| [`16-factory-constructor`](./Section5%20Objects/16-factory-constructor/) | **Exercise:** Implementing both Factory and Constructor patterns for address creation. |
| [`17-object-equal`](./Section5%20Objects/17-object-equal/) | **Exercise:** Checking structural equality (`areEqual`) vs reference equality (`areSame`). |
| [`18-blog-post`](./Section5%20Objects/18-blog-post/) | **Exercise:** Modeling a comprehensive blog post using an object literal. |
| [`19-constructor-func`](./Section5%20Objects/19-constructor-func/) | **Exercise:** Refactoring a draft blog post creator into a constructor function. |
| [`20-price-range`](./Section5%20Objects/20-price-range/) | **Exercise:** Designing price filtering objects (e.g., Yelp/Google Maps style). |

---

### [Section 6: Arrays](./Section6%20Arrays/README.md)
Array mutations, functional transformations, filtering, searching, and algorithmic challenges.

| Folder | Description |
| :--- | :--- |
| [`01-adding`](./Section6%20Arrays/01-adding/) | Appending (`push`), prepending (`unshift`), and inserting into middle (`splice`). |
| [`02-find-element`](./Section6%20Arrays/02-find-element/) | Searching primitives with `indexOf`, `lastIndexOf`, and `includes`. |
| [`03-find-el-ref`](./Section6%20Arrays/03-find-el-ref/) | Locating reference elements using predicate functions (`find`, `findIndex`). |
| [`04-arrow-func`](./Section6%20Arrays/04-arrow-func/) | Concise lambda/arrow function syntax (`() => {}`). |
| [`05-rmv-elements`](./Section6%20Arrays/05-rmv-elements/) | Removing from end (`pop`), beginning (`shift`), and middle (`splice`). |
| [`06-emptying-array`](./Section6%20Arrays/06-emptying-array/) | Four strategies to clear an array (`[]`, `.length = 0`, `.splice(0)`, loop). |
| [`07-combine-slice`](./Section6%20Arrays/07-combine-slice/) | Merging arrays with `concat()` and slicing subsets with `slice()`. |
| [`08-spread-operator`](./Section6%20Arrays/08-spread-operator/) | Combining and shallow-cloning arrays using ES6 spread (`[...first, ...second]`). |
| [`09-iterate-array`](./Section6%20Arrays/09-iterate-array/) | Traversing elements using `for...of` and `forEach()` with indices. |
| [`10-join-array`](./Section6%20Arrays/10-join-array/) | Converting arrays to strings via `join()` and slug generation with `split()`. |
| [`11-sorting-array`](./Section6%20Arrays/11-sorting-array/) | Alphabetical sort, reverse sort, and custom comparison functions for objects. |
| [`12-test-element-array`](./Section6%20Arrays/12-test-element-array/) | Verifying condition coverage using `every()` and `some()`. |
| [`13-filter-array`](./Section6%20Arrays/13-filter-array/) | Extracting subsets matching criteria using `filter()`. |
| [`14-map-array`](./Section6%20Arrays/14-map-array/) | Transforming elements via `map()` and method chaining (`filter().map()`). |
| [`15-ary-from-range`](./Section6%20Arrays/15-ary-from-range/) | **Exercise:** Generating an array of integers bounded between `min` and `max`. |
| [`17-includes`](./Section6%20Arrays/17-includes/) | **Exercise:** Custom polyfill implementation of `Array.prototype.includes`. |
| [`18-except`](./Section6%20Arrays/18-except/) | **Exercise:** Excluding an array of elements from another array. |
| [`19-move-element`](./Section6%20Arrays/19-move-element/) | **Exercise:** Shifting an element by offset with boundary error handling. |
| [`20-count-occurences`](./Section6%20Arrays/20-count-occurences/) | **Exercise:** Counting occurrences of a target value using `.reduce()`. |
| [`21-getmax`](./Section6%20Arrays/21-getmax/) | **Exercise:** Finding the maximum numerical value in an array using `.reduce()`. |
| [`22-movies`](./Section6%20Arrays/22-movies/) | **Exercise:** Filtering movies by year and rating, sorting descending, and extracting titles. |

---

### [Section 7: Functions](./Section7%20Functions/README.md)
Function declarations vs expressions, hoisting, arguments, scopes, `this`, and error handling.

| Folder | Description |
| :--- | :--- |
| [`01-function-declare`](./Section7%20Functions/01-function-declare/) | Function declarations vs anonymous/named function expressions. |
| [`02-hoisting`](./Section7%20Functions/02-hoisting/) | Hoisting mechanics: moving declarations to the top before execution. |
| [`03-arguments`](./Section7%20Functions/03-arguments/) | Inspecting the special `arguments` object in non-arrow functions. |
| [`04-rest-operator`](./Section7%20Functions/04-rest-operator/) | Gathering indefinite arguments into a single array using `...args`. |
| [`05-default-perameter`](./Section7%20Functions/05-default-perameter/) | Assigning fallback default values in function parameter lists. |
| [`06-getter-setter`](./Section7%20Functions/06-getter-setter/) | Defining computed properties using `get` and mutators using `set`. |
| [`07-try-catch`](./Section7%20Functions/07-try-catch/) | Throwing error instances (`throw new Error(...)`) and handling them with `try...catch`. |
| [`08-local-global`](./Section7%20Functions/08-local-global/) | Scope resolution, variable shadowing, and avoiding global namespace pollution. |
| [`09-let-vs-var`](./Section7%20Functions/09-let-vs-var/) | Block scope (`let`/`const`) vs function/global scope (`var`) and window binding. |
| [`10-this-keyword`](./Section7%20Functions/10-this-keyword/) | The `this` context across methods, standalone functions, and constructors. |
| [`11-changing-this`](./Section7%20Functions/11-changing-this/) | Rebinding `this` using `.call()`, `.apply()`, `.bind()`, and lexical arrow functions. |
| [`12-sum-of-arg`](./Section7%20Functions/12-sum-of-arg/) | **Exercise:** Function returning the sum of arguments, accepting either rest numbers or an array. |
| [`13-area-circle`](./Section7%20Functions/13-area-circle/) | **Exercise:** Circle object with a configurable radius and a read-only computed `area` getter. |
| [`14-error-handeling`](./Section7%20Functions/14-error-handeling/) | **Exercise:** Adding defensive input validation and exception handling to an array counter. |

---

## 🚀 How to Run the Code

### Method 1: Run with Browser / Live Server (Recommended)

Each topic folder includes an `index.html` file that references its corresponding `index.js`.

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on any `index.html` file in the sidebar and choose **"Open with Live Server"**.
4. Open your browser's Developer Tools (`F12` or `Ctrl + Shift + I` on Windows / `Cmd + Option + I` on macOS) and navigate to the **Console** tab to view the outputs and interact with the code.

### Method 2: Run with Node.js

You can directly run any JavaScript file via your terminal using Node.js:

```bash
# Example: Run Section 4 FizzBuzz
node "Section4 Control Flow/12-fizzbuzz/index.js"

# Example: Run Section 7 Functions Area of Circle
node "Section7 Functions/13-area-circle/index.js"
```

---

## 💡 Key Concepts Covered

- **Type System**: Primitives vs Reference Types, Dynamic Typing, Type Coercion.
- **Control Structures**: `if-else`, `switch-case`, `for`, `while`, `do-while`, `for-in`, `for-of`.
- **Object Oriented**: Factory Functions, Constructor Functions, Prototypes, `this` Binding, Cloning (`Object.assign`, Spread).
- **Functional Array Methods**: `map`, `filter`, `reduce`, `find`, `findIndex`, `every`, `some`, `sort`, `slice`, `splice`.
- **Modern ES6+ Features**: `let`/`const`, Arrow Functions, Template Literals, Rest/Spread Operators, Default Parameters, Getters/Setters.
- **Defensive Programming**: Custom Exceptions, `try...catch`, Input validation.

---

## 👤 Author

**Sajidul Islam**
- GitHub: [@isajidul](https://github.com/isajidul)
- Email: [isajidul174@gmail.com](mailto:isajidul174@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for full details.


