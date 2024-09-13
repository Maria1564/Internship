import React from 'react'
import NewPostForm from './NewPostForm/NewPostForm'
import PostList from './PostList/PostList'
import s from "./UserPostsPage.module.css"

const UserPostsPage: React.FC = () => {
  return (
    <div className={s.wrappe}>
        <NewPostForm/>
        <PostList/>
    </div>
  )
}

export default UserPostsPage