import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickLang extends Component {
   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="EN-ES" value="English -> Spanish" />
               <Picker.Item label="EN-AR" value="English -> Arabic" />
               <Picker.Item label="EN-CS" value="English -> Czech" />
               <Picker.Item label="EN-DA" value="English -> Danish" />
               <Picker.Item label="EN-DE" value="English -> German" />
               <Picker.Item label="EN-FI" value="English -> Finnish" />
               <Picker.Item label="EN-FR" value="English -> French" />
               <Picker.Item label="EN-HI" value="English -> Hindi" />
               <Picker.Item label="EN-IT" value="English -> Italian" />
               <Picker.Item label="EN-JA" value="English -> Japanese" />
               <Picker.Item label="EN-KO" value="English -> Korean" />
               <Picker.Item label="EN-NB" value="English -> Norwegian Bokmal" />
               <Picker.Item label="EN-NL" value="English -> Dutch" />
               <Picker.Item label="EN-PL" value="English -> Portuguese" />
               <Picker.Item label="EN-RU" value="English -> Russian" />
               <Picker.Item label="EN-SV" value="English -> Swedish" />
               <Picker.Item label="EN-TR" value="English -> Turkish" />
               <Picker.Item label="EN-ZH" value="English -> Simplified Chinese" />
               <Picker.Item label="EN-ZH-TW" value="English -> Traditional Chinese" />
            </Picker>


         </View>
      )
   }
}
export default PickLang

const styles = StyleSheet.create({
   text: {

      fontSize: 10,
      alignSelf: 'center',
      color: 'black'
   }
})