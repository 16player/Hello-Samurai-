import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="25"/>
                <Post message="It's my first post" likesCount="10"/>
            </div>
        </div>)
}

export default MyPosts;