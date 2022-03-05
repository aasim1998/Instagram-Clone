import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {View , Text } from 'react-native';
//import styles from '../ProfilePicture/styles';
import styles from './styles';
const Story = ({imageUri , name}) => (
    <View style={styles.container}>
        <ProfilePicture uri={imageUri}/>
        <Text style={styles.name}>{name}</Text>

    </View>


)

export default Story;