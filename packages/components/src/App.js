import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Router, Switch, Route, Redirect } from './routing';

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

class NumberTwoComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.history.push('/')}>
          <Text style={styles.title}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Page #2</Text>
      </View>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={props => <HomeComponent {...props}/>}
            />
            <Route
              path="/one"
              render={props => <NumberOneComponent {...props}/>}
            />
            <Route
              path="/two"
              render={props => <NumberTwoComponent {...props}/>}
            />
            <Redirect to='/'/>
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3C0F9',
    padding: 50,
    height: '100%'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#AB6393',
    fontWeight: 'bold'
  }
});
