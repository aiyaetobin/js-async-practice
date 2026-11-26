import { it, test } from 'node:test';
import { strictEqual } from 'node:assert/strict';
import { calculateTotal } from './orders.mjs';

test('calculateTotal adds item totals correctly', () => {
    // Arrange: Create your items array
    const items = [{ name: "Mouse", price: 20, quantity: 2 },{ name: "Keyboard", price: 50, quantity: 1 },{ name: "Cable", price: 10, quantity: 3 }];
    // Act: Call calculateTotal and save the result
    const result = calculateTotal(items);
    // Assert: Use strictEqual to check the result
    strictEqual(result, 120);
});

test('calculateTotal returns 0 with empty array', () => {

    const items = [];
    const result = calculateTotal(items);
    strictEqual(result, 0);

});