import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
//import { Field } from 'redux-form';
//import { Radio } from '../common/radio';

import '../global.js';
import { Button, Spinner } from '../common';
import NCSdetail1 from './ncs_detail1';



function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
    {     
      rnum: 1,
      id: global.id,
      tnum: global.test,
      pnum: 1,
      cnum: 1,
      sum: global.sum1 * 5,
      tdate: global.tdate
    })
     .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
      Actions.NCSquiz2();

}

class NCSList1 extends Component {

  state = { ncsq1: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz1') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq1: response.data }));
  }

  renderNCS() {
    return this.state.ncsq1.map(ncs =>
      <NCSdetail1 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq1.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button 


 //onPress={() => Actions.NCSquiz2()}>
           onPress={() => send()}>
       

     
        
         다음영역으로 이동
    
       </Button>
       
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList1;
