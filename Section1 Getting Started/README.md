# Section 1: Getting Started

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

Welcome to **Section 1: Getting Started**. This section introduces the core fundamentals of what JavaScript is, how it runs in modern browsers and runtimes, and how to set up your development environment.

---

## 📂 Section Structure

```text
Section1 Getting Started/
├── index.html    # HTML shell linking the external JavaScript file
├── index.js      # First JavaScript script (Hello World)
└── README.md     # Section documentation
```

---

## 🎯 Concepts Covered

### 1. What is JavaScript?
- JavaScript is a lightweight, interpreted (or JIT-compiled), first-class programming language primarily known as the scripting language for web pages.
- It enables dynamic interactivity, asynchronous communication, and client-side logic.

### 2. JavaScript Engine & Runtime
- **Browser Engines**: Chrome (V8), Firefox (SpiderMonkey), Safari (JavaScriptCore).
- **Node.js**: A runtime environment built on Chrome's V8 engine allowing JavaScript execution outside the browser (e.g., terminal, backend servers).

### 3. Separation of Concerns
Rather than embedding inline JavaScript inside HTML tags (`<script>...</script>`), best practice is to separate markup and behavior:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Getting Started</title>
</head>
<body>
    <h1>Hello World</h1>
    <!-- External script placed at the bottom of the body -->
    <script src="index.js"></script>
</body>
</html>
```

### 4. Running Your First Script
In `index.js`:
```javascript
// This is my first JavaScript Code 
console.log('Hello World');
```

---

## 🚀 How to Run

### In the Browser (Live Server)
1. Open this directory in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. Press `F12` or `Ctrl + Shift + I` to open Developer Tools and select the **Console** tab.
4. You should see `Hello World` logged to the console.

### In Node.js
Run directly from terminal:
```bash
node "Section1 Getting Started/index.js"
```

---

[⬅️ Back to Main README](../README.md) | [Next Section: Section 2 - Basics ➡️](../Section2%20Basics/README.md)

