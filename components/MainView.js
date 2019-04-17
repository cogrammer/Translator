import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MainView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>

        </Text>

        <Image style={styles.logo} source={require('../assets/en_es.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 2,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  }
});
