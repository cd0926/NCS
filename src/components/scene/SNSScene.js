import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SNSScene extends Component {

   onPressN() {
     Actions.Naverblog();
   }
    
    onPress = () => {
      
        Actions.Facebook();
      
    }
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
           <TouchableOpacity onPress={this.onPress}>
             <View style={styles.container}>
                <Text style={styles.textstyle}>FACEBOOK</Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.onPressN}>
             <View style={styles.container2}>
                <Text style={styles.textstyle}>NAVER</Text>
             </View>
           </TouchableOpacity>
          </View>
        )
      }
}

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    width: 420,
    height: 80,
    backgroundColor: '#4267B2',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: 'white'
  },
  container2: {
    marginTop: 20,
    width: 420,
    height: 80,
    backgroundColor: '#00DC1E',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: 'white'
  },
  textstyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
  }
});
