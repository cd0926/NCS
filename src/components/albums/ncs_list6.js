import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail6 from './ncs_detail6';
function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
  {     
    rnum: 6,
    id: global.id,
    tnum: global.test,
    pnum: 6,
    cnum: 6,
    sum: global.sum6 * 5,
    tdate: global.tdate
  })
   .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      Actions.NCSquiz7();

}


class NCSList6 extends Component {
  state = { ncsq6: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz6') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq6: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq6.map(ncs =>
      <NCSdetail6 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq6.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button 
        //onPress={() => Actions.NCSquiz7()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList6;
