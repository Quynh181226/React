import { DetailPost } from "../components/DetailPost";
import {useState} from "react";
type postType = {
    id:number,
    title:string,
    content:string,
    author:string
}
export const Ex6_ListPost = () => {
    const [posts] = useState<postType[]>([
        {
            id: 1,
            title: "You and me",
            content: "Vé rì vé rì",
            author: "David",
        },
        {
            id: 2,
            title: "Toco",
            content: "Tocotoco",
            author: "Yohya",
        },
        {
            id: 3,
            title: "University",
            content: "Good",
            author: "Minmin",
        },
    ])
    return (
        <>
            {
                posts.map(post =>{
                    return (
                        <DetailPost {...post}/>
                    )
                })
            }
        </>

    )
}