# Sequential vs. Promise.all
## Original Timing Predictions
200 sequential and 100 ms parallel

## Actual Measurements
209 ms sequential 103 ms parallel

## Why promise.all was faster
Promise.all was faster because instead of having to wait for the first to finish to being the other it runs them asynchronously and they can start at the same time. So the time it took for both was the time of the slower function call.

# why assert.equal(elapsed, 100) is flaky
because of a multitude of differing factors when you call the functions their time can vary slightly. checking return order is more reliable than execution time because we when promise.all is called there is a proper expected execution order so we can test that against what was actually returned


| Property | Equivalence class | Valid or invalid? | Representative test values | Why? |
|---|---|---|---|---|
| Quantity | Below minimum | Invalid | 0 | Immediately below lower boundary |
| Quantity | Minimum | Valid | 1 | Minimum value |
| Quantity | Minimum | Valid | 2 | Immediately above Minimum value |
| Quantity | Max | Valid | 98 | Immediately below upper boundary |
| Quantity | Max | Valid | 99 | Max value |
| Quantity | Above Max | Invalid | 100 | Immediately above upper boundary |
| Quantity | !isInteger() | Invalid | 1.1 | Not an Integer |
| Quantity | numeric string | Invalid | "1" | Not an Integer |
| Quantity | undefined | Invalid | undefined | Not an Integer |
| Price | Boundary | Invalid | 0 | lower boundary |
| Price | Boundary | Invalid | -1.00 | below lower boundary |
| Price |  above boundary | valid | .01 | representative value above boundary |
| Price | numeric string | Invalid | "1.00" | Not a number | 
| Price | NaN | Invalid | NaN | not a number |
| Price | Undefined | Invalid | undefined | not a number |

# MUTATION LOG

mutation: item.quantity < 99 instead of item.quantity <= 99
the mutant was killed
the failing test was "quantity of 99 return true"
R = test passed 99 to the mutated validation condition
I = changed comparison classified 99 as invalid
P = threw a rangeerror instead of returning true
R = strictEqual expected true so the test failed

mutation: removed int check from quantity
mutant was killed
failing test "quantity 1.1 throw rangeerror"

| Condition | explanation |
|---|---|
| Reachability | The test passed 1.1 into the mutated condition. |
| Infection	| Without the integer check, 1.1 was incorrectly considered valid |
| Propagation	| The function returned true instead of throwing.	|
| Revealability	| assert.throws expected a RangeError, so the test failed.	|

mutation: price > 0 changed to price > 0.01
mutant was killed
failing test "price 0.01 should return true"

Reachability	The test passed 0.01 into the mutated price validation.	
Infection	The invalid-price condition evaluated to true when it should have been false
Propagation	The function threw RangeError instead of returning true.	
Revealability	Your strictEqual assertion expected true, causing the test to fail.	
