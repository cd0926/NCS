import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ScrollView,
       } from 'react-native';
import axios from 'axios';
import { Spinner } from '../common';
import SelectDetail from './selecttime_detail';

class SelectTime extends Component {

    state = { timelist: [] };

    componentDidMount() {
        axios.post('http://10.70.20.236:3090/selectTime',
    {
        id: global.id
    })
      .then(response => this.setState({ timelist: response.data }));
    }

    renderTimelist() {
        return this.state.timelist.map(SelectT =>
          <SelectDetail key={SelectT.TEST_DATE} SelectT={SelectT} />
        );
      }
    
      render() {
        console.log(this.state);

        if (this.state.timelist.length === 0) {
          return (
            <ScrollView style={{ marginBottom: 20 }}>

           <View style={styles.container}>
              <Text>원하시는 날짜의 진단결과를 선택해주십시오.</Text>
           </View>

          <View style={{ flex: 1, backgroundColor: 'white' }}>

           <Text>과거진단결과가 없습니다. </Text>

          </View>  

        </ScrollView>
            
          )
        }

        return (
        <ScrollView style={{ marginBottom: 20 }}>

           <View style={styles.container}>
              <Text>원하시는 날짜의 진단결과를 선택해주십시오.</Text>
           </View>

          <View style={{ flex: 1, backgroundColor: 'white' }}>

           {this.renderTimelist()}

          </View>  

        </ScrollView>

        );
      }
}
export default SelectTime;

const styles = StyleSheet.create({

  container: {
    width: 420,
    height: 70,
    backgroundColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textstyle: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

