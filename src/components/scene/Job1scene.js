import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Switch } from 'react-native-switch';

export default class Job1scene extends Component {
        onPress() {
        Actions.Job2scene();
        }
        onPress2() {
            Actions.Jobslogin();
            }
        render() {
        return (
         
<View style={{ flexDirection: 'column' }} >

    <View style={{ height: 100, flexDirection: 'row' }} >

                    <TouchableOpacity onPress={this.onPress}> 
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                    </TouchableOpacity >

                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

    <View style={{ height: 100, flexDirection: 'row' }} >
                    
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

    <View style={{ height: 100, flexDirection: 'row' }} >
                        
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

    <View style={{ height: 100, flexDirection: 'row' }} >
                        
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 98, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

    <View style={{ height: 100, flexDirection: 'row' }} >
                        
                        <View style={{width: 98, height: 97.5, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

    <View style={{ height: 100, flexDirection: 'row' }} >
                        
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 2, marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                   
                  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5}} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 5 }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>  
                        <View style={{width: 98, height: 97, borderWidth: 1, backgroundColor: '#F5DEB3',  /*alignItems: 'center' ,*/justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.SettingText}>
                            test
                            </Text>
                        </View>                 
    </View>

            
           
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