const productList = [
    {name:"bun", instock:true, price:100},
    {name:"milk", instock:false, price:200},
    {name:"agg", instock:true, price:300},
    {name:"bread", instock:false, price:400},
    {name:"butter", instock:true, price:500},
];

console.log(productList);

// let inStockProducts = productList.filter(
//     function(product){
//         return product.instock == true;
//         //return producFilter(product);
//     }  
// );

let inStockProducts = productList.filter(product => product.instock == true);

// function producFilter(product){
//     return product.instock == true;
// }

console.log(inStockProducts);