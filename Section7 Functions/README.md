# Section 7: Functions

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section covers advanced function concepts in JavaScript: declarations vs expressions, hoisting, variable scopes, rest/default parameters, getters and setters, error handling (`try...catch`), the `this` keyword, and explicit binding.

---

## 📂 Section Structure

```text
Section7 Functions/
├── 01-function-declare/         # Function declarations vs named/anonymous function expressions
├── 02-hoisting/                 # Hoisting mechanism and behavior differences
├── 03-arguments/                # Accessing dynamic parameters using the 'arguments' object
├── 04-rest-operator/            # The ES6 Rest Parameter (...args)
├── 05-default-perameter/        # ES6 default parameter assignments
├── 06-getter-setter/            # Object getters and setters
├── 07-try-catch/                # Defensive programming, throwing errors, and try-catch
├── 08-local-global/             # Local scope vs Global scope and variable precedence
├── 09-let-vs-var/               # Block scope (let/const) vs Function scope (var)
├── 10-this-keyword/             # The 'this' keyword in methods, functions, and constructors
├── 11-changing-this/            # Rebinding 'this' with call, apply, bind, and arrow functions
├── 12-sum-of-arg/               # [Exercise] Sum function handling both rest arguments & arrays
├── 13-area-circle/              # [Exercise] Circle object with read-only area getter
├── 14-error-handeling/          # [Exercise] Enhancing countOccurrences with try-catch & validation
└── README.md                    # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Concepts

### 1. Function Declarations vs Expressions & Hoisting
- **Declaration**: Can be called before it is defined because JavaScript hoists declarations to the top of the scope:
  ```javascript
  walk(); // Works!
  function walk() {
      console.log('walk');
  }
  ```
- **Expression**: Not hoisted; calling before definition results in a `ReferenceError`:
  ```javascript
  // run(); // Error!
  const run = function() {
      console.log('run');
  };
  ```

### 2. Arguments vs Rest Operator
- **`arguments` Object**: Available in regular functions; holds all passed arguments as an array-like object.
- **Rest Parameter (`...args`)**: Modern ES6 way to gather arguments into a real array. Must be the last parameter:
  ```javascript
  function sum(discount, ...prices) {
      const total = prices.reduce((a, b) => a + b);
      return total * (1 - discount);
  }
  ```

### 3. Getters, Setters & Error Handling
- **Getters & Setters**: Allow methods to be accessed like properties:
  ```javascript
  const person = {
      firstName: 'Mosh',
      lastName: 'Hamedani',
      get fullName() {
          return `${this.firstName} ${this.lastName}`;
      },
      set fullName(value) {
          if (typeof value !== 'string')
              throw new Error('Value is not a string.');
          const parts = value.split(' ');
          if (parts.length !== 2)
              throw new Error('Enter a first and last name.');
          this.firstName = parts[0];
          this.lastName = parts[1];
      }
  };
  ```
- **`try...catch`**:
  ```javascript
  try {
      person.fullName = null;
  } catch (e) {
      console.log(e.message);
  }
  ```

### 4. `let` vs `var` and Scope
- `let` and `const` create **block-scoped** variables (confined to the nearest `{}`).
- `var` creates **function-scoped** variables and attaches to the global `window` object in browsers, causing global namespace pollution and subtle bugs.

### 5. The `this` Keyword
The `this` keyword references the object that is executing the current function:
1. **Method in an object** &rarr; `this` references the object itself.
2. **Regular function** &rarr; `this` references the global object (`window` in browsers, `global` in Node.js).
3. **Constructor function (with `new`)** &rarr; `this` references the newly created instance.

#### Changing `this`:
- `fn.call({ name: 'John' }, arg1, arg2)`
- `fn.apply({ name: 'John' }, [arg1, arg2])`
- `const boundFn = fn.bind({ name: 'John' })`
- **Arrow Functions**: Inherit `this` lexically from the enclosing execution context.

---

## 🏋️ Problem-Solving Exercises

| Exercise Folder | Goal | Key Concept |
| :--- | :--- | :--- |
| **`12-sum-of-arg`** | Create a `sum()` function that handles multiple numbers or a single array of numbers. | `Array.isArray()` and flattening rest arguments. |
| **`13-area-circle`** | Create a circle object with `radius` property and read-only `area` getter. | Getter without setter (`get area()`). |
| **`14-error-handeling`** | Wrap `countOccurrences` with defensive validation (`throw new Error`) and `try...catch`. | Exception throwing and handling. |

---

## 🚀 How to Run

```bash
# Example: Run Area of Circle getter exercise
node "Section7 Functions/13-area-circle/index.js"

# Example: Run Error handling exercise
node "Section7 Functions/14-error-handeling/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Arrays](../Section6%20Arrays/README.md)

