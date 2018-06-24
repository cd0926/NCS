import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import RadioForm, 
       {RadioButton, 
        RadioButtonInput, 
        RadioButtonLabel} from 'react-native-simple-radio-button';


import { Card, CardSection, Button, Spinner } from '../common';
import Axios from 'axios';
import '../global.js';


function sum(value)
{
  global.sum7 = global.sum7 + value;
  ToastAndroid.show(global.sum7.toString(), ToastAndroid.SHORT);
}

const NCSdetail7 = ({ ncs }) => {
  const { QUIZ_CODE, RANGE, CONTENT } = ncs;
  const {  
    headerTextStyle, dateTextStyle,
    } = styles;

    const test = [
      { label: '매우미흡', value: 0 },
      { label: '미흡', value: 1 },
      { label: '보통', value: 2 },
      { label: '우수', value: 3 },
      { label: '매우우수', value: 4 },
    
    ];
    
    
    return ( 
        <Card>
             
              <CardSection> 
                      <View>
                        
                          <Text style={headerTextStyle}>{CONTENT}</Text>
                          
                      </View> 
              </CardSection>
              

           <View style={{ flexDirection: 'row' , marginTop: 4, marginVertical: 5}}>
              <RadioForm
                 radio_props={test} circleSize={16}
                 initial={-1}
                 formHorizontal={true}
                 buttonColor={'gray'}
                // onPress={(value) => { ToastAndroid.show(sum.toString(), ToastAndroid.SHORT)}}
               // onPress={(value) => ({ sum  : this.state.sum + value })}
              onPress={(value) => { sum(value)}}
                //onPress={(value) => ({ sum  : this.state.sum + value })}

                 // onPress={(value) => {console.log(value.toString())}}
                disable = {true}
               
//item = this.value.toString();
                
              />
            


            </View>
               

        </Card>


  );


};


const styles = {

  quizstyle: {
    alignItems: 'center',
    width: 80,
    height: 50, 
    borderWidth: 1,
    paddingTop: 10

  },

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  dateTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default NCSdetail7;
