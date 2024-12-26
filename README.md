# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.  The algorithm appears to work correctly for many inputs, but fails in specific cases.  The bug is explained and a corrected solution is provided.

## Bug Description
The provided JavaScript function `foo` uses recursion to compute the GCD. While it functions correctly in many instances, it produces incorrect results for certain input pairs (e.g., (10, 4)).  This is due to a flaw in how the recursion handles certain number combinations.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the script. Observe the incorrect output for several test cases.

## Solution
The solution addresses the flaw in the recursion logic.  The corrected code, found in `bugSolution.js`, handles all cases correctly.