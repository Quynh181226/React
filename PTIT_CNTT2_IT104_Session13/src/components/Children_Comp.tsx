type propsType={
    name?: string
}
export const Children_Comp=(prop: propsType)=>{
    return(
        <h3>Children: {prop.name}</h3>
    )
}