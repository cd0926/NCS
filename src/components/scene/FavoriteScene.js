import React, { Component } from 'react';
import { Select, Option } from 'react-native-chooser';
import { 
  AppRegistry,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import flatlistdata from './flatlistdata';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class FlatListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeRowKey: null
      };
    }
    render() {
      const swipeSettings = {
        autoClose: true,
        onClose: (secId, rowId, direction) => {
          if (this.state.activeRowKey != null) {
            this.setState({ activeRowKey: null });
          }
        },
        onOpen: (secId, rowId, direction) => {
          this.setState({ activeRowKey: this.props.item.key });
        },
        right: [
          {
            onPress: () => {
              const deletingRow = this.state.activeRowKey;
              Alert.alert(
                '알림',
                '즐겨찾기를 삭제하시겠습니까?',
                [
                  { text: '아니요', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  { text: '네', onPress: () => {
                    flatlistdata.splice(this.props.index, 1);
                    this.props.parentFlatlist.refreshFlatlist(deletingRow);
                  } },
                ]
              );
            },
            text: '삭제',
            type: 'delete'
          }
        ],
        rowId: this.props.index,
        sectionId: 1
      };
      
        return (
          <Swipeout {...swipeSettings}>
            <View 
              style={{
                flex: 1,
                backgroundColor: this.props.index % 2 === 0 ? '#CEBDBD' : '#D8D8D8',
                height: 50,
                padding: 10,
                borderWidth: 4,
                borderColor: 'white'
              }}
            >
               <Text style={{fontSize: 18 }}>{this.props.item.key}</Text>
            </View>   
            </Swipeout>
        );
    }
}

export default class FavoriteScene extends Component {
      
      constructor(props) {
        super(props);
        this.state = ({
          deletedRowKey: null,
        });
      }
  
      onSelect(value, label) {
        this.setState({value : value});
      }
      onPress() {
        Actions.FavoriteEdit();
        }
      refreshFlatlist = (deletedKey) => {
        this.setState((prevState) => {
          return {
            deletedRowKey: deletedKey
          };
        });
      }
      
      render() {
        
        return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
           <View style={{ width: 412, height: 70, borderWidth: 2, borderColor: 'white', flexDirection: 'row' }} >
            <View style={{ width: 70, height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
             <TouchableOpacity onPress={this.onPress}>
             <FontAwesome style={{ fontSize: 44, textAlign: 'center', color: '#FFD700' }}>{Icons.star}</FontAwesome>
             </TouchableOpacity>
            </View>
          <View style={{width: 450, height: 70 ,alignItems: 'center',justifyContent: 'center' }} >
           <Select
             onSelect = {this.onSelect.bind(this)}
             defaultText  = "전체보기"
             style = {{ borderWidth: 1, borderColor: 'green' }}
             backdropStyle = {{ backgroundColor: '#d3d5d6' }}
             optionListStyle = {{ backgroundColor: '#F5FCFF' }}
           >
                <Option value="공지사항">공지사항</Option>
                <Option value="기타사이트">기타 사이트</Option>
      
      
          </Select>

          </View> 
         </View>
        <FlatList
          data={flatlistdata}
          renderItem={({ item, index }) => {
              return (
                  <FlatListItem item={item} index={index} parentFlatlist={this}>
                  
                  </FlatListItem>);
          }}
        >
        </FlatList>

        </View>
    );
  }
}

