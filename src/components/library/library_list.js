import React, { Component } from 'react';
// import { ListView } from 'react-native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './list_item';

class LibraryList extends Component {
  // componentDidMount() {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows(this.props.libraries);
  // }

  // renderRow(library) {
  //   return <ListItem library={library} />;
  // }

  // render() {
  //   return (
  //     <ListView
  //       dataSource={this.dataSource}
  //       renderRow={this.renderRow}
  //     />
  //   );
  // }
  
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => <ListItem library={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
