import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail5 from './ncs_detail5';


function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
            {     
              rnum: 5,
              id: global.id,
              tnum: global.test,
              pnum: 5,
              cnum: 5,
              sum: global.sum5 * (25 / 4),
              tdate: global.tdate
            })
             .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
      Actions.NCSquiz6();

}














class NCSList5 extends Component {
  state = { ncsq5: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz5') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq5: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq5.map(ncs =>
      <NCSdetail5 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq5.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button
        // onPress={() => Actions.NCSquiz6()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList5;
