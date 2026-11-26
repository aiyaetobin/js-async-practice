# Debugging Report

## Bug 1: fetchOrder returns the correct order object

### Symptom
it failed with the message "Values have same structure but are not reference-equal"

### Root cause
It failed because it was using strictEqual() and not deepStrictEqual(). strictEquals() compares objects and arrays by reference ie if they point to the same spot in memory so two objects with identical contents fail. deepStrictEqual() compares the actual properties of the objects

### Fix
I changed strictEqual() to deepStrictEqual()

### How I verified the fix
node --test and the tests showed it was passed

## Bug 2: getOrderTotal returns 90 for order 1

### Symptom

it showed the expected vs actual and the actual showed a pending promise

### Root cause

it was missing an await before calling the function being tested. when getOrderTotal was called, it called fetchOrder which times out for 100 ms. since the call didnt have await it just returned a pending promise automatically instead of waiting for fetchOrder to resolve.

### Fix

I added await

### How I verified the fix

node --test test was passed