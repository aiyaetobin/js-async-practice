import { fetchOrder } from './orders.mjs';

// const order = fetchOrder(1);

// console.log(order);
// console.log(order.id);

try{
    const order = await fetchOrder(99);
    console.log(order);
}catch(error){
    console.log(error.message);
};