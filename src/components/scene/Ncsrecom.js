import React, { Component } from 'react';
import { View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import NCSrecomlist from '../albums/ncsrecom_list';
import { Actions } from 'react-native-router-flux';

export default class Ncsrecom extends Component {
 
  
    render() {
    
      return (
  
        <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ backgroundColor: 'white',  }}>

        <NCSrecomlist />

        <TouchableOpacity onPress={() => Actions.SelectTime() }>
      <View style ={{alignItems: 'center', width: 350, height: 60, borderWidth: 2, marginLeft: 30, marginBottom: 5, padding: 13 }}>
       <Text style={styles.textstyle} >과거 진단결과보기</Text>
      </View>
    </TouchableOpacity>

          <TouchableOpacity onPress={() => { Actions.NCSquiz1(); global.tdate = new Date(); } }>
          <View style ={{alignItems: 'center', width: 350, height: 60, borderWidth: 2, marginLeft: 30, marginBottom: 5, padding: 13 }}>
           <Text style={styles.textstyle} >다시 진단하기</Text>
          </View>
        </TouchableOpacity>

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