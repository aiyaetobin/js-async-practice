import { test } from 'node:test';
import { strictEqual } from 'node:assert/strict';
import { fetchOrder, getOrderTotal, calculateTotal } from './orders.mjs';
import { deepStrictEqual } from 'node:assert';

test('single item total should be 40', () => {
    const items = [{ name: 'Mouse', price: 20, quantity: 2 }];
    const total = calculateTotal(items);
    strictEqual(total, 40);
});

test('fetchOrder returns the correct order object', async () => {
    const actual = await fetchOrder(2);
    const expected = {
        id: 2,
        items: [
            { name: 'Monitor', price: 200, quantity: 1 }
        ]
    };
    deepStrictEqual(actual, expected);
});

test('getOrderTotal returns 90 for order 1', async () => {
    const total = await getOrderTotal(1);
    strictEqual(total, 90);
});