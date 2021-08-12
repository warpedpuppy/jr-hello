import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>hello world</Text>
      </View>
    );
  }
}
