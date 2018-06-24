import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class Saramin extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'http://m.saramin.co.kr/' }} />
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