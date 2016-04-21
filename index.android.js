'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

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

class HelloWorld extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <Text style={styles.text}>Hello World (Again)</Text>
      </View>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{title: 'My First Scene'}} 
        renderScene={(route, navigator) => <HelloWorld /> }
      />
    );
  }
}

// module.exports = HelloWorld

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
