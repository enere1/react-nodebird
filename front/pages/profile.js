import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import FollowList from '../components/FollowList'
import NicknameEditForm from '../components/NicknameEditForm'

const profile = () => {
    
    const followingList = [{nickname : "zeroCho" , },{nickname : "yui" , },{nickname : "sungon" ,}]
    const followerList = [{nickname : "sunghyun" , },{nickname : "park" , },{nickname : "hani" ,}]

    return (
       <> 
        <Head>
            <title>프로필</title>
        </Head>
        <AppLayout>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
       </>
    )
}

export default profile;