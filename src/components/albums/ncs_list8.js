import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail8 from './ncs_detail8';
function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
  {     
    rnum: 8,
    id: global.id,
    tnum: global.test,
    pnum: 8,
    cnum: 8,
    sum: global.sum8 * (25 / 4),
    tdate: global.tdate
  })
   .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      Actions.NCSquiz9();

}



class NCSList8 extends Component {
  state = { ncsq8: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz2') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq8: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq8.map(ncs =>
      <NCSdetail8 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq8.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button
        // onPress={() => Actions.NCSquiz9()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList8;
