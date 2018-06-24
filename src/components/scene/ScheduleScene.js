import React, { Component } from 'react';
import { 
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity
       } from 'react-native';
import Axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Select, Option } from 'react-native-chooser';

import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class ScheduleScene extends Component {
    onPress() {
      Actions.Schedule();
      }
    onSelect(value, label) {
        this.setState({value : value});
      }

      Database = () => {
        global.lecture = '데이터베이스';
        global.room = '신공학관 3163';
        global.propes = '이창환 교수님';
        Actions.CheckPage();
      }
      Tongsinmang = () => {
        global.lecture = '초고속통신망';
        global.room = '신공학관 6122';
        global.propes = '이재훈 교수님';
        Actions.CheckPage();
      }
      wireless = () => {
        global.lecture = '무선통신및실험';
        global.room = '신공학관 6122';
        global.propes = '임민중 교수님';
        Actions.CheckPage();
      }
      software = () => {
        global.lecture = '소프트웨어공학및설계';
        global.room = '신공학관 3163';
        global.propes = '김웅섭 교수님';
        Actions.CheckPage();

      }
      capstone = () => {
        global.lecture = '캡스톤디자인';
        global.room = '신공학관 5143';
        global.propes = '박은찬 교수님';
        Actions.CheckPage();
      }
      render() {
        return (
          <ScrollView>
            <View style={styles.container}>
               <View style={{ width: 100, height: 40, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
               <FontAwesome style={{ fontSize: 50, textAlign: 'center' }}>{Icons.calendar}</FontAwesome>
               <Text style={styles.textstyle}> 시간표 </Text>
               </View>
               <View style={{ width: 320, height: 40, marginLeft: 70 }}>
                 <Select
                    onSelect = {this.onSelect.bind(this)}
                    defaultText  = "18학년 1학기"
                    style = {{ borderWidth: 1, borderColor: 'green' }}
                    backdropStyle = {{ backgroundColor: '#d3d5d6' }}
                    optionListStyle = {{ backgroundColor: '#F5FCFF' }}
                 >
                  <Option value="18학년 1학기">18학년 1학기</Option>
                  <Option value="18학년 2학기">18학년 2학기</Option>
                 </Select>
               </View>   
            </View>
            <View style={{ flexDirection: 'column'  }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.tablecontainer}>
              </View>
              <View style={styles.tablecontainer}>
                <Text style={{ marginLeft: 23, marginTop: 10, fontSize: 20}}>월</Text>
              </View>
              <View style={styles.tablecontainer}>
              <Text style={{ marginLeft: 23, marginTop: 10, fontSize: 20}}>화</Text>
              </View>
              <View style={styles.tablecontainer}>
              <Text style={{ marginLeft: 23, marginTop: 10, fontSize: 20}}>수</Text>
              </View>
              <View style={styles.tablecontainer}>
              <Text style={{ marginLeft: 23, marginTop: 10, fontSize: 20}}>목</Text>
              </View>
              <View style={styles.tablecontainer}>
              <Text style={{ marginLeft: 23, marginTop: 10, fontSize: 20}}>금</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>09:00</Text>
             </View>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>10:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'red' }}>
               <Text style={styles.textcontainer}>
            데이터베이스체제
                </Text>
             </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width: 67, height: 50, backgroundColor: 'red' }}>
               <Text style={styles.textcontainer}>
            데이터베이스체제
                </Text>
              
              
               </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>11:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'red' }}>
              
               </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'red' }}>
             
              
              </View>
              
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>12:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
                <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'red' }}>
             
               
                 </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <TouchableOpacity onPress={() => this.Database()}>
                 <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'red' }}>
                
                 </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
           </View> 








           
           <View style={{ flexDirection: 'row' }}>
          
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>13:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.Tongsinmang()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'green' }}>
               <Text style={styles.textcontainer}>
                   초고속통신망</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.software()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'blue' }}>
              <Text style={styles.textcontainer}>
                    소프트웨어공학 및 실습</Text>
               </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={() => this.Tongsinmang()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'green' }}>
               <Text style={styles.textcontainer}>
                    초고속통신망</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.software()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'blue' }}>
              <Text style={styles.textcontainer}>
                   소프트웨어공학 및 실습</Text>
               </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>14:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.Tongsinmang()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'green' }}>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.software()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'blue' }}>
              </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.Tongsinmang()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'green' }}>
               </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => this.software()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width: 67, height: 50, backgroundColor: 'blue' }}>
               </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>15:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.wireless()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'purple' }}>
              <Text style={styles.textcontainer}>
                   무선통신 및 실험</Text>
              </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <TouchableOpacity onPress={() => this.wireless()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'purple' }}>
               <Text style={styles.textcontainer}>
                   무선통신 및 실험</Text>
               </View>
             </TouchableOpacity>
             <View style={styles.tablecontainer}>
             </View>
             <View style={styles.tablecontainer}>
             </View>
           </View> 
           <View style={{ flexDirection: 'row' }}>
             <View style={styles.tablecontainer}>
             <Text style={{ fontSize: 20, marginTop: 7 }}>16:00</Text>
             </View>
             <TouchableOpacity onPress={() => this.wireless()}>
              <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'purple' }}>
               </View>
             </TouchableOpacity>
            <View style={styles.tablecontainer}>
            </View>
            <TouchableOpacity onPress={() => this.wireless()}>
             <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'purple' }}>
             </View>
            </TouchableOpacity>
            <View style={styles.tablecontainer}>
            </View>
            <View style={styles.tablecontainer}>
            </View>
           </View> 
          <View style={{ flexDirection: 'row' }}>
           <View style={styles.tablecontainer}>
           <Text style={{ fontSize: 20, marginTop: 7 }}>17:00</Text>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
         </View> 
         <View style={{ flexDirection: 'row' }}>
           <View style={styles.tablecontainer}>
           <Text style={{ fontSize: 20, marginTop: 7 }}>18:00</Text>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <View style={styles.tablecontainer}>
           </View>
           <TouchableOpacity onPress={() => this.capstone()}>
             <View style={{ borderWidth: 1, borderColor: 'white', width:67 , height: 50, backgroundColor: 'orange' }}>
             <Text style={styles.textcontainer}>
               캡스톤디자인</Text>
         
              </View>
           </TouchableOpacity>
          <View style={styles.tablecontainer}>
          </View>
         </View> 
       <View style={{ flexDirection: 'row' }}>
         <View style={styles.tablecontainer}>
         <Text style={{ fontSize: 20, marginTop: 7 }}>19:00</Text>
         </View>
         <View style={styles.tablecontainer}>
         </View>
         <View style={styles.tablecontainer}>
         </View>
        <View style={styles.tablecontainer}>
         </View>
         <TouchableOpacity onPress={() => this.capstone()}>
               <View style={{ borderWidth: 1, borderColor: 'white', width: 67, height: 50, backgroundColor: 'orange' }}>
             
         </View>
         </TouchableOpacity>
         <View style={styles.tablecontainer}>
         </View>
        </View> 
       <View style={{ flexDirection: 'row' }}>
        <View style={styles.tablecontainer}>
        <Text style={{ fontSize: 20, marginTop: 7 }}>20:00</Text>
          </View>
         <View style={styles.tablecontainer}>
         </View>
         <View style={styles.tablecontainer}>
         </View>
        <View style={styles.tablecontainer}>
       </View>
       <TouchableOpacity onPress={() => this.capstone()}>
          <View style={{ borderWidth: 1, borderColor: 'white', width:67, height: 50, backgroundColor: 'orange' }}>
           </View>
       </TouchableOpacity>
      <View style={styles.tablecontainer}>
       </View>
    </View> 

          
        </View>

        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({

textcontainer: {
color: 'white',
marginLeft: 5,

},
tablecontainer: {
  borderWidth: 1, borderColor: 'white',
  width: 67,
  height: 50
},
tablecontainer2: {
  borderWidth: 1, borderColor: 'white',
  width: 67,
  height: 50
},
container: {
  width: 420,
  height: 70,
  backgroundColor: 'white',
  borderWidth: 1, borderColor: 'white',
  flexDirection: 'row',
  alignItems: 'center'
},
textstyle: {
  fontSize: 30,
  fontWeight: 'bold'
}
}
)