type propsType={
    id: number
    name: string
    price: number
    quantity:number
}
export const ChildrenC=(prop: propsType)=>{
    return(
        <h3>Children:
            <span>{prop.id} {prop.name} {prop.price} {prop.quantity}</span>
        </h3>
    )
}