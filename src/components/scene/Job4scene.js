import React, { Component } from 'react';
import { 
  AppRegistry,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Job4scene extends Component {
    onPress() {
      Actions.NCSquiz1();
      }
      constructor(props) {
        super(props);
        this.state = {value : "전체보기"}
      }
      onSelect(value, label) {
        this.setState({value : value});
      }
      render() {
        return(
          <View>

          <View style={{ width: 410, height: 20 }} >
                 
                 </View>


          <View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                 <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                 <Text style={styles.SettingText}>
          01. 공적개발원조사업
              </Text>
                 </View>
                 
                 
              </View>
              
<View style={{ width: 410, height: 7 }} >

                 </View>
<TouchableOpacity onPress={this.onPress}>
              
          <View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                 <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                 <Text style={styles.SettingText}>
          02. 프로젝트 관리
              </Text>
                 </View>
                 
                 
              </View>
              </TouchableOpacity>


<View style={{ width: 410, height: 7 }} >

</View>
<TouchableOpacity onPress={this.onPress}>

<View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
<View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
<Text style={styles.SettingText}>
03. 산학협력 관리
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