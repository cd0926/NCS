import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail7 from './ncs_detail7';




function send()
{
  axios.post('http://10.70.20.236:3090/ncsresult1',
                {     
                  rnum: 7,
                  id: global.id,
                  tnum: global.test,
                  pnum: 7,
                  cnum: 7,
                  sum: global.sum7 * (100 / 8),
                  tdate: global.tdate
                })
                 .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
      Actions.NCSquiz8();

}












class NCSList7 extends Component {
  state = { ncsq7: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz7') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq7: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq7.map(ncs =>
      <NCSdetail7 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq7.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button 
        //onPress={() => Actions.NCSquiz8()}>
        onPress={() => send()}>
         다음영역으로 이동
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList7;
