import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class FavoirteEdit extends Component {

    constructor() {
        super();
        this.state = {
            bookmark: '',
            URL: ''
        };
    }
    onPress() {
      Actions.Favorite();
      }
    Complete = () => {
      Alert.alert(
        '알림',
        '현재 북마크가 수정되었습니다.',
        [
          { text: '확인', onPress() { Actions.Favorite(); } }
        ],
      )
    }


    render() {
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <TouchableOpacity onPress={this.onPress}>
            <View style={{ backgroundColor: '#87CEEB', marginTop: 20, marginLeft: 50, width: 300, height: 70, borderWidth: 2, borderColor: 'white', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'  }}>
              
              <FontAwesome style={{ fontSize: 44, textAlign: 'center', color: '#FFD700' }}>{Icons.star}</FontAwesome>
              <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'white'}} > 즐겨찾기 추가 </Text>
              
            </View>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={{ height: 20 }}></View>
               <Text style={styles.header}> 북마크명</Text>
                <TextInput
                  style={ styles.textInput } placeholder = '북마크입력'
                  onChangeText={(bookmark) => this.setState({ bookmark })}
                  underlineColorAndroid='transparent'
                  placeholderTextColor='black'
                />
               <Text style={styles.header}> URL</Text>
                <TextInput
                  style={ styles.textInput } placeholder = 'URL 입력'
                  onChangeText={(URL) => this.setState({ URL })}
                  underlineColorAndroid='transparent'
                  placeholderTextColor='black'
                />
            </View>
          </View>  
        )
    }
    
}
const styles = StyleSheet.create({

    container: {
      flex: 1,
     alignItems: 'flex-start',
     paddingLeft: 40,
     paddingRight: 40,
    },
    header: {
      alignItems: 'center',
      fontSize: 18,
      marginBottom: 10,
      color: 'black',
      fontWeight: 'bold',
    },
    textInput: {
      color: 'black',
      fontWeight: 'bold',
      alignSelf: 'stretch',
    
      height: 38,
      marginBottom: 15,
      borderColor: 'black',
      borderWidth: 1
      },
    
    });