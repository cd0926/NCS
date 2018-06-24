import React, { Component } from 'react';
import { 
 View,
  StyleSheet,
   WebView
       } from 'react-native';

export default class ForgetScene extends Component {
 
        render() {
        return (
          <View style={styles.container}>
          <WebView source={{ uri: 'https://eclass.dongguk.edu/User.do?cmd=registFind&gubun2=F' }} />
        </View>
        );
      }
    }
    const styles = StyleSheet.create({


      container: {
        flex: 1
      },
       
      });
