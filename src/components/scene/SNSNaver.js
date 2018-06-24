import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class SNSNaver extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'https://blog.naver.com/ilovedongguk' }} />
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