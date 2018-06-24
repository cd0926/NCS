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
import NCSList7 from '../albums/ncs_list7';
import { Button } from '../common';

export default class NCSquiz7 extends Component {

    render() {
        
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ width: 412, height: 50, padding: 8, borderWidth: 1, borderColor: '#00CED1', flexDirection: 'row' }} >
            <Text style={{ fontSize: 18 }}>7.정보능력</Text>
          </View>

            <NCSList7 />
           

          </View>
        )
    }
}
