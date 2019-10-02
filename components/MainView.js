import React, {Component} from 'react';
import {Modal, StyleSheet, Text, ScrollView, View, TouchableOpacity, Alert} from 'react-native';
import Country from './Country'
import Translator from './Translator'

export default class MainView extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,

      from_pressed: false,
      to_pressed: false,
      
      from_lang: "EN",
      to_lang: "ES",

      from_flag : 'US',
      to_flag : 'ES'
    
    }
  }

  setTab_lang_flag(lang, flagCode){  /*SETS THE LANGUAGES IN THE PICKER TABS BASED ON WHICH ONE OPENED THE MODAL*/
    
    if(this.state.from_pressed){
      this.setState({
        from_lang: lang,
        from_pressed: false,
        from_flag: flagCode
      });
    }
    else if(this.state.to_pressed){
      this.setState({
        to_lang: lang,
        to_pressed: false,
        to_flag: flagCode
      });
    }
    this.setModalVisible(!this.state.modalVisible);
  }

  setModalVisible(value){
    this.setState({modalVisible: value});
  }

  render () {

    return(
      <View style = {styles.main}>

        <View style = {styles.selectionBox_view}>
          <TouchableOpacity style = {styles.from_touchable} onPress = {() => {this.setModalVisible(true); this.setState({from_pressed: true}) }}  >
            <Text style = {styles.picker_title_text}> {this.state.from_lang}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.setModalVisible(true); this.setState({to_pressed: true})}} style = {styles.to_touchable}>
            <Text style = {styles.picker_title_text}> {this.state.to_lang}</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.flag_view}>
          <Country from = {this.state.from_flag} to = {this.state.to_flag}/>
        </View>
        {/*console.log("from main: " + this.state.from_lang + " - " + this.state.to_lang )*/}
        <View style = {styles.translation_view}>
          <Translator trans_from = {this.state.from_lang.toLowerCase()} trans_to = {this.state.to_lang.toLowerCase()}/>
        </View>
         <Modal
           animationType="slide"
           transparent={false}
           visible={this.state.modalVisible}
           onBackButtonPress={() => this.setModalVisible(false)}
           onRequestClose={() => {
             console.log("Modal has been close")
           }}>
            <View style = {styles.modal_view}> 
             <Text style = {{fontSize: 25, 
                            fontFamily:'sans-serif',
                            fontWeight: 'bold', 
                            paddingBottom:4, 
                            borderBottomColor: '#fff', 
                            borderBottomWidth: 1,
                            alignSelf: 'center',
                             }}>
                Pick a language
             </Text>
            <ScrollView contentContainerStyle = {styles.contentContainerStyle}
                         style = {styles.scroll_view}>
               {lang_list.map((value, index) => {
                 return(<TouchableOpacity key = {index} style = {styles.modal_opt_touchable} 
                     onPress={() => {
                       this.setTab_lang_flag(value.value, value.flag);
                   }}>
                    <Text style = {styles.modal_opt_text}>{value.title}</Text>
                 </TouchableOpacity>)
               })}

               <TouchableOpacity style = {styles.modal_opt_touchable}
                 onPress={() => {
                   this.setModalVisible(!this.state.modalVisible);
                 }}>
                 <Text style = {{fontSize: 20, fontFamily: 'sans-serif', color: '#999999'}}>Cancel</Text>
               </TouchableOpacity>
               
              </ScrollView>
           </View> 
        </Modal>

      </View>
    );
  }
}
const lang_list= [
  
  {
    title: "English",
    value: "EN",
    flag: "US"
  },
  {
    title: "Spanish",
    value: "ES",
    flag: "ES"
  },
  {
    title: "Hindi",
    value: "HI",
    flag: "IN"
  },
  {
    title: "Italian",
    value: "IT",
    flag: "IT"
  },
  {
    title: "Arabic",
    value: "AR",
    flag: "SA"
  },
  {
    title: "Czech",
    value: "CS",
    flag: "CZ"
  },
  {
    title:"Danish",
    value:"DA",
    flag: "DK"
  },
  {
    title:"German",
    value:"DE",
    flag: "DE"
  },
  {
    title:"Greek",
    value:"EL",
    flag: "GR"
  },
  {
    title:"Finnish",
    value:"FI",
    flag: "FI"
  },
  {
    title:"French",
    value:"FR",
    flag: "FR"
  },
  {
    title:"Hebrew",
    value:"HE",
    flag: "IL"
  },
  {
    title:"Japanese",
    value:"JA",
    flag: "JP"
  },
  {
    title:"Korean",
    value:"KO",
    flag: "KR" 
  },
  {
    title: "Norwegian Bokmal",
    value: "NB",
    flag: "NO"
  },
  {
    title: "Dutch",
    value: "NL",
    flag: "NL"
  },
  {
    title: "Polish",
    value: "PL",
    flag: "PL"
  },
  {
    title: "Portuguese",
    value: "PT",
    flag: "PT"
  },
  {
    title: "Russian",
    value: "RU",
    flag: "RU"
  },
  {
    title: "Swedish",
    value: "SV",
    flag: "SE"
  },
  {
    title: "Chinese",
    value: "CZ",
    flag: "CN"
  }
];
const styles = StyleSheet.create({
main: {
  flex: 1,
  alignItems: 'stretch',
},

flag_view:{
  flex: 1,
  borderColor: "#B3D4E5",
  borderBottomWidth: 2
},

translation_view: {
  flex: 5,
  marginTop: 2
},
selectionBox_view: {
  flex: 1,
  flexDirection: 'row', 
  alignItems: 'center',
  borderColor: "#B3D4E5",
  borderBottomWidth: 2
},

from_touchable: {
  marginLeft: 5,
  flex: 1,
  height: 35,
  marginRight: 5,
  alignItems: 'center',
  backgroundColor: '#1976D2',
  borderWidth: 2,
  borderColor: '#3AA4F6'
  
},

to_touchable: {
  height: 35,
  alignItems: 'center',
  marginLeft: 5,
  marginRight: 5,
  flex: 1,
  borderWidth: 2,
  borderColor: '#3AA4F6',
  backgroundColor: '#1976D2'
},

modal_view: {
  marginTop: 5,
  marginRight: 5, 
  marginLeft: 5,
  alignItems: 'stretch', 
  backgroundColor: '#CCCCCC', 
},

scroll_view: {
  marginTop: 5,
  marginRight: 5, 
  marginLeft: 5, 
  marginBottom: 35,
  backgroundColor: '#CCCCCC', 
},

modal_opt_touchable: {
  alignItems: 'center',
  paddingTop: 4,
  paddingBottom: 4,  
  borderBottomColor: '#fff', 
  borderBottomWidth: 1
},

modal_opt_text: {
  fontSize: 20,
  fontFamily: 'sans-serif',
},
contentContainerStyle: {
  alignItems: 'stretch'
},
picker_title_text:{
  fontSize: 20,
  fontWeight: 'normal',
  color: '#fff'
}
});
