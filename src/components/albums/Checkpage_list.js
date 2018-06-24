import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ScrollView,
       } from 'react-native';
import axios from 'axios';
import { Spinner } from '../common';
import CheckDetail from './Checkpage_detail';

class CheckPage extends Component {

    state = { checklist: [] };

    componentDidMount() {
        axios.post('http://10.70.20.236:3090/Check',
    {
        id: global.id,
        lecid: global.lecture
    })
      .then(response => this.setState({ checklist: response.data }));
    }



    renderchecklist() {
        return this.state.checklist.map(check =>
          <CheckDetail key={check.CHECK_DATE} check={check} />
        );
      }
    
      render() {
        console.log(this.state);

        if (this.state.checklist.length === 0) {
          return <Spinner size="large" />;
            
          
        }

        return (
        <ScrollView style={{ marginBottom: 20 }}>

           <View style={styles.container}>
              <Text style={{ fontSize: 16 }}>수업명 : "{global.lecture}"{"\n"} 강의실, 교수님 :{global.room} {global.propes} {"\n"} 출석체크기록 입니다.</Text>
           </View>

          <View style={{ flex: 1, backgroundColor: 'white' }}>

           {this.renderchecklist()}

          </View>  

        </ScrollView>

        );
      }
}
export default CheckPage;

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

