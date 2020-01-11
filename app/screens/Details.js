import React, {Component} from 'react';
import PropTypes from 'prop-types';
import colors from '../config/colors';
import {Text, View, FlatList} from 'react-native';

import {Header} from '../components/UserDetails';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <Header {...contact} />
      </View>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
