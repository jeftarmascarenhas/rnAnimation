import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Timing extends Component {
  state = {
    title: 'Timing',
  }

  render() {
    const { title } = this.state
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default Timing
