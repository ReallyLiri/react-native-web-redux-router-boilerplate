import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../App'

class HomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <TouchableOpacity
          onPress={() => this.props.history.push('/one')}>
          <Text style={styles.title}>#1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.history.push('/two')}>
          <Text style={styles.title}>#2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeComponent;
