import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../App";
import routingConnect from "../routing-connect";

class NumberOneComponent extends Component {
  render() {
    const {pushNavigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => pushNavigation('/')}>
          <Text style={styles.title}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Page #1</Text>
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

export default routingConnect(mapStateToProps, mapDispatchToProps)(NumberOneComponent);
