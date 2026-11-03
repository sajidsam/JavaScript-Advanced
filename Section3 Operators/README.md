# Section 3: Operators

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

This section explores JavaScript operators used to perform computations, manipulate variables, evaluate logic, and implement conditional branching.

---

## 📂 Section Structure

```text
Section3 Operators/
├── 01-arithmetic-operators/             # Math operations (+, -, *, /, %, **, ++, --)
├── 02-assignment-operators/             # Assignment & compound operators (=, +=, *=)
├── 03-comparison-operator/              # Relational comparison (>, >=, <, <=)
├── 04-equality-operators/               # Strict (===) vs Loose (==) equality
├── 05-ternary-operators/                # Conditional (ternary) operator
├── 06-logical-operators/                # Logical AND (&&), OR (||), and NOT (!)
├── 07-logical-operators-non-boolian/    # Falsy vs Truthy & short-circuit evaluation
├── 08-bitwise-operators/                # Bitwise operators (&, |) and permission masks
├── 09-operator-presidence/              # Order of operations & parentheses
├── 10-quiz/                             # Operator evaluation quiz & challenges
├── 11-swapping-values/                  # Exercise: Swapping two variables
└── README.md                            # Section documentation
```

---

## 📖 Subfolder Breakdown & Key Concepts

### [01-arithmetic-operators](./01-arithmetic-operators/)
- Standard math: addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), remainder (`%`), exponentiation (`**`).
- Increment and decrement operators:
  - Postfix (`x++` / `x--`): Returns value first, then increments/decrements.
  - Prefix (`++x` / `--x`): Increments/decrements first, then returns value.

### [02-assignment-operators](./02-assignment-operators/)
- Basic assignment: `x = 10`
- Compound assignment: `x += 5` (same as `x = x + 5`), `x *= 3`, etc.

### [03-comparison-operator](./03-comparison-operator/)
- Relational operators returning a boolean: `>` (greater than), `>=` (greater than or equal), `<` (less than), `<=` (less than or equal).

### [04-equality-operators](./04-equality-operators/)
- **Strict Equality (`===`, `!==`)**: Checks both **type** and **value** without type coercion (recommended best practice).
  ```javascript
  console.log(1 === 1);   // true
  console.log('1' === 1); // false
  ```
- **Loose Equality (`==`, `!=`)**: Converts operands to matching types before comparing (type coercion).
  ```javascript
  console.log('1' == 1);  // true
  ```

### [05-ternary-operators](./05-ternary-operators/)
- Shorthand for conditional branching:
  ```javascript
  let points = 110;
  let type = points > 100 ? 'gold' : 'silver';
  ```

### [06-logical-operators](./06-logical-operators/)
- **Logical AND (`&&`)**: Returns `true` if **both** operands are `true`.
- **Logical OR (`||`)**: Returns `true` if **at least one** operand is `true`.
- **Logical NOT (`!`)**: Inverts boolean state.

### [07-logical-operators-non-boolian](./07-logical-operators-non-boolian/)
- **Falsy Values**: `undefined`, `null`, `0`, `false`, `''` (empty string), `NaN`.
- **Truthy Values**: Anything that is not Falsy (numbers other than 0, non-empty strings, objects, arrays).
- **Short-Circuit Evaluation**: Evaluation stops as soon as the result is determined:
  ```javascript
  let userColor = undefined;
  let defaultColor = 'blue';
  let currentColor = userColor || defaultColor; // 'blue'
  ```

### [08-bitwise-operators](./08-bitwise-operators/)
- Operating on 32-bit binary representations:
  - Bitwise AND (`&`): Sets bit to 1 if both bits are 1.
  - Bitwise OR (`|`): Sets bit to 1 if either bit is 1.
- Practical application: **Permission Access Control (Bitmasking)**:
  ```javascript
  const readPermission = 4;   // 00000100
  const writePermission = 2;  // 00000010
  const executePermission = 1;// 00000001

  let myPermission = 0;
  myPermission = myPermission | readPermission | writePermission;
  let message = (myPermission & readPermission) ? 'yes' : 'no'; // 'yes'
  ```

### [09-operator-presidence](./09-operator-presidence/)
- Multiplication and division precede addition and subtraction.
- Use parentheses `(...)` to explicitly group operations.

### [10-quiz](./10-quiz/)
- Interactive practice examining unexpected comparisons and evaluation order.

### [11-swapping-values](./11-swapping-values/) *(Exercise)*
- **Problem**: Swap values of `a = 'red'` and `b = 'blue'`.
- **Solution**:
  ```javascript
  let a = 'red';
  let b = 'blue';

  let c = a;
  a = b;
  b = c;

  console.log(a); // 'blue'
  console.log(b); // 'red'
  ```

---

## 🚀 How to Run

```bash
# Example: Run Bitwise operators
node "Section3 Operators/08-bitwise-operators/index.js"

# Example: Run Swapping values exercise
node "Section3 Operators/11-swapping-values/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Previous: Basics](../Section2%20Basics/README.md) | [Next Section: Control Flow ➡️](../Section4%20Control%20Flow/README.md)

