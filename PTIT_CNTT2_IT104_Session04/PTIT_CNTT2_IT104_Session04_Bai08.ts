interface product{
    readonly id: string,
    name: string,
    price: number
}
interface orderItem{
    product: product,
    quantity: number
}
interface order{
    orderId: string,
    customerName: string,
    items: orderItem[],
    note?: string
}
let item: order={
    orderId: 'D01',
    customerName: 'Ngan',
    items: [
        {
            product: {
                id: 'T01',
                name: 'ao',
                price: 100
            },
            quantity: 2
        },
        {
            product: {
                id: 'T02',
                name: 'quan',
                price: 150
            },
            quantity: 4
        },
        {
            product: {
                id: 'T06',
                name: 'vay',
                price: 250
            },
            quantity: 2
        }
    ],
    note: 'giao trong cong 10h'
}
const calculateOrderTotal=(item: order)=>{
    let total = 0
    for (let i of item.items) {
        total+=(i.product.price * i.quantity)
    }
    return total
}
const printOrder=(item: order)=>{
    console.log(`Order: ${item.orderId}\nCustomer: ${item.customerName}\nProduct: `)
    let i=1
    for (let j of item.items) {
        console.log(`- ${j.product.name}*${j.quantity}->${j.quantity*j.product.price} VND`)
        i++
    }
    console.log(`Total price: ${calculateOrderTotal(item)}`)
    if(item.note) console.log(`Note: ${item.note}`)
}
printOrder(item)