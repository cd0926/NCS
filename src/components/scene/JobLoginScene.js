import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet
       } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { Switch } from 'react-native-switch';

export default class JobsloginScene extends Component {
        render() {
        return (
<View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ width: 410, height: 20 }} >
                   
                   </View>  


            <View style={{width: 412, height: 80, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: '#B0C4DE',}} >
                   <View style={{width: 305, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            워크넷 연동
                </Text>
                   </View>
                   
                   <View style={{width: 102, height: 80,  alignItems: 'center',justifyContent: 'center'}} >
            <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={40}
            barHeight={40}
            circleBorderWidth={3}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
            /> 
                   </View>
                </View>

<View style={{ width: 410, height: 7 }} >
                   
                   </View>

                
            <View style={{width: 412, height: 80, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: '#B0C4DE',}} >
                   <View style={{width: 305, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            잡코리아 연동
                </Text>
                   </View>
                   
                   <View style={{width: 102, height: 80,  alignItems: 'center',justifyContent: 'center'}} >
            <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={40}
            barHeight={40}
            circleBorderWidth={3}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
            /> 
                   </View>
                </View>
                <View style={{ width: 410, height: 7 }} >
                   
                   </View>
                
            <View style={{width: 412, height: 80, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: '#B0C4DE',}} >
                   <View style={{width: 305, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            사람인 연동
                </Text>
                   </View>
                   
                   <View style={{width: 102, height: 80,  alignItems: 'center',justifyContent: 'center'}} >
            <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={40}
            barHeight={40}
            circleBorderWidth={3}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
            /> 
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