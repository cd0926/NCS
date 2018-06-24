import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Switch } from 'react-native-switch';

export default class SocialScene extends Component {
    onPress() {
        Actions.SNSlogin();
        }
        onPress2() {
            Actions.Jobslogin();
            }
        render() {
        return (
<View style={{ flex: 1, backgroundColor: 'white'}}>
<TouchableOpacity onPress={this.onPress}>
            <View style={{ width: 410, height: 20 }} >
                   
                   </View>


            <View style={{width: 412, height: 80, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: '#B0C4DE',}} >
                   <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            SNS 로그인 정보
                </Text>
                   </View>
                   
                   
                </View>
                </TouchableOpacity>
<View style={{ width: 410, height: 7 }} >
                   
                   </View>

                <TouchableOpacity onPress={this.onPress2}>
            <View style={{width: 412, height: 80, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: '#B0C4DE',}} >
                   <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            채용사이트 로그인 정보
                </Text>
                   </View>
                   
                   
                </View>
                </TouchableOpacity>
 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        SettingText: {
          fontSize: 25,
          color: 'white',
          margin: 20
        },
        /*navBar: {
          height: 73.8,
          backgroundColor: 'orange',
          justifyContent: 'center',
            alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1
        },
        navBarText: {
          fontSize: 22,
          color: 'white',
        }*/
      });