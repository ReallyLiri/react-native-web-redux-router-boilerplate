import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Router, Switch, Route, Redirect } from './routing';
import HomeComponent from "./containers/HomeComponent";
import NumberOneComponent from "./containers/OneComponent";
import NumberTwoComponent from "./containers/TwoComponent";

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

export const styles = StyleSheet.create({
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
