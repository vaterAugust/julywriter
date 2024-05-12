import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const EventDetailsScreen = () => {
  const route = useRoute();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.eventImage} source={{ uri: 'http://placehold.it/200x200' }} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventName}>{event.title}</Text>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <Text style={styles.eventPrice}>Цена: {event.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  eventDetails: {
    alignItems: 'center',
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default EventDetailsScreen;
