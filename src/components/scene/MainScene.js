import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Banner from '../Banner';
import Notice from '../Notice';
import Schedule from '../Schedule';
import SNS from '../SNS';
import Jobs from '../Jobs';
import Attend from '../attend';
import Jobquiz from '../Jobquiz';
import CodeSharing from '../Navbar/CodeSharing';
import { Actions } from 'react-native-router-flux';

class MainScene extends Component {
  render() {
   
    // console.log(this.props);
    return (
        <ScrollView>

            <Banner />
            
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Notice />
                <Schedule />
                <Jobquiz />
              </View >
            

            <View style={{ flex: 1, flexDirection: 'row' }}>
              
                <Attend />
                <SNS />
                <Jobs />
             
              </View >
              <View style={{ flex: 1, flexDirection: 'row' }}>
              
                <View >

                </View>
             
              </View >
              <View style={{ backgroundColor: 'white', height: 183 }}>
              </View>
              <View>
               <CodeSharing/>
              </View>


        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
}

export default connect(mapStateToProps)(MainScene);
