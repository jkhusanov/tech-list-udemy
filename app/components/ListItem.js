import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
  renderDescription() {
    const {library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style = {styles.descriptionStyle}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { title, id } = this.props.library.item
    const { titleStyle } = styles
    console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.expanded ? this.props.selectLibrary(null) : this.props.selectLibrary(id), 
          LayoutAnimation.linear();
        }}
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
  }, 
  descriptionStyle: {
    flex: 1, 
    fontSize: 16, 
    paddingHorizontal: 10
  }

});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
