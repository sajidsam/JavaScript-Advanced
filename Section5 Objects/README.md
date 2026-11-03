# Section 5: Objects

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section delves into Object-Oriented Programming (OOP) concepts in JavaScript. You will explore object creation patterns (Factory vs Constructor functions), dynamic properties, functions as first-class objects, value vs reference semantics, property enumeration, cloning, and essential standard built-in objects (`Math`, `String`, `Date`).

---

## 📂 Section Structure

```text
Section5 Objects/
├── 01-basics/                   # Object literals & encapsulation
├── 02-factory-functions/        # Factory function pattern (camelCase)
├── 03-constructor/              # Constructor function pattern (PascalCase, 'this', 'new')
├── 04-dynamic-nature/           # Adding & deleting properties dynamically
├── 05-constructor-property/     # Understanding the '.constructor' property
├── 06-functions-are-objects/    # Functions as objects (.call, .apply, Function constructor)
├── 07-value-vs-ref/             # Value types (primitives) vs Reference types (objects)
├── 08-property-of-object/       # Enumerating properties (for-in, Object.keys, Object.entries)
├── 09-cloning-object/           # Cloning with Object.assign and the spread operator ({ ...obj })
├── 10-garbage-collection/       # JavaScript memory lifecycle & automatic garbage collector
├── 11-math/                     # Standard Math object methods (random, round, max, min)
├── 12-strings/                  # String primitive vs String object methods
├── 13-template-literals/        # ES6 template strings, interpolation, and multiline formatting
├── 14-date/                     # Date object creation, parsing, and getters
├── 15-ex-address/               # [Exercise] Address object creation & display function
├── 16-factory-constructor/      # [Exercise] Implementing both Factory & Constructor for address
├── 17-object-equal/             # [Exercise] Structural equality vs Reference equality
├── 18-blog-post/                # [Exercise] Modeling a blog post object literal
├── 19-constructor-func/         # [Exercise] Blog post constructor function
├── 20-price-range/              # [Exercise] Designing price range filtering objects
└── README.md                    # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Concepts

### 1. Object Creation: Factory vs Constructor
- **Factory Function**: Returns a new object without using the `new` operator. Uses `camelCase`:
  ```javascript
  function createCircle(radius) {
      return {
          radius,
          draw() {
              console.log('draw');
          }
      };
  }
  const circle1 = createCircle(1);
  ```
- **Constructor Function**: Uses `this` to bind properties and requires the `new` keyword. Uses `PascalCase`:
  ```javascript
  function Circle(radius) {
      this.radius = radius;
      this.draw = function() {
          console.log('draw');
      };
  }
  const circle2 = new Circle(1);
  ```

### 2. Value vs Reference Types
- **Primitives** (`number`, `string`, `boolean`, `symbol`, `undefined`, `null`) are copied by **value**:
  ```javascript
  let x = 10;
  let y = x;
  x = 20; // y remains 10
  ```
- **Objects** (`arrays`, `functions`, `objects`) are copied by **reference**:
  ```javascript
  let a = { value: 10 };
  let b = a;
  a.value = 20; // b.value is also 20
  ```

### 3. Enumerating & Cloning Objects
- Check existence: `'radius' in circle`
- List keys: `Object.keys(circle)`
- List key-value pairs: `Object.entries(circle)`
- **Cloning**:
  ```javascript
  // Method 1: Object.assign
  const clone1 = Object.assign({}, circle);

  // Method 2: Spread operator (modern ES6)
  const clone2 = { ...circle };
  ```

### 4. Standard Built-in Objects
- **`Math`**: `Math.random()`, `Math.round()`, `Math.max()`, `Math.min()`, `Math.floor()`.
- **`String`**: `.length`, `.indexOf()`, `.includes()`, `.startsWith()`, `.replace()`, `.trim()`, `.split()`.
- **Template Literals**: Uses backticks (`` ` ``) with expression interpolation (`${expression}`) and multiline support.
- **`Date`**: `new Date()`, `.toDateString()`, `.toTimeString()`, `.toISOString()`.

---

## 🏋️ Problem-Solving Exercises

| Exercise Folder | Goal | Key Concept |
| :--- | :--- | :--- |
| **`15-ex-address`** | Create address with street, city, zipCode and a `showAddress(address)` function. | Object literal syntax and `for...in` traversal. |
| **`16-factory-constructor`** | Recreate address using both Factory and Constructor functions. | Comparing object initialization paradigms. |
| **`17-object-equal`** | Implement `areEqual(addr1, addr2)` and `areSame(addr1, addr2)`. | Property comparison vs `===` reference equality. |
| **`18-blog-post`** | Create a blog post object with title, body, author, views, comments, isLive. | Complex nested objects and array of objects. |
| **`19-constructor-func`** | Create a constructor for a draft blog post where comments start empty. | Constructor default values. |
| **`20-price-range`** | Design an array of price range objects (`$`, `$$`, `$$$`) with min/max budget per person. | UI data modeling for filters. |

---

## 🚀 How to Run

```bash
# Example: Run Object Equality exercise
node "Section5 Objects/17-object-equal/index.js"

# Example: Run Factory vs Constructor
node "Section5 Objects/16-factory-constructor/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Control Flow](../Section4%20Control%20Flow/README.md) | [Next Section: Arrays ➡️](../Section6%20Arrays/README.md)

