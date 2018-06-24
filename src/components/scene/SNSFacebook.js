import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class SNSFacebook extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'https://ko-kr.facebook.com/dg.univ/' }} />
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