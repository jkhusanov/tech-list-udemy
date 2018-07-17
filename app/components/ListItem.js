import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
  renderDescription() {
    const {library, expanded } = this.props;

    if (expanded) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }
  render() {
    const { title, id } = this.props.library.item
    const { titleStyle } = styles
    console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }

});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
