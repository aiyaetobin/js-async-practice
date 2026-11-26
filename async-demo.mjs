// console.log("A");

const request = new Promise((resolve, reject) => {
    // console.log("B");

    setTimeout(() => {
        resolve("Success");
        // console.log("C");
    }, 100);
});

// console.log("D");
// console.log(request);

const result = await request;
// console.log("E:", result);

async function getOrderStatus(){
    const result = await request;
    return result;
};

console.log(getOrderStatus());
console.log(await getOrderStatus());

