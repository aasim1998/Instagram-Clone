import React from 'react';
import {FlatList} from 'react-native';
import Story from '../story';
import styles from './styles'

const data = [
    {

        imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name:'Aasim',
    },

    {

        imageUri:'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
        name:'Malik',
    },

    {

        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        name:'Adarsh',
    },

    {

        imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name:'Pandey',
    },
    {

        imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name:'Abhishek',
    },

    {

        imageUri:'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
        name:'Chauhan',
    },

    {

        imageUri:'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
        name:'Alex',
    },

    {

        imageUri:'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name:'Haley',
    },
]

    
    
    

    

const Stories = () => (
    <FlatList
    data={data}
    showsHorizontalScrollIndicator={false}
    keyExtractor={({name})=> name}
    horizontal
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
    />
       
)

export default Stories; 
