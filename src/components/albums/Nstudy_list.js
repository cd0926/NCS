import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import NstudyDetail from './Nstudy_detail';

import { Button, Spinner } from '../common';

class NstudyList extends Component {

  state = { Nstudys: [] };


  componentDidMount() {
    axios.get('http://10.70.20.236:3090/noticestudy') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ Nstudys: response.data }));
  }


  renderNstudys() {
    return this.state.Nstudys.map(Nstudy =>
      <NstudyDetail key={Nstudy.NUM} Nstudy={Nstudy} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.Nstudys.length === 0) {
      return <Spinner size="large" />;
    }

    
    return (
      <ScrollView>
      
        {this.renderNstudys()}
      
      </ScrollView>
    );
  }
}

export default NstudyList;
