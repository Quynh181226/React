const products=[
    {
        name: "A",
        price: 100,
        discount: 0.1,
        quantity: 2
    },
    {
        name: "B",
        price: 200,
        discount: 0.2,
        quantity: 1,
        bulkDiscount: {
            minQuantity: 2,
            extraDiscount: 0.05
        }
    },
    {
        name: "C",
        price: 300,
        discount: 0,
        quantity: 3,
        bulkDiscount: {
            minQuantity: 3,
            extraDiscount: 0.1
        }
    }
]
//total price before dis
const beforeDis=(products)=>{
    let total=0
    for(let i=0; i<products.length; i++){
        total+=products[i].price*products[i].quantity
    }
    return total
}
//total price after dis
const afterDis=(products)=>{
    let total=0
    for(let i=0; i<products.length; i++){
        let dis=products[i].discount
        if(products[i].bulkDiscount && products[i].quantity >= products[i].bulkDiscount.minQuantity){
            dis+=products[i].bulkDiscount.extraDiscount
        }
        const finalPrice=products[i].price*(1-dis)
        total+=finalPrice*products[i].quantity
    }
    return total
}
//price final for 1 item
const getPrice=(item)=>{
    let dis=item.discount
    if(item.bulkDiscount && item.quantity>=item.bulkDiscount.minQuantity){
        dis+=item.bulkDiscount.extraDiscount
    }
    return item.price*(1-dis)
}
//total price for 1 item (include slg)
const getPriceFinal=(item)=>{
    let dis=item.discount
    if(item.bulkDiscount && item.quantity>=item.bulkDiscount.minQuantity){
        dis+=item.bulkDiscount.extraDiscount
    }
    const finalPrice=item.price*(1-dis)
    return finalPrice*item.quantity
}
//print order infor
const getOrder=(products)=>{
    const detail= {
        totalBeforeDis: beforeDis(products),
        totalAfterDis: afterDis(products),
        detailsProduct: [
            {
                name: products[0].name,
                finalPrice: getPrice(products[0]),
                quantity: products[0].quantity,
                subtotal: getPriceFinal(products[0])
            },
            {
                name: products[1].name,
                finalPrice: getPrice(products[1]),
                quantity: products[1].quantity,
                subtotal: getPriceFinal(products[1])
            },
            {
                name: products[2].name,
                finalPrice: getPrice(products[2]),
                quantity: products[2].quantity,
                subtotal: getPriceFinal(products[2])
            },
        ]
    }
    return detail
}
console.log(getOrder(products))s