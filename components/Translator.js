import * as React from 'react';
import { Keyboard, Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';
export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translation: ' ',
      text: 'hello',
    };
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    Keyboard.dismiss();
    console.log(this.state.text);
    const url = `https://us-south.functions.cloud.ibm.com/api/v1/web/jobayarsbni%40gmail.com_dev/demo/generate-data.json?data=${encodeURIComponent(this.state.text)}`;
    const options = {
      method: 'GET',
    };
    fetch(url, options)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          translation: responseJson.payload.translations[0].translation,
        });
      });
  }
  render() {
    return (
      <View>
        <Card>
          <TextInput
            multiline={true}
            numberOfLines={2}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({ text })}
          />
        </Card>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 5,
          }}
        />
        <Card>
          <Button title="Enter" onPress={this._onPressButton} />
        </Card>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 10,
          }}
        />

        <Card>
          <Text> {this.state.translation} </Text>
        </Card>
      </View>
    );
  }
}
