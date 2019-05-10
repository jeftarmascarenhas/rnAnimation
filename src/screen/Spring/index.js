import React, { Component } from 'react'
import { View, Animated } from 'react-native'

import { Button } from '../../components'
import styles from './styles'

class Spring extends Component {
  static navigationOptions = {
    title: 'Spring',
  }

  state = {
    ballY: new Animated.Value(0),
  }

  handleSpringBasic = () => {
    const { ballY } = this.state
    ballY.setValue(0)
    Animated.spring(ballY, {
      toValue: 300,
      bounciness: 30,
      delay: 10,
    }).start()
  }

  render() {
    const { ballY } = this.state
    return (
      <View style={styles.container}>
        <Button title="Spring Basic" onPress={this.handleSpringBasic} />
        <Animated.View
          style={[
            styles.ball,
            {
              top: ballY,
            },
          ]}
        />
      </View>
    )
  }
}

export default Spring
