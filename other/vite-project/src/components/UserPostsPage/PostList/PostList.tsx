import React, { useEffect} from 'react'
import { IPost } from '../interfece'
import { axiosPublic } from '../../../axios/axiosPublic'
import s from "./PostList.module.css"

type PostListProps = {
  setPosts: (posts: IPost[])=> void,
  posts: IPost[]
}
const PostList:React.FC<PostListProps> = ({setPosts, posts}) => {

  useEffect(()=>{
    const idUser = localStorage.getItem("idUser")
    axiosPublic.get(`https://dummyjson.com/posts/${idUser}`)
    .then(({data})=> setPosts([data]))
  }, [])    

  return (
    <div className={s.list}>
      { posts?.map(item => (
        <div className={s.post} key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList