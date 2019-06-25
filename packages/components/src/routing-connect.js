import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from './redux/actions/actionTypes'
import * as navigationActions from "./redux/actions/navigationActions";

export default function routingConnect(mapStateToProps, mapDispatchToProps) {

  return function (TargetComponent) {

    const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TargetComponent);

    const navigationAwareComponent = class extends Component {

      componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.navigationState.targetRoute === nextProps.navigationState.targetRoute) {
          return;
        }

        switch (nextProps.navigationState.requiredAction) {
          case types.PUSH_NAVIGATION:
            nextProps.history.push(nextProps.navigationState.targetRoute);
            break;
          case types.POP_NAVIGATION:
            nextProps.history.goBack();
            break;
          case types.REPLACE_NAVIGATION:
            nextProps.history.replace(nextProps.navigationState.targetRoute);
            break;
        }
      }

      render() {
        return React.createElement(connectedComponent, {...this.props});
      }
    };

    return connect(
      (state) => {
        return {
          navigationState: state.navigation
        }
      },
      {...navigationActions}
    )(navigationAwareComponent);
  }

}
