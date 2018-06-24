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
import NCSList6 from '../albums/ncs_list6';
import { Button } from '../common';

export default class NCSquiz6 extends Component {

    render() {
        
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ width: 412, height: 50, padding: 8, borderWidth: 1, borderColor: '#00CED1', flexDirection: 'row' }} >
            <Text style={{ fontSize: 18 }}>6 대인관계능력</Text>
          </View>

            <NCSList6 />
           

          </View>
        )
    }
}
