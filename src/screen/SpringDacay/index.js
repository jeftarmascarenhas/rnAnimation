import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SpringDacay extends Component {
  state = {
    title: 'SpringDacay',
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

export default SpringDacay
