import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Flag from 'react-native-flags';

export default class Country extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.outer_container}>
        <View style={styles.container}>
          <Flag code={this.props.from} size={64} />
          <Text> ⇨ </Text>
          <Flag code={this.props.to} size={64} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer_container: { height: 96 },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  }
});