import React, { Component, PropTypes } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity,
  Button
 } from 'react-native'

 import FontAwesome, { Icons } from 'react-native-fontawesome';
 import { Actions } from 'react-native-router-flux';

class Notice extends Component {
  onPress() {
    Actions.Notice();
    }
    render() {
      return(
        <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: '#B8860B', height: 154, width: 138, justifyContent: 'center', alignItems: 'center' }} >  
        <TouchableOpacity onPress={this.onPress}>  
          
          <FontAwesome style={{ fontSize: 74, textAlign: 'center' }}>{Icons.book}</FontAwesome>
          <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    공지사항
          </Text>
          
        </TouchableOpacity>
        </View >
      )
    }
  }



const styles = StyleSheet.create({
     button: {
       width: 206,
      height: 210,  
      
    },
  });
  
  export default Notice
  