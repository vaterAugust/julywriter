import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getEvents } from '../services/eventStorage';
import styles from '../styles/styles';
import EventListItem from '../components/EventListItem';

const EventList = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Ошибка при получении событий:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleAddEventPage = () => {
    navigation.navigate('AddEventScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>События</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddEventPage}>
          <Text style={styles.buttonText}>Добавить событие</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        events.map((event, index) => (
          <EventListItem
            key={index}
            eventName={event.title}
            eventDescription={event.description}
            eventPrice={event.price}
          />
        ))
      )}

    </ScrollView>
  );
}

export default EventList;
