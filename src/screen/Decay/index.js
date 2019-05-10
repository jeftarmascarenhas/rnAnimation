import React, { Component } from 'react'
import { View, Animated } from 'react-native'

import { Button } from '../../components'
import styles from './styles'

class Decay extends Component {
  static navigationOptions = {
    title: 'Decay',
  }

  state = {
    ballY: new Animated.Value(0),
  }

  handleDecayBasic = () => {
    const { ballY } = this.state
    ballY.setValue(0)
    Animated.decay(ballY, {
      velocity: 0.5,
    }).start()
  }

  render() {
    const { ballY } = this.state
    return (
      <View style={styles.container}>
        <Button title="Decay Basic" onPress={this.handleDecayBasic} />
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

export default Decay
