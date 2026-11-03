# Section 6: Arrays

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section provides comprehensive coverage of JavaScript arrays: mutation operations (adding, removing, emptying), searching (primitives vs reference types), iteration, transformation methods (`filter`, `map`, `reduce`), sorting, and practical algorithmic exercises.

---

## 📂 Section Structure

```text
Section6 Arrays/
├── 01-adding/                   # Appending (push), prepending (unshift), inserting (splice)
├── 02-find-element/             # Finding primitive elements (indexOf, lastIndexOf, includes)
├── 03-find-el-ref/              # Finding reference types using find() and findIndex()
├── 04-arrow-func/               # ES6 arrow functions in array callbacks
├── 05-rmv-elements/             # Removing elements (pop, shift, splice)
├── 06-emptying-array/           # 4 approaches to emptying an array
├── 07-combine-slice/            # Combining (concat) and slicing arrays
├── 08-spread-operator/          # Spread operator for combining and cloning arrays
├── 09-iterate-array/            # Iterating with for-of and forEach
├── 10-join-array/               # Converting arrays to strings (join) and slug generation (split)
├── 11-sorting-array/            # Sorting primitives and objects (sort, reverse)
├── 12-test-element-array/       # Testing criteria with every() and some()
├── 13-filter-array/             # Filtering elements matching criteria
├── 14-map-array/                # Mapping and method chaining
├── 15-ary-from-range/           # [Exercise] Generating an array between min and max
├── 17-includes/                 # [Exercise] Custom includes() implementation
├── 18-except/                   # [Exercise] Excluding specific values from an array
├── 19-move-element/             # [Exercise] Moving an element by offset index
├── 20-count-occurences/         # [Exercise] Counting occurrences using reduce()
├── 21-getmax/                   # [Exercise] Finding maximum value using reduce()
├── 22-movies/                   # [Exercise] Filter, sort, and map a collection of movies
└── README.md                    # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Operations

### 1. Adding & Removing Elements
| Operation | Beginning | Middle | End |
| :--- | :--- | :--- | :--- |
| **Add** | `numbers.unshift(1, 2)` | `numbers.splice(index, 0, 'a')` | `numbers.push(5, 6)` |
| **Remove** | `numbers.shift()` | `numbers.splice(index, 1)` | `numbers.pop()` |

### 2. Searching
- **Primitives**:
  ```javascript
  numbers.indexOf(1);       // Index or -1
  numbers.lastIndexOf(1);   // Last occurrence index
  numbers.includes(1);      // true or false
  ```
- **Reference Types** (requires predicate callback):
  ```javascript
  const course = courses.find(c => c.name === 'a');
  const index = courses.findIndex(c => c.name === 'a');
  ```

### 3. Combining & Slicing
- `concat()`: `const combined = first.concat(second);`
- **Spread Operator**: `const combined = [...first, 'middle', ...second];`
- `slice()`: `const slice = combined.slice(start, end);` (shallow copy)

### 4. Transformation & Higher-Order Methods
- **`filter()`**: Returns a new array with elements that pass the test:
  ```javascript
  const filtered = numbers.filter(n => n >= 0);
  ```
- **`map()`**: Transforms each element and returns a new array:
  ```javascript
  const items = filtered.map(n => ({ value: n }));
  ```
- **`reduce()`**: Reduces an array to a single value (sum, accumulator, max):
  ```javascript
  const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  ```

---

## 🏋️ Problem-Solving Exercises

| Exercise Folder | Goal | Technique |
| :--- | :--- | :--- |
| **`15-ary-from-range`** | Generate an array `[min, ..., max]`. | `for` loop pushing values to an array. |
| **`17-includes`** | Implement `includes(array, searchElement)`. | Linear search traversal. |
| **`18-except`** | Return array without elements listed in excluded array. | `filter()` or `for...of` with `!excluded.includes()`. |
| **`19-move-element`** | Shift element at `index` by `offset` positions. | Array copying, `splice()`, and boundary error validation. |
| **`20-count-occurences`** | Count how many times an element appears in array. | `.reduce()` with conditional accumulator. |
| **`21-getmax`** | Return largest number from an array. | `.reduce((a, b) => (a > b) ? a : b)`. |
| **`22-movies`** | Given movies in 2018 with rating > 4, sort descending by rating, display title. | Method chaining (`filter().sort().map()`). |

---

## 🚀 How to Run

```bash
# Example: Run Movies chaining exercise
node "Section6 Arrays/22-movies/index.js"

# Example: Run Count Occurrences exercise
node "Section6 Arrays/20-count-occurences/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Objects](../Section5%20Objects/README.md) | [Next Section: Functions ➡️](../Section7%20Functions/README.md)

