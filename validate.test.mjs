import { it, test } from 'node:test';
import { throws} from 'node:assert/strict';
import { validateItem } from './orders.mjs';
import { strictEqual } from 'node:assert';

const item = { name: "juice", price: 15.50, quantity:0};

test('item with valid name and price but quantity 0 throws Invalid quantity', () =>{
    throws(
        () => validateItem(item), RangeError
    );
});

const quantityCases = [
    {input: 0, expected: false, name: "quantity of 0 should throw RangeError"},
    {input: 1, expected: true , name: "quantity of 1 should return true"},
    {input: 100, expected: false , name: "quantity of 100 throw RangeError"},
    {input: 1.1, expected: false , name: "quantity of 1.1 throw RangeError"},
    {input: 99, expected: true , name: "quantity of 99 return true"}
];

const priceCases = [
    {input: 0, expected: false, name: "price of 0 throw RangeError"},
    {input: 0.1, expected: true , name: "price of 0.1 should return true"},
    {input: "1.00", expected: false , name: "price of numeric string throw RangeError"},
    {input: undefined, expected: false , name: "price of undefined throw RangeError"},
    {input: 0.01, expected:true, name: "price of 0.01 should return true"}
];

for( const quantityCase of quantityCases) {
    test(quantityCase.name, () => {
        const item = {name: "lighter", price: 5.00, quantity: quantityCase.input};
        if(quantityCase.expected === true){
            strictEqual(validateItem(item), true);
        }else{
            throws(() => validateItem(item), RangeError);
        }
    });
}

for( const priceCase of priceCases) {
    test(priceCase.name, () => {
        const item = {name: "lighter", price: priceCase.input, quantity: 2};
        if(priceCase.expected === true){
            strictEqual(validateItem(item), true);
        }else{
            throws(() => validateItem(item), RangeError);
        }
    });
}

