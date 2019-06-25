import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../App";

class NumberOneComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.history.push('/')}>
          <Text style={styles.title}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Page #1</Text>
      </View>
    )
  }
}

export default NumberOneComponent;
