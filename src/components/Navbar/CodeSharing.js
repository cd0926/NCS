import React, { Component } from 'react';

import { View, Text, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';

import Tabs from 'react-native-tabs';
import { Actions } from 'react-native-router-flux';
import Axios from 'axios';
import { drawer } from '../../actions';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class CodeSharing extends Component {
 
 

  constructor(props) {

    super(props);
 
  //  this.onPress = this.onPress.bind(this);

    this.state = {

      page: 'first'

    };

  }

  onPress() {
    Actions.MainScene();
    }
  onPress2() {
    Actions.Favorite();
    }
  onPress3() {

    Actions.Jobbasic();
    //Actions.Mypage();
    }
  onPress4() {
    Actions.Setting();
    }
  onPress5() {
    AsyncStorage.clear();
  
    Actions.login();

    global.abc = 0;
    
    Axios.post('http://10.70.20.236:3090/login2',
      {
       autos: 0, 
       column: global.column1,
       username: global.id,
       login: global.login,
       logout: new Date()
  
      })
       .then(function (response) {
          console.log(response);
         //Actions.MainScene();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  onPress6() {
    Actions.Attendance();
    }



  render() {

    const { page } = this.state;

    return (

      <View style={styles.container}>

        <Tabs

          selected={page}

          style={styles.tabbar}

          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}

        >


  <TouchableOpacity onPress={this.onPress}>
            <Text name="first" style={{textAlign: 'center'}} >
            <FontAwesome style={{ color: '#FFFAFA', fontSize: 30, textAlign: 'center' }}>{Icons.home}</FontAwesome>
            
            <Text style={{fontSize: 14, color: 'white',  }} >               메인으로</Text>
            
            </Text>
</TouchableOpacity>





            <TouchableOpacity onPress={this.onPress3}>
            <Text name="third" style={{textAlign: 'center'}}>
            <FontAwesome style={{ color: '#FFFAFA', fontSize: 30, textAlign: 'center' }}>{Icons.star}</FontAwesome>
         
            
            <Text style={{fontSize: 14, color: 'white',  }}>                  NCS진단</Text>
            
            </Text>


          </TouchableOpacity>


   <TouchableOpacity onPress={this.onPress4}>
            <Text name="fourth" style={{textAlign: 'center'}}>
            <FontAwesome style={{ color: '#FFFAFA', fontSize: 30, textAlign: 'center' }}>{Icons.cog}</FontAwesome>
           
          
            <Text style={{fontSize: 14, color: 'white',  }}>             환경설정</Text>
            
            </Text>

</TouchableOpacity>







 <TouchableOpacity onPress={this.onPress6}>
            <Text name="fifth" style={{textAlign: 'center'}}>
            <FontAwesome style={{ color: '#FFFAFA', fontSize: 30, textAlign: 'center' }}>{Icons.clipboard}</FontAwesome>
            <Text style={{ fontSize: 14, color: 'white',  }}>            전자출석</Text>
            
            
            </Text>
</TouchableOpacity>



  <TouchableOpacity onPress={this.onPress5}>
            <Text name="second" style={{ textAlign: 'center'}}>
            
            <FontAwesome style={{ color: '#FFFAFA', fontSize: 30, textAlign: 'center' }}>{Icons.user}</FontAwesome>
            
             <Text style={{ fontSize: 14, color: 'white',  }}>              로그아웃</Text>
             
            </Text>
           
            </TouchableOpacity>
           

        </Tabs>



     

      

      </View>

    )

  }

}



const styles = StyleSheet.create({

  Textstyle: {
    fontSize: 10,
    color: 'white',
    
  },
  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    position: 'absolute',
    bottom: 0

   
  },

  tabbar: {


   
    alignItems: 'center',
  flexDirection: 'row',

    justifyContent: 'center',

    backgroundColor: 'grey',

    height: 80,
    width: 420,
    borderTopColor: 'grey',

    borderTopWidth: 0

  },
 space: {

  

    height: 80,
  

  }

});

export default connect(null, { drawer })(CodeSharing);
