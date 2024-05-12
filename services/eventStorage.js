import AsyncStorage from '@react-native-async-storage/async-storage';

export const getEvents = async () => {
  try {
    const events = await AsyncStorage.getItem('events');
    return events ? JSON.parse(events) : [];
  } catch (error) {
    console.error('Ошибка при получении событий:', error);
    return [];
  }
};

export const addEvent = async (event) => {
  try {
    // Retrieve the current events array
    let events = await getEvents();
    // Add the new event to the array
    events = [...events, event];
    // Update AsyncStorage with the updated events array
    await AsyncStorage.setItem('events', JSON.stringify(events));
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error('Ошибка при добавлении события:', error);
    // Return false to indicate failure
    return false;
  }
};

export const deleteEvent = async (eventIndex) => {
  try {
    // Retrieve the current events array
    let events = await getEvents();
    // Remove the event at the specified index from the array
    events.splice(eventIndex, 1);
    // Update AsyncStorage with the updated events array
    await AsyncStorage.setItem('events', JSON.stringify(events));
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error('Ошибка при удалении события:', error);
    // Return false to indicate failure
    return false;
  }
};
