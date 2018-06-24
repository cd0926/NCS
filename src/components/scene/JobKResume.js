import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class JobKResume extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'http://m.jobkorea.co.kr/textuser/resume' }} />
          </View>
        );
      }
    }
    const styles = StyleSheet.create({


      container: {
        flex: 1,
        backgroundColor: 'white'
      },
       
      });