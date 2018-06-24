import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
      </View>
    );
  }
}
/*
import React, {
    Component,
    // PropTypes,
    // ScrollView,
    // StyleSheet,
    Text,
    // TouchableOpacity,
    View,
  } from 'react-native';
  
  export default class ControlPanel extends Component {
    // static propTypes = {
    //   closeDrawer: PropTypes.func.isRequired
    // };
  
    render() {
      return (
        <View>
          <Text>
            renderControlPanel
          </Text>
        </View>
      );
      // const { closeDrawer } = this.props;
      // return (
      //   <ScrollView style={styles.container}>
      //     <Text style={styles.controlText}>Control Panel</Text>
      //     <TouchableOpacity style={styles.button} onPress={closeDrawer}>
      //       <Text>Close Drawer</Text>
      //     </TouchableOpacity>
      //   </ScrollView>
      // );
    }
  }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 20,
  //     backgroundColor: 'black',
  //   },
  //   controlText: {
  //     color: 'white',
  //   },
  //   button: {
  //     backgroundColor: 'white',
  //     borderWidth: 1,
  //     borderColor: 'black',
  //     padding: 10,
  //   }
  // })
  */