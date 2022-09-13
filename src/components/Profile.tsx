import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img alt=''
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLDCsQbyInk-C5TZAlgwKO34mFlMOSssLw&usqp=CAU'/>
        </div>
        <div >
            ava + description
        </div>
        <div >
            My posts
        </div>
        <div >
            New post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                Post 1
            </div>
            <div className={s.item}>
                Post2
            </div>
        </div>
    </div>
}

export default Profile;