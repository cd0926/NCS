import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import Searchdetail from './search_detail';

import { Button, Spinner } from '../common';
import { SearchBar } from 'react-native-elements';


class SearchList extends Component {

  state = { albums: [],};

 
  componentDidMount() {
    axios.post('http://10.70.20.236:3090/searchpost') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ albums: response.data }));
  }

 

  renderAlbums() {
    return this.state.albums.map(album =>
      <Searchdetail key={album.NUM} album={album} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.albums.length === 0) {
      return (
        <View>
          <Text> 검색결과가 없습니다. </Text>
        </View>
      )
    }

    
    return (

      <View>
      <ScrollView> 
      
        {this.renderAlbums()}
      
      </ScrollView>

      <View style={{ width: 200, height: 50, borderWidth: 2, backgroundColor: 'red' }} />

      </View>
    );
  }
}

export default SearchList;
