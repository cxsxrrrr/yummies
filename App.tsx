// App.tsx
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tab';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            switch (route.name) {
              case 'Live Chat':
                iconName = 'chatbubbles';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              case 'Home':
                iconName = 'home';
                break;
              case 'Menu':
                iconName = 'restaurant';
                break;
              case 'Favorites':
                iconName = 'heart';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F97316',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Live Chat" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
