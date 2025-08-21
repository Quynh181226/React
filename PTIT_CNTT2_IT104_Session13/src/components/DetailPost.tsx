type PropType = {
    id:number,
    title:string,
    content:string,
    author:string
}
export const DetailPost = (prop:PropType) => {
    return (
        <div style={{display:"flex", flexDirection:"column", width: "15%", borderBottom:"1px solid gray", paddingBottom: "1rem", paddingTop: "1rem"}}>
            <h4>ID: {prop.id}</h4>
            <h4>Title: {prop.title}</h4>
            <h4>Content: {prop.content}</h4>
            <h4>Author: {prop.author}</h4>
        </div>
    )
}