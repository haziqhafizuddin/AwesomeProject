'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

var SearchPage = require('./search_page')

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  container: {
    flex: 1,
  },
});

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
