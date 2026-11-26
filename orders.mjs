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


const orders = [
  {
    id: 1,
    items: [
      { name: "Mouse", price: 20, quantity: 2 },
      { name: "Keyboard", price: 50, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Monitor", price: 200, quantity: 1 }
    ]
  }
];

export function fetchOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const order = orders.find(order => order.id === id);
            if(order === undefined){
                reject(new Error("Order not found"));
            }else{
                resolve(order);
            }

        }, 100);
    });
};

export async function getOrderTotal(id){
    const order = await fetchOrder(id);
    return calculateTotal(order.items);
};

export async function fetchTwoSequential(idA, idB) {
    const resultOne = await fetchOrder(idA);
    const resultTwo = await fetchOrder(idB);

    return [resultOne, resultTwo];
};

export async function fetchTwoParallel(idA, idB) {
    const results = await Promise.all([
       fetchOrder(idA),
       fetchOrder(idB)
    ]);

    return results;
};