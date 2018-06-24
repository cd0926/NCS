import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail4 from './ncs_detail4';

function send()
{
  
  axios.post('http://10.70.20.236:3090/ncsresult1',
  {     
    rnum: 4,
    id: global.id,
    tnum: global.test,
    pnum: 4,
    cnum: 4,
    sum: global.sum4 * (25 / 3),
    tdate: global.tdate
  })
   .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      Actions.NCSquiz5();

}


















class NCSList4 extends Component {
  state = { ncsq4: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz4') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq4: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq4.map(ncs =>
      <NCSdetail4 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq4.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button 
        
        //onPress={() => Actions.NCSquiz5()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList4;
