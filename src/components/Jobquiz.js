import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity } from 'react-native'

  import FontAwesome, { Icons } from 'react-native-fontawesome';
  import { Actions } from 'react-native-router-flux';
class Jobquiz extends Component {
  onPress() {
    Actions.Jobbasic();
    }
    render() {
      return (
        <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'palevioletred', height: 154, width: 138, justifyContent: 'center', alignItems: 'center' }} >
          <TouchableOpacity onPress={this.onPress}>
            
            <FontAwesome style={{ fontSize: 74, textAlign: 'center' }}>{Icons.user}</FontAwesome>
            <Text style={{ margin: 10, fontSize: 18, textAlign: 'center', color: 'white' }}>
                      직업 기초능력진단
            </Text>
            
          </TouchableOpacity>
        </ View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 73.8,
      backgroundColor: '#f0f8ff',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1
    },
    navBarText: {
      fontSize: 20,
      color: 'white',
    },
    noticeText: {
      fontSize: 18,
      color: 'black',
      
    },
    notice2Text: {
      fontSize: 15,
      color: 'black',
      
  
    },

 
    jobs: {
      height: 128,
      backgroundColor: 'white',
      borderWidth: 1,
      backgroundColor: '#F5DEB3',
    }
  
  });
  
  export default Jobquiz;
  

