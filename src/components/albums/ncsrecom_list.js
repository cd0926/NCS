import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


import { Spinner } from '../common';
import Ncsrecomdetail from './ncsrecom_detail';

class Ncsrecomlist extends Component {
  state = { ncsr: [] };

  
  componentDidMount() {
    axios.post('http://10.70.20.236:3090/ncsrecom',
    {
      tdate: global.tdate
    }) //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ ncsr: response.data }));
  }

  /*onPress() {
    Actions.Notice();
    }
*/
  renderNCS() {
    return this.state.ncsr.map(ncs =>
      <Ncsrecomdetail key={ncs.SECTION} ncs={ncs} />
    );
  }

  
  render() {
    console.log(this.state);

    if (this.state.ncsr.length === 0) {
      return (
        <ScrollView style={{ marginBottom: 300 }}>
      <View style={{ marginTop: 20 }}>

      <Text style={{fontSize: 22, fontWeight: 'bold'  }}> 모든부분에서 훌륭한 성적을 달성했습니다. </Text>
      </View>
        
      
      </ScrollView>

      )
    }

    

    return (
      <ScrollView style={{ marginBottom: 20 }}>
      
        {this.renderNCS()}
      
      </ScrollView>

      
    );
  }
}

export default Ncsrecomlist;
