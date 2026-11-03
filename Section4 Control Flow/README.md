# Section 4: Control Flow

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section covers control flow mechanisms in JavaScript: conditional statements (`if...else`, `switch`), loop structures (`for`, `while`, `do...while`, `for...in`, `for...of`), loop control statements (`break`, `continue`), and 11 algorithmic problem-solving exercises.

---

## 📂 Section Structure

```text
Section4 Control Flow/
├── 01-if-else/                          # Conditional branching with if, else if, else
├── 02-switch-case/                      # Multi-case selection using switch-case
├── 03-for/                              # Counting loops with initialization, condition, step
├── 04-while/                            # Condition-based pre-test loops
├── 05-do-while/                         # Post-test loop executing at least once
├── 06-infinite-loops/                   # Recognizing and preventing infinite loops
├── 07-for-in/                           # Iterating over properties of an object
├── 08-for-of/                           # Iterating directly over iterable elements (arrays)
├── 09-break-continue/                   # Early loop termination and iteration skip
├── 10-max-of-two/                       # [Exercise] Maximum of two numbers
├── 11-excercise-landscape-portrait/     # [Exercise] Landscape vs portrait detection
├── 12-fizzbuzz/                         # [Exercise] Classic FizzBuzz implementation
├── 13-demerit-points/                   # [Exercise] Speed limit and penalty points calculator
├── 14-even-odd/                         # [Exercise] Categorizing even and odd numbers
├── 15-count-truthy/                     # [Exercise] Counting truthy elements in an array
├── 16-string-properties/                # [Exercise] Inspecting and logging string properties
├── 17-sum-of-multiple/                  # [Exercise] Summing multiples of 3 and 5
├── 18-exercise-grade/                   # [Exercise] Grade determination based on average score
├── 19-stars/                            # [Exercise] Nested loop pattern printing
├── 20-prime-number/                     # [Exercise] Detecting and printing prime numbers
└── README.md                            # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Concepts

### Conditionals & Loops
- **`if...else`**: Executes code blocks based on boolean conditions.
- **`switch...case`**: Compares a value against multiple matching `case` values using strict equality (`===`).
- **`for` Loop**: Best when the exact number of iterations is known in advance.
- **`while` Loop**: Executes as long as a condition evaluates to `true`.
- **`do...while` Loop**: Guaranteed to run the block at least once before checking the condition.
- **`for...in`**: Loops over the keys (properties) of an object or indices of an array:
  ```javascript
  const person = { name: 'Mosh', age: 30 };
  for (let key in person) {
      console.log(key, person[key]);
  }
  ```
- **`for...of`**: Loops directly over the values of an iterable (e.g. array, string):
  ```javascript
  const colors = ['red', 'green', 'blue'];
  for (let color of colors) {
      console.log(color);
  }
  ```
- **`break` vs `continue`**:
  - `break`: Immediately exits the loop.
  - `continue`: Skips the remainder of the current iteration and jumps to the next.

---

## 🏋️ Problem-Solving Exercises

| Exercise Folder | Goal | Key Concept |
| :--- | :--- | :--- |
| **`10-max-of-two`** | Return the highest of two numbers. | Ternary operator (`return (a > b) ? a : b;`) |
| **`11-excercise-landscape-portrait`** | Determine if an image is landscape. | Boolean expression (`return (width > height);`) |
| **`12-fizzbuzz`** | Return `'Fizz'`, `'Buzz'`, `'FizzBuzz'`, input, or `'Not a number'`. | Modulo operator (`%`) and `typeof` check |
| **`13-demerit-points`** | Calculate 1 point per 5 km/h over speed limit (70). Suspend at 12 points. | `Math.floor()` calculation |
| **`14-even-odd`** | Display each number up to `limit` labeled `EVEN` or `ODD`. | Remainder check `i % 2 === 0` |
| **`15-count-truthy`** | Count how many items in an array are truthy. | Truthy evaluation with `for...of` |
| **`16-string-properties`** | Iterate an object and log only properties where `typeof === 'string'`. | `for...in` property inspection |
| **`17-sum-of-multiple`** | Sum numbers up to `limit` that are multiples of 3 or 5. | Modulo conditionals inside a loop |
| **`18-exercise-grade`** | Compute array average and map: `<60` (F), `<70` (D), `<80` (C), `<90` (B), `<100` (A). | Helper functions and grade banding |
| **`19-stars`** | Print `*`, `**`, `***` row by row up to row count. | Nested `for` loops |
| **`20-prime-number`** | Print all prime numbers up to `limit`. | Factor testing and modular function design |

---

## 🚀 How to Run

```bash
# Example: Run FizzBuzz exercise
node "Section4 Control Flow/12-fizzbuzz/index.js"

# Example: Run Demerit Points calculator
node "Section4 Control Flow/13-demerit-points/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Operators](../Section3%20Operators/README.md) | [Next Section: Objects ➡️](../Section5%20Objects/README.md)

