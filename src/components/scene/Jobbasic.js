import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Select, Option } from 'react-native-chooser'; 
import { BarChart, Grid } from 'react-native-svg-charts';
import NCSresultlist from '../albums/ncsresultlist';
import { Button } from '../common';


export default class Jobbasic extends Component {

      
  onPress() {
    Actions.Schedule();
    }


render() {



  return (
   
    <View style={{flex: 1, backgroundColor: 'white'}}>

    

      <View style={{width: 420, height: 400 }}>

      <NCSresultlist />

      </View>

      <TouchableOpacity onPress={() => Actions.SelectTime() }>
      <View style ={{alignItems: 'center', width: 350, height: 60, borderWidth: 2, marginLeft: 30, marginBottom: 5, padding: 13 }}>
       <Text style={styles.textstyle} >과거 진단결과보기</Text>
      </View>
    </TouchableOpacity>

      <TouchableOpacity onPress={() => { Actions.NCSquiz1();  global.tdate = new Date(); } }>
        <View style ={{alignItems: 'center', width: 350, height: 60, borderWidth: 2, marginLeft: 30, marginBottom: 5, padding: 13 }}>
         <Text style={styles.textstyle} >다시 진단하기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Actions.Ncsrecom()}>
        <View style = {{alignItems: 'center', width: 350, height: 60, borderWidth: 2, marginLeft: 30, padding: 13 }}>
          <Text style={styles.textstyle}>보충 컨텐츠</Text>
        </View>
      </TouchableOpacity>

      </View>  
      

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
 