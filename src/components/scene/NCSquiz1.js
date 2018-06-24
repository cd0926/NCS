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
import NCSList1 from '../albums/ncs_list1';
import { Button } from '../common';

export default class NCSquiz1 extends Component {

    render() {
        
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ width: 412, height: 50, padding: 8, borderWidth: 2, borderColor:'#00CED1', flexDirection: 'row' }} >
            <Text style={{ fontSize: 18 }}>1. 의사소통능력</Text>
          </View>

            <NCSList1 />
           

          </View>
        )
    }
}
