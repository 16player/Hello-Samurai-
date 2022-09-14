import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img alt=''
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLDCsQbyInk-C5TZAlgwKO34mFlMOSssLw&usqp=CAU'/>
        </div>
       <div>
           <MyPosts/>
       </div>
    </div>
}

export default Profile;