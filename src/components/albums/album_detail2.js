import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, WebView, Image } from 'react-native';


import { Card, CardSection } from '../common';
// import Card from '../common/card';
// import CardSection from '../common/card_section';



const AlbumDetail2 = ({ album }) => {
  const { NUM, TITLE, URL, CONTENT, WRITER, TYPE, TIMEDATE, IMAGEURL } = album;
  const {  
    headerTextStyle, dateTextStyle, datedate
    } = styles;
  
  return ( 
      
    <View style={styles.container}>
                   <Text style={headerTextStyle}>
                    글 번호 {NUM}  {TYPE} {'\n'} 
                   </Text>
                  
                  <Text style={dateTextStyle}>{TITLE}{'\n'} </Text>
                  <Text style={datedate}>{TIMEDATE} 작성자 :{WRITER} {'\n'}{'\n'}  </Text>
                  
                  <Text style={headerTextStyle}>{CONTENT}</Text>
                  <Image
          style={{width: 400, height: 900}}
          source={{uri: IMAGEURL }}
        />
              </View> 
      
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  dateTextStyle: {
    fontSize: 22
  },
  datedate: {
    fontSize: 14,
    textAlign: 'right'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail2;
