import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addEvent } from '../services/eventStorage';
import styles from '../styles/styles';

const AddEventScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const navigation = useNavigation();

  const handleAddEvent = async () => {
    try {
      if (!title || !description || !date || !time || !price) {
        console.error('Ошибка: Не все поля заполнены');
        return;
      }

      const event = {
        title,
        description,
        date,
        time,
        price,
      };

      const success = await addEvent(event);
      if (success) {
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
        setPrice('');
        navigation.navigate('EventList');
      } else {
        console.error('Ошибка при сохранении события');
      }
    } catch (error) {
      console.error('Ошибка сохранения данных:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Название события"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Описание"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Дата"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Время"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Цена билета"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Добавить событие" onPress={handleAddEvent} />
    </View>
  );
};

export default AddEventScreen;
