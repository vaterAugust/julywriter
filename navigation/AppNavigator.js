import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventList from '../screens/EventList'; 
import EventDetailsScreen from '../screens/EventDetailsScreen'; 
import AddEventScreen from '../screens/AddEventScreen'; 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventList">
        <Stack.Screen 
          name="EventList" 
          component={EventList} 
          options={{
            title: 'Главная',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="EventDetailsScreen"
          component={EventDetailsScreen} 
          options={{
            title: 'Подробности о событии',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="AddEventScreen"
          component={AddEventScreen}
          options={{
            title: 'Добавить событие',
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
