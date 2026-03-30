# String Calculator

> **Before you start:**
> - Try not to read ahead.
> - Do one task at a time. The trick is to learn to work incrementally.
> - Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.

---

## Step 1: Simple Addition

Create a simple String calculator with a method signature:

```
int Add(string numbers)
```

The method can take up to two numbers, separated by commas, and will return their sum.
For example `""` or `"1"` or `"1,2"` as inputs.
(For an empty string it will return 0.)

**Hints:**
- Start with the simplest test case of an empty string and move to one and two numbers
- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
- Remember to refactor after each passing test

---


## Step 2: Negative Numbers

Calling Add with a negative number will throw an exception `"negatives not allowed"` — and the negative that was passed.

If there are multiple negatives, show all of them in the exception message.

---

## Step 3: Ignore Large Numbers

Numbers bigger than 1000 should be ignored, so adding `2 + 1001 = 2`.

---

## Step 4: New Line Delimiter

Allow the Add method to handle new lines between numbers (instead of commas).

- The following input is ok: `"1\n2,3"` (will equal 6)
- The following input is NOT ok: `"1,\n"` (no need to prove it — just clarifying)

---

## Step 5: Custom Delimiters

Support different delimiters. To change a delimiter, the beginning of the string will contain a separate line that looks like this:

```
"//[delimiter]\n[numbers…]"
```

For example `"//;\n1;2"` should return 3, where the default delimiter is `;`.

The first line is optional. All existing scenarios should still be supported.

---

## Step 6: Long Delimiters

Delimiters can be of any length with the following format:

```
"//[delimiter]\n"
```

For example: `"//[***]\n1***2***3"` should return 6.

---

## Step 7: Multiple Delimiters

Allow multiple delimiters like this:

```
"//[delim1][delim2]\n"
```

For example `"//[*][%]\n1*2%3"` should return 6.

Make sure you can also handle multiple delimiters with length longer than one char.
