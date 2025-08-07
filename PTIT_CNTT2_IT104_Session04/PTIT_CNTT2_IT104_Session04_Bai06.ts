interface Product{
    // id: string
    name: string
    price: number
    category: {
        // id: string
        name: string
    }
    discount?: number
}
const listProducts: Product[] = [
    {
        // id: "N01",
        name: "quần1",
        price: 150000,
        category:{
            // id: 'C01',
            name: 'fashion'
        },
        discount: 10
    },
    {
        // id: 'N02',
        name: "quần2",
        price: 750000,
        category:{
            // id: 'C02',
            name: 'fashion'
        }
    },
    {
        // id: "N03",
        name: "quần3",
        price: 450000,
        category:{
            // id: 'C03',
            name: 'fashion'
        },
        discount: 5
    }
]
//price final after dis
const getPrice=(item: Product): number=>{
    if(item.discount!==undefined){
        return item.price*(1-item.discount/100)
    }
    return item.price
}
const print=(item: Product): void => {
    console.log(`1. Sp: ${item.name}\n2. initPrice: ${item.price} VND`)
    if(item.discount!==undefined){
        console.log(`3. finalPrice: ${getPrice(item)} VND`)
    }else {
        console.log(`3. Not dis`)
    }
    console.log(`4. Cate: ${item.category.name}\n`)
}
listProducts.forEach(print)