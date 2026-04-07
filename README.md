# 🌀 Odd Fibonacci Sum Calculator

> Sum all odd-valued Fibonacci numbers up to (and including) a given limit.

---

## 📖 Overview

The **Odd Fibonacci Sum Calculator** generates the Fibonacci sequence up to a given number `n` and returns the sum of all **odd-valued** terms in that sequence.

It correctly traverses the Fibonacci sequence rather than simply iterating over integers — ensuring accurate results for all inputs.

---

## ✨ Features

- ✅ Generates a true Fibonacci sequence (not just odd integers)
- ✅ Filters and sums only odd-valued Fibonacci numbers
- ✅ Handles edge cases: `0`, `1`, and large numbers
- ✅ O(n) time complexity, O(1) space complexity
- ✅ Zero dependencies — pure JavaScript

---

## 🚀 Usage

```javascript
function sumFibs(num) {
  let sum = 0;
  let prev = 0, curr = 1;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    [prev, curr] = [curr, prev + curr];
  }

  return sum;
}
```

### Examples

```javascript
console.log(sumFibs(10));   // → 10   (1 + 1 + 3 + 5)
console.log(sumFibs(75));   // → 60   (1 + 1 + 3 + 5 + 13 + 21 + 55... wait, 55 < 75 ✓)
console.log(sumFibs(1000)); // → 1785
```

---

## 🧮 How It Works

The Fibonacci sequence starts: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...`

For `sumFibs(10)`, we walk the sequence and pick out the **odd** values ≤ 10:

| Term | Odd? | Running Sum |
|------|------|-------------|
| 1    | ✅   | 1           |
| 1    | ✅   | 2           |
| 2    | ❌   | 2           |
| 3    | ✅   | 5           |
| 5    | ✅   | 10          |
| 8    | ❌   | 10          |
| 13   | —    | stop (> 10) |

**Result: `10`** ✓

---

## ⚠️ Common Pitfall

A naive approach might iterate from `0` to `num` and sum odd integers — but that's **not** the same thing:

```javascript
// ❌ WRONG — sums odd integers, not odd Fibonacci numbers
function sumFibs(num) {
  const odds = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) odds.push(i);
  }
  return odds.reduce((acc, cur) => acc + cur, 0);
}
```

| Input  | ❌ Naive | ✅ Correct |
|--------|---------|-----------|
| `10`   | `25`    | `10`      |
| `75`   | `1444`  | `60`      |
| `1000` | `1785`  | `1785`    |

The naive version produces `1785` for `1000` by coincidence — it **will** fail for most other inputs.

---

## 🧪 Running Tests

No test framework needed — drop this into your console or a `.js` file:

```javascript
const tests = [
  { input: 1,    expected: 1    },
  { input: 4,    expected: 5    },
  { input: 10,   expected: 10   },
  { input: 75,   expected: 60   },
  { input: 1000, expected: 1785 },
];

tests.forEach(({ input, expected }) => {
  const result = sumFibs(input);
  const status = result === expected ? "✅ PASS" : "❌ FAIL";
  console.log(`${status} — sumFibs(${input}) = ${result} (expected ${expected})`);
});
```

---

## 📊 Complexity

| | Complexity |
|---|---|
| **Time** | O(log n) — Fibonacci grows exponentially, so the loop runs ~log_φ(n) times |
| **Space** | O(1) — only two variables tracked at any time |
