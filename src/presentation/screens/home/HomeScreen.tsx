import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text variant="headlineLarge"> HomeScreen </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    );
  }
}
