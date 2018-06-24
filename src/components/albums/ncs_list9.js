import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail9 from './ncs_detail9';
function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
  {     
    rnum: 9,
    id: global.id,
    tnum: global.test,
    pnum: 9,
    cnum: 9,
    sum: global.sum9 * (25 / 4),
    tdate: global.tdate
  })
   .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      Actions.NCSquiz10();

}



class NCSList9 extends Component {
  state = { ncsq9: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz9') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq9: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq9.map(ncs =>
      <NCSdetail9 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq9.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button
        // onPress={() => Actions.NCSquiz10()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList9;
