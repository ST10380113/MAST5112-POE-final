import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App';

const Stack = createStackNavigator();

const BookHistory = ({ route }) => {
  const bookHistory = route.params.bookHistory;

  const lastThreeBooks = bookHistory.slice(-3);

  return (
    <View>
      <Text>Last 3 Books Entered:</Text>
      {lastThreeBooks.map((book, index) => (
        <View key={index}>
          <Text>Title: {book.title}</Text>
          <Text>Author: {book.author}</Text>
          <Text>Genre: {book.genre}</Text>
          <Text>Pages: {book.pages}</Text>
        </View>
      ))}
    </View>
  );
};

const App = () => {
  //the side navigation bar is set to be closed as a default
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const bookHistory = [
    { title: '', author: '', genre: 'Genre', pages: 0 },
    { title: '', author: '', genre: 'Genre', pages: 0 },
    { title: '', author: '', genre: 'Genre', pages: 0 },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* a navigation parameter is being used to pass array */}
        <Stack.Screen
          name="History Page"
          component={BookHistory}
          initialParams={{ bookHistory }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};