import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

import {contacts} from '../config/data';
import colors from '../config/colors';
import {ListItem} from '../components/ListItem';
import storesApi from '../api/stores';

// export default class HelloWorldApp extends Component {
class Contacts extends Component {
  // state = {
  //   isFetching: false,
  //   fetchError: null,
  //   stores: [],
  // };

  // componentDidMount() {
  //   this.fetchStores();
  // }

  // async fetchStores() {
  //   this.setState({ isFetching: true, fetchError: null });
  //   try {
  //     const stores = await storesApi.getList();
  //     console.log('Stores', stores);
  //     this.setState({
  //       isFetching: false,
  //       stores: stores,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({
  //       isFetching: false,
  //       fetchError: error,
  //     });
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleRowPress = contact => {
    this.props.navigation.navigate('Details', contact);
  };

  render() {
    // const {isFetching, fetchError, stores} = this.state;
    // console.log(this.state);
    // // console.log(this.state);
    // // return null;
    // if (isFetching) {
    //   return <Text>Loading...</Text>;
    // } else if (fetchError) {
    //   return <Text>Failed</Text>;
    // } else {
      //console.log(stores);
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
      // return (
      //   <FlatList
      //     style={{backgroundColor: colors.background}}
      //     data={contacts}
      //     renderItem={({item}) => (
      //       <ListItem
      //         contact={item}
      //         onPress={() => this.handleRowPress(item)}
      //       />
      //     )}
      //     keyExtractor={item => item.email}
      //   />
      // );
    //}
  }
}

Contacts.propTypes = {
  navigation: PropTypes.object,
};

export default Contacts;
