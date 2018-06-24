import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";
import { 
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AlbumList from '../albums/album_list';
import Nnormallsit from '../albums/Nnormal_list';
import NScholarshiplist from '../albums/NScholarship_list';
import Nstudylist from '../albums/Nstudy_list';
import Nadmissionlist from '../albums/Nadmission_list';
import Axios from 'axios';
import Searchdetail from '../albums/search_detail';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class NoticeScene extends Component {

      constructor(props) {
        super(props);
        this.state = {
          value: "전체보기",
          searchtext: '',
          albums: [],
        }
      }


      onPress() {
        Actions.Notice();
      }


      onSelect(value, label) {
        this.setState({value : value});
      }

      componenetDidMount()
      {
       this._loadInitialState().done();
      }
      _loadInitialState = async() =>{
        var value = await AsyncStorage.getItem('searchtext');
     }

      display() {
        if (this.state.value === '학사공지') {
            return <Nstudylist />;
        }
        if (this.state.value === '일반공지') {
            return <Nnormallsit />;
        }
        if (this.state.value === '장학공지') {
            return <NScholarshiplist />;
        }
        if (this.state.value === '입학공지') {
            return <Nadmissionlist />;
        }
        if (this.state.value === '전체보기') {
            return <AlbumList />;
        }
        if (this.state.value === '검색'){
            if (this.state.albums.length === 0){
              return (
                <View>
                   <Text> 검색결과가 없습니다.</Text>
                </View>
              )
            } else {
              return (
              <ScrollView> 
      
                 {this.renderAlbums()}
      
              </ScrollView>
              )
            } 
        }
    }

    searchAND() {
      if (this.state.searchtext === ''){
        Alert.alert(
          '오류',
          '검색어를 입력해주세요',

          [
            { text: '확인', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
          ],
        );
      } else {
        this.search();
        this.setState({ value: '검색' });
      } 
    }
      render() {
        return(
          <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{width: 412, height: 70, borderWidth: 2, borderColor: 'white', flexDirection: 'row', backgroundColor: 'white' }} >
          <View style={{width: 300, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginTop: 4 }} >
          <Text style={{ marginLeft: 10 }}> 공지사항 분류별 검색 </Text>
          <Select
          onSelect = {this.onSelect.bind(this)}
          defaultText  = {this.state.value}
          style = {{borderWidth : 1, borderColor : "green"}}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}
        >
        <Option value = "학사공지">학사공지</Option>
        <Option value = "입학공지">입학공지</Option>
        <Option value = "장학공지">장학공지</Option>
        <Option value = "일반공지">일반공지</Option>
       

      </Select>
          </View>
          <View style={{ width: 100, height: 70,  flexDirection: 'row', marginLeft: 30 }}>
          <TouchableOpacity onPress={this.onPress}>
                                   <FontAwesome style={{ fontSize: 44, textAlign: 'center', color: '#1E90FF', marginTop: 10, marginLeft: 10 }}>{Icons.undo}</FontAwesome>
          </TouchableOpacity>
       </View>
          
     </View>
     
    
     <View style={{ width: 412, height: 70, flexDirection: 'row' }}>
     <View style={{ width: 300, height: 70, flexDirection: 'row'}}>
     <TextInput

      style={styles.textInput} 
      placeholder='검색'
      placeholderTextColor='gray'
      onChangeText={searchtx => this.setState({ searchtext: searchtx })}
      searchtext={this.state.searchtext}
      underlineColorAndroid='transparent'
      
      
     />
     </View>
     <View style={{ width: 100, height: 70, alignItems: 'flex-end', flexDirection: 'row', marginLeft: 30 }}>
     <TouchableOpacity onPress={this.searchAND.bind(this)}>

         <FontAwesome style={{ fontSize: 44, textAlign: 'center', color: '#1E90FF', marginLeft: 20, marginBottom: 14 }}>{Icons.search}</FontAwesome>
                
      </TouchableOpacity>
     </View>
     </View>
      
     
    <View>
        {this.display()}
    </View>
    </View>
      
        );
      }

      search = () => {

        Axios.post('http://10.70.20.236:3090/searchpost',
          {
            searchtext: this.state.searchtext
          })
           .then(response => this.setState({ albums: response.data}));
      }

      renderAlbums() {
        return this.state.albums.map(album =>
          <Searchdetail key={album.NUM} album={album} />
        );
      }


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    fontSize: 30,
    marginBottom: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  textInput: {
    color: 'gray',
    fontWeight: 'bold',
    alignSelf: 'stretch',
    fontSize: 22,
    height: 48,
    width: 314,
    marginLeft: 20,
    marginTop: 14,
    borderColor: 'black',
    borderWidth: 1
  },

  btn: {
    width: 50,
    height: 50,
    alignSelf: 'stretch',
    padding: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 25,
    backgroundColor: 'orange',
  },
  tail: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    alignItems: 'center'
  }
});

