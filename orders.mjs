export function calculateTotal(items){

    const priceQuan =  items.map(item => item.price * item.quantity);

    if(priceQuan.length === 0) return 0;

    let total = 0;

    for(const number of priceQuan){
        total = total + number;
    }

    return total;
    
};

// const items = [
//   { name: "Mouse", price: 20, quantity: 2 },
//   { name: "Keyboard", price: 50, quantity: 1 },
//   { name: "Cable", price: 10, quantity: 3 }
// ];

// console.log(calculateTotal(items));