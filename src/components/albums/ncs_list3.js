import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import '../global.js';
import { Button, Spinner } from '../common';
import NCSdetail3 from './ncs_detail3';


function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
        {     
          rnum: 3,
          id: global.id,
          tnum: global.test,
          pnum: 3,
          cnum: 3,
          sum: global.sum3 * (100 / 8),
          tdate: global.tdate
        })
         .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      Actions.NCSquiz4();

}










class NCSList3 extends Component {
  state = { ncsq3: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz3') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq3: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq3.map(ncs =>
      <NCSdetail3 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq3.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button 

      
        //onPress={() => Actions.NCSquiz4()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList3;
