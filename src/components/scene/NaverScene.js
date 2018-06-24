import React, { Component } from 'react';
import { 
 View,
  StyleSheet,
   WebView
       } from 'react-native';

export default class NaverScene extends Component {
 
        render() {
        return (
          <View style={styles.container}>
          <WebView url={'https://www.naver.com'} />
        </View>
        );
      }
    }
    const styles = StyleSheet.create({


      container: {
        flex: 1
      },
       
      });
