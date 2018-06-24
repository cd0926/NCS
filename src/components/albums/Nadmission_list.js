import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import NadDetail from './Nad_detail';

import { Button, Spinner } from '../common';

class NadList extends Component {

  state = { Nads: [] };


  componentDidMount() {
    axios.get('http://10.70.20.236:3090/noticeadmission') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ Nads: response.data }));
  }


  renderNads() {
    return this.state.Nads.map(Nad =>
      <NadDetail key={Nad.NUM} Nad={Nad} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.Nads.length === 0) {
      return <Spinner size="large" />;
    }

    
    return (
      <ScrollView>
      
        {this.renderNads()}
      
      </ScrollView>
    );
  }
}

export default NadList;
