import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import NnormalDetail from './Nnormal_detail';

import { Spinner } from '../common';

class NnormalList extends Component {

  state = { Nnormals: [] };


  componentDidMount() {
    axios.get('http://10.70.20.236:3090/noticenormal') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ Nnormals: response.data }));
  }


  renderNnormals() {
    return this.state.Nnormals.map(Nnormal =>
      <NnormalDetail key={Nnormal.NUM} Nnormal={Nnormal} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.Nnormals.length === 0) {
      return <Spinner size="large" />;
    }

    
    return (
      <ScrollView>
      
        {this.renderNnormals()}
      
      </ScrollView>
    );
  }
}

export default NnormalList;
