import React, {useState} from "react";
import NewPostForm from "./NewPostForm/NewPostForm";
import PostList from "./PostList/PostList";
import s from "./UserPostsPage.module.css";
import { IPost } from "./interfece";



const UserPostsPage: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <div className={s.wrappe}>
      <NewPostForm setPosts={setPosts}/>
      <PostList setPosts={setPosts} posts={posts}/>
    </div>
  );
};

export default UserPostsPage;
