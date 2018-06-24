import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

//import PureChart from 'react-native-pure-chart';
import PureChart from 'react-native-pure-chart';


const NCSresultdetail = ({ result }) => {
    const { TEST_DATE, SCORE1, SCORE2, SCORE3, SCORE4, SCORE5, SCORE6, SCORE7, SCORE8, SCORE9, SCORE10 } = result;
    //const sampleData = [SEC1, SEC2, SEC3];
   
 
return (

    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ marginLeft: 30, justifyContent: 'center', width: 80 }}>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>의사소통능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>수리능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>문제해결능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>자기개발능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>자원관리능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>대인관계능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>정보능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>기술능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>조직이해능력</Text></View>
       <View style={styles.textcontainer}><Text style={{ fontWeight: 'bold' }}>직업윤리</Text></View>
      
      </View>




      <View style={{ flex: 1, justifyContent: 'center', marginLeft: 30}}>

       <View style={{ margin: 5, height: 20, width: SCORE1 * 2, backgroundColor: 'red', alignItems: 'center'}}><Text style={{  fontWeight: 'bold' }}>{SCORE1}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE2 * 2, backgroundColor: 'orange', alignItems: 'center'}}><Text style={{  fontWeight: 'bold' }}>{SCORE2}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE3 * 2, backgroundColor: 'yellow', alignItems: 'center'}}><Text style={{  fontWeight: 'bold' }}>{SCORE3}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE4 * 2, backgroundColor: 'green', alignItems: 'center'}}><Text style={{ fontWeight: 'bold' }}>{SCORE4}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE5 * 2, backgroundColor: 'blue', alignItems: 'center'}}><Text style={{ fontWeight: 'bold' }}>{SCORE5}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE6 * 2, backgroundColor: '#088A85', alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>{SCORE6}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE7 * 2, backgroundColor: '#170B3B', alignItems: 'center' }}><Text style={{  fontWeight: 'bold' }}>{SCORE7}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE8 * 2, backgroundColor: '#5FB404', alignItems: 'center'  }}><Text style={{ fontWeight: 'bold' }}>{SCORE8}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE9 * 2, backgroundColor: '#B40431', alignItems: 'center' }}><Text style={{  fontWeight: 'bold' }}>{SCORE9}</Text></View>
       <View style={{ margin: 5, height: 20, width: SCORE10 * 2, backgroundColor: 'yellow', alignItems: 'center' }}><Text style={{fontWeight: 'bold' }}>{SCORE10}</Text></View>

      </View>

    </View>
);
};
//
//<PureChart data={sampleData} type={'bar'} xAxisColor={'red'} width={'100%'} height={100} />

const styles = StyleSheet.create({
    textcontainer: {
        margin: 5,
        height: 20, 
        width: 100, 
       
    },
    container: {

        justifyContent: 'center', 
        //alignItems: 'center',
        flex: 1,
    },
    chart: {

        width: 10,
        height: 100,
    },
});
export default NCSresultdetail;
