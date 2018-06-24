import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class RecomJob extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'https://www.ncs.go.kr/index.do' }} />
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