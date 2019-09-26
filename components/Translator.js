import React, {Component} from 'react';
import { Keyboard, Button, Text, TextInput, View, StyleSheet, ScrollView,ActivityIndicator } from 'react-native';


import config from '../resources/config.json';
export default class Translator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        translation: '',
        text: 'hello',
        loading: false
      };
      this._onPressButton = this._onPressButton.bind(this);
    }
    _onPressButton() {
      Keyboard.dismiss();
      this.setState({
        loading: true
      })

      //console.log(this.state.text, "translation model: " + this.props.trans_from + " - "  + this.props.trans_to);

      var url = `${config.TRANSLATION_API_URL}data=${this.state.text}&lang_from=${this.props.trans_from}&lang_to=${ this.props.trans_to}`;
      url = encodeURI(url);
      const options = {
        method: 'GET',
      };

      if (this.props.trans_from !== "en" && this.props.trans_to !== "en"){
        var urlA = `${config.TRANSLATION_API_URL}data=${this.state.text}&lang_from=${this.props.trans_from}&lang_to=${"en"}`;
        urlA = encodeURI(urlA);

        fetch(urlA, options)
          .then((response) => response.json())
          .then ((responseJson => {
            return responseJson.payload.translations[0].translation ;
          }))
          .then((data) =>{
            console.log("middle translation: " + data);

            urlA = `${config.TRANSLATION_API_URL}data=${data}&lang_from=${"en"}&lang_to=${this.props.trans_to}`;
            urlA = encodeURI(urlA);
            return fetch(urlA, options);
          })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log("Final Translation: "+ responseJson.payload.translations[0].translation )
            this.setState({
              loading: false,
              translation: responseJson.payload.translations[0].translation
             });           
          });
      }
      else{
      fetch(url, options)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.payload.translations)
          this.setState({
            loading: false,
            translation: responseJson.payload.translations[0].translation,
          });
        });
      }
    }
  render() {

    if(this.state.loading){
      return(<View style = {{flex: 1}}>
        <View style = {styles.input_text_box}>
          <TextInput
            style = {{flex: 1}}
            multiline={true}
            numberOfLines={2}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style = {styles.button}>
          <Button style= {{flex: 1}}title="Enter" onPress={this._onPressButton} />
        </View>
        <View  style = {styles.loading_logo}>
          <ActivityIndicator size = "large" color = "#1976D2"/>
        </View>
      </View>);
    }
    else{
      return (
        <View style = {{flex: 1}}>
          <View style = {styles.input_text_box}>
            <TextInput
              style = {{flex: 1}}
              multiline={true}
              numberOfLines={2}
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View style = {styles.button}>
            <Button style= {{flex: 1}}title="Enter" onPress={this._onPressButton} />
          </View>
          <View  style = {styles.output_text_box}>
            <ScrollView>
              <Text> {this.state.translation} </Text>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  input_text_box: {
    flex: 3,
    backgroundColor: '#CFD8DC'
  },

  output_text_box:{
    flex: 3,
    backgroundColor: "#CFD8DC"
  },

  button: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  loading_logo: {
    flex: 3,
    backgroundColor: "#CFD8DC",
    alignItems: 'center',
    justifyContent: 'center'
  }
});