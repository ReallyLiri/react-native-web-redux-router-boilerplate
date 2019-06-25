import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../App'
import routingConnect from '../routing-connect'

class HomeComponent extends Component {
  render() {
    const {pushNavigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <TouchableOpacity
          onPress={() => pushNavigation('/one')}>
          <Text style={styles.title}>#1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pushNavigation('/two')}>
          <Text style={styles.title}>#2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default routingConnect(mapStateToProps, mapDispatchToProps)(HomeComponent);
