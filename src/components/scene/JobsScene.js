import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class JobsScene extends Component {
    onPress() {
      Actions.Jobs();
      }
    onPressB() {
      Actions.Jobbasic();
    }
    onPressR() {
      Actions.RecomJob();
    }
    onPressS() {
      Actions.Saramin();
    }
    onPressJ() {
      Actions.JobKorea();
    }
    onPressW() {
      Actions.Worknet();
    }
    onPressRe() {
      Actions.Ncsrecom();
    }
    Complete = () => {
        Alert.alert(
          '알림',
          '준비중입니다',
          [
            { text: '확인' } 
          ],
        )
      }
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
             <View style={styles.textcontainer}>
                 <Text style={styles.textstyle}>My Career</Text>
             </View>
             <View style={styles.container}>

               
           
            <TouchableOpacity onPress={this.onPressB}>
                 <View style={styles.iconcontainer}>
                 <Image source={require('../../../img/quiz2.png')} style={{width: 90, height: 75}}/>




            
            <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    직업기초능력진단
          </Text>
  


                 </View>
            </TouchableOpacity>  


              <TouchableOpacity onPress={this.onPressRe}>
                 <View style={styles.iconcontainer}>
                
                 <Image source={require('../../../img/추천컨텐츠.png')} style={{width: 90, height: 75}}/>


                  
                   <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    추천 콘텐츠
                    </Text>
                  


                 </View>
             </TouchableOpacity>    
                
             </View>
             <View style={styles.textcontainer}>
             <Text style={styles.textstyle}>취업 정보</Text>
             </View>
             <View style={styles.container}>
             <TouchableOpacity onPress={this.onPressR}>
                 <View style={styles.iconcontainer}>

                  <Image source={require('../../../img/NCS.png')} style={{width: 105, height: 75}}/>

         <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    NCS 홈페이지
          </Text>

          </View>
               
                
             </TouchableOpacity>
             <TouchableOpacity onPress={this.onPressW}>
                 <View style={styles.iconcontainer}>
                 <Image source={require('../../../img/워크넷.png')} style={{width: 140, height: 80}}/>
                
                 <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    워크넷
          </Text>
          </View>

                
             </TouchableOpacity>
  
             </View>
             <View style={styles.container}>
             <TouchableOpacity onPress={this.onPressS}>
                 <View style={styles.iconcontainer}>
                 <Image source={require('../../../img/사람인2.png')} style={{width: 180, height: 70}}/>
               
                 <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    사람인
          </Text>
          </View>
                 
             </TouchableOpacity>
                 
             <TouchableOpacity onPress={this.onPressJ}>
                 <View style={styles.iconcontainer}>
                 <Image source={require('../../../img/잡코리아2.png')} style={{width: 180, height:70}}/>
                
                 <Text style={{ margin: 5, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                    잡코리아
          </Text>


                 </View>
             </TouchableOpacity>
              
             </View>
          </View>

        )
      }
}

const styles = StyleSheet.create({

  iconcontainer: {
    width: 185,
    height: 120,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'grey',
    borderRadius: 15,
    margin: 5

  },

  textcontainer: {
    margin: 3,
    width: 420,
    height: 50,
    padding: 5
  },
  container: {
    width: 420,
    height: 130,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderColor: 'grey',
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
