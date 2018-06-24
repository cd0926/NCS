import React, { Component } from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  Keyboard,
  TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { drawer } from '../../actions';

class Navbar2 extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.drawer();
    }
  onPress2() {
    Actions.MainScene();
    }
  onPress3() {
    Actions.MainScene();
    }
   render() {
      return (
        <View>
        <View style={styles.navBar}>
        <TouchableOpacity onPress={this.onPress2}>
          <View style={{width: 100, height: 73.8, alignItems: 'center',justifyContent: 'center'}} >
          <Image source={require('../../../img/leftarrow3.png')} style={{width: 50, height: 50}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPress3}>
        <Text style={styles.navBarText}>
            모바일 학사 관리 시스템
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPress}>
          <View style={{width: 100, height: 73.8, alignItems: 'center',justifyContent: 'center'}} >
          <Image source={require('../../../img/menu.png')} style={{width: 30, height: 30}}/>
          <Text style={styles.navBarText}> 메뉴 </Text>
          </View>
          </TouchableOpacity>
              </View>    
              </View>  
      );
   }
}

/*<Image source={require('./img/menu.png')} style={{width: 30, height: 30}}/>*/


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
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
    }
  });

  export default connect(null, { drawer })(Navbar2);
