import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ResumeScene extends Component {

   onPressS() {
     Actions.SaramResume();
   }
   onPressJ() {
     Actions.JobKResume();
   }
    
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
           <TouchableOpacity onPress={this.onPressS}>
             <View style={styles.container}>
                <Image source={require('../../../img/favorite.png')} style={{width: 40, height: 40 }}/>
                <Text style={styles.textstyle}>사람인</Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.onPressJ}>
             <View style={styles.container}>
                <Image source={require('../../../img/favorite.png')} style={{width: 40, height: 40 }}/>
                <Text style={styles.textstyle}>잡코리아</Text>
             </View>
           </TouchableOpacity>
          </View>
        )
      }
}

const styles = StyleSheet.create({

  container: {
    width: 420,
    height: 70,
    padding: 15,
    borderWidth: 2,
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
