import React, { Component } from 'react';
import { 
   View,
   StyleSheet,
   WebView,
       } from 'react-native';

export default class Worknet extends Component {
 
        render() {
        return (
          <View style={styles.container}>
            <WebView source={{ uri: 'http://www.jobkorea.co.kr/Search/?stext=%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8' }} />
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