import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity } from 'react-native'

  import { Actions } from 'react-native-router-flux';
  import FontAwesome, { Icons } from 'react-native-fontawesome';

  class SNS extends Component {
    onPress() {
      Actions.SNS();
      }
    render() {
      return(
        <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: '#FF8C00', height: 153, width: 138, justifyContent: 'center', alignItems: 'center' }} >
        <TouchableOpacity onPress={this.onPress}>
          
          <FontAwesome style={{ fontSize: 74, textAlign: 'center' }}>{Icons.globe}</FontAwesome>
          <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                    SNS
          </Text>
          
        </TouchableOpacity>
        </View >
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
      backgroundColor: 'orange',
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

    sns: {
      height: 128,
      borderWidth: 1,
      backgroundColor: '#F5DEB3',
      
    },

  });
  
  export default SNS