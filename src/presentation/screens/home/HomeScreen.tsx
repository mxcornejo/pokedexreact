import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    );
  }
}
