import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import '../global.js';

import { Button, Spinner } from '../common';
import NCSdetail10 from './ncs_detail10';
function send()
{
  
      axios.post('http://10.70.20.236:3090/ncsresult1',
                      {     
                        rnum: 10,
                        id: global.id,
                        tnum: global.test,
                        pnum: 10,
                        cnum: 10,
                        sum: global.sum10 * (25 / 2),
                        tdate: global.tdate
                      })
                       .then(function (response) {
                          console.log(response);
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
    axios.post('http://10.70.20.236:3090/getncsresult1',
                        {     
                          id: global.id,
                          tdate: global.tdate,
                          sum1: global.sum1 * 5,
                          sum2: global.sum2 * (100 / 16),
                          sum3: global.sum3 * (100 / 8),
                          sum4: global.sum4 * (25 / 3),
                          sum5: global.sum5 * (25 / 4),
                          sum6: global.sum6 * 5,
                          sum7: global.sum7 * (100 / 8),
                          sum8: global.sum8 * (25 / 4),
                          sum9: global.sum9 * (25 / 4),
                          sum10: global.sum10 * (25 / 2)
          
                        })
                         .then(function (response) {
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
      

      Actions.Jobbasic();
      global.test = global.test + 1;
      global.sum1 = 0;
      global.sum2 = 0;
      global.sum3 = 0;
      global.sum4 = 0;
      global.sum5 = 0;
      global.sum6 = 0;
      global.sum7 = 0;
      global.sum8 = 0;
      global.sum9 = 0;
      global.sum10 = 0;
}




class NCSList10 extends Component {
  state = { ncsq10: [] };

  
  componentDidMount() {
    axios.get('http://10.70.20.236:3090/ncsquiz10') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsq10: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsq10.map(ncs =>
      <NCSdetail10 key={ncs.QUIZ_CODE} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsq10.length === 0) {
      return <Spinner size="large" />;
    }

    

    return (
      <ScrollView>
      
        {this.renderNCS()}
      
        <View style={{padding: 10 }}>
        <Button
          onPress={() => send()}>
         결과보기
       </Button>
       </View>

      </ScrollView>

      
    );
  }
}

export default NCSList10;
