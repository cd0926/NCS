import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail2 from './ncs_detail2';

function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
      {     
        rnum: 2,
        id: global.id,
        tnum: global.test,
        pnum: 2,
        cnum: 2,
        sum: global.sum2 * (100 / 16),
        tdate: global.tdate
      })
       .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      Actions.NCSquiz3();

}










class NCSList2 extends Component {
  state = { ncsq2: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz2') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq2: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq2.map(ncs =>
      <NCSdetail2 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq2.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
  <Button 
        //onPress={() => Actions.NCSquiz3()}>
        onPress={() => send()}>
        
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList2;
