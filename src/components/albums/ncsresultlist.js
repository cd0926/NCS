import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import NCSresultdetail from './ncsresultdetail';

import { Button, Spinner, } from '../common';


class NCSresultlist extends Component {

  state = { results: [],};

 
  componentDidMount() {
    axios.post('http://10.70.20.236:3090/ncsgraph',
  {
    tdate: global.tdate,
    id: global.id
  })
       .then(response => this.setState({ results: response.data }));
  }


  renderresults() {
    return this.state.results.map(result =>
      <NCSresultdetail key={result.TEST_DATE} result={result} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.results.length === 0) {
      return (
        <View style={{marginTop: 90, marginLeft: 30, width: 400, height: 200 }}>
        
        <Text style={{fontSize: 23 }}>과거진단 결과에서 검사결과를 선택해주세요.</Text>
        
        </View>
      )
    }

    
    return (

  
        <View style={{marginTop: 90, width: 400, height: 200 }}>
        
        {this.renderresults()}
        
        </View>
      
     
    );
  }
}

export default NCSresultlist;
