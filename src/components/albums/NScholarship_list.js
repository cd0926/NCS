import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import NScholDetail from './NSchol_detail';

import { Button, Spinner } from '../common';

class NScholList extends Component {

  state = { NSchols: [] };


  componentDidMount() {
    axios.get('http://10.70.20.236:3090/noticeScholarship') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ NSchols: response.data }));
  }


  renderNSchols() {
    return this.state.NSchols.map(NSchol =>
      <NScholDetail key={NSchol.NUM} NSchol={NSchol} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.NSchols.length === 0) {
      return <Spinner size="large" />;
    }

    
    return (
      <ScrollView>
      
        {this.renderNSchols()}
      
      </ScrollView>
    );
  }
}

export default NScholList;
