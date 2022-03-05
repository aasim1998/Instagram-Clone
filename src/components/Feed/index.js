import React from 'react';
import { FlatList } from 'react-native';
import Post from '../../components/Post'
import Stories from '../../components/Stories'

const data = [
    {
        user:{
            imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name:'Aasim'
        },
    
        imageUri:'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
        caption: 'Awesome City #Instagram',
        likesCount: 1234,
        postedAt: '10 minutes ago'
    
    },

    {
        user:{
            imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name:'Aasim'
        },
    
        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        caption: 'Awesome City #Instagram',
        likesCount: 1234,
        postedAt: '10 minutes ago'
    
    },

    {
        user:{
            imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name:'Aasim'
        },
    
        imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        caption: 'Awesome City #Instagram',
        likesCount: 1234,
        postedAt: '10 minutes ago'
    
    },

]

const Feed = () => (
    <FlatList
    data={data}
    renderItem={({item}) => <Post post={item}/>}
    ListHeaderComponent={Stories}
    />

)

export default Feed;