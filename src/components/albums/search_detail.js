import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, Linking} from 'react-native';


import { Card, CardSection } from '../common';
// import Card from '../common/card';
// import CardSection from '../common/card_section';



const Searchdetail = ({ album }) => {
  const { NUM, TITLE, URL, CONTENT, WRITER, TYPE, TIMEDATE, IMAGEURL } = album;
  const {  
    headerTextStyle, dateTextStyle, datedate
    } = styles;
  
  return ( 
      
    <Card> 
    <TouchableOpacity  onPress={() => Linking.openURL(URL)}>
    <CardSection> 
            <View>
           
                <Text style={headerTextStyle}>{TITLE}</Text>
                
                <Text style={dateTextStyle}>{TIMEDATE}</Text>
                
            </View> 
    </CardSection>
  
    </TouchableOpacity>
</Card>
      
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
    fontSize: 14
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

export default Searchdetail;
