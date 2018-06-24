import React, { Component } from 'react';
import { View,
         TouchableOpacity,
         Text,
         StyleSheet,
         ScrollView
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CheckPagelist from '../albums/Checkpage_list';

export default class SelectTime extends Component {
 
  
    render() {
    
      return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white',  }}>

          <CheckPagelist />


        </View>

        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({

    container: {
      width: 420,
      height: 70,
      backgroundColor: 'white',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'center'
    },
    textstyle: {
      fontSize: 25,
      fontWeight: 'bold'
    }
  });
   