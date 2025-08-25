import {Component} from 'react'
import DetailPost from '../components/DetailPost'


export interface Post {
    id: number;
    title: string;
    contents: string;
    author: string;
}
interface State{
    posts: Post[];
}

export class Ex6_ListPost extends Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state=
            {
                posts:[
                    {id: 1, title: "Tại sao nên học React", contents: "Học React để đi làm", author: "David"},
                    {id: 2, title: "Ưu điểm của TypeScript", contents: "TS giúp code an toàn hơn", author: "Alice"},
                    {id: 3, title: "NodeJS là gì?", contents: "NodeJS giúp xây dựng backend với JS", author: "Bob"},
                    {id: 4, title: "CSS hiện đại", contents: "Flexbox và Grid giúp layout dễ dàng", author: "Emma"},
                    {id: 5, title: "Docker cơ bản", contents: "Docker giúp triển khai nhanh và tiện lợi", author: "John"}
                ]
            }

    }

    render(){
        return(
            <div>
                <DetailPost post={this.state.posts}/>
            </div>
        )
    }

}