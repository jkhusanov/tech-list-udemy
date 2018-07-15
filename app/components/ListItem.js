import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardSection } from './common';

export default class ListItem extends React.Component{
  render(){
    const { title } = this.props.library.item
    const { titleStyle } = styles
    return(
      <CardSection>
        <Text style = {titleStyle}>
          {title}
        </Text>
      </CardSection>

    );
  }
}

const styles = StyleSheet.create({

  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }

})