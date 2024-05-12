import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const EventListItem = ({ eventName, eventDescription, eventPrice }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('EventDetailsScreen', { event: { title: eventName, description: eventDescription, price: eventPrice } });
    };

    return (
        <TouchableOpacity style={styles.eventItem} onPress={handlePress}>
            <Image style={styles.eventImage} source={{ uri: 'http://placehold.it/60x80' }} />
            <View style={styles.eventDetails}>
                <Text style={styles.eventName}>{eventName}</Text>
                <Text style={styles.eventDescription}>{eventDescription}</Text>
                <Text style={styles.eventPrice}>Цена: {eventPrice}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default EventListItem;
