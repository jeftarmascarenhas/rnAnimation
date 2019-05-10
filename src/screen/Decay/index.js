import React, { Component } from 'react'
import { View, Animated } from 'react-native'

import { Button } from '../../components'
import styles from './styles'

class Decay extends Component {
  static navigationOptions = {
    title: 'Decay',
  }

  state = {
    ballOneY: new Animated.Value(0),
    ballTwoY: new Animated.Value(0),
    ballThreeY: new Animated.Value(0),
  }

  handleDecayBasic = () => {
    const { ballOneY, ballTwoY, ballThreeY } = this.state
    ballOneY.setValue(0)
    Animated.decay(ballOneY, {
      velocity: 0.5,
    }).start()
    ballTwoY.setValue(0)
    Animated.decay(ballTwoY, {
      velocity: 0.7,
    }).start()
    ballThreeY.setValue(0)
    Animated.decay(ballThreeY, {
      velocity: 0.9,
    }).start()
  }

  render() {
    const { ballOneY, ballTwoY, ballThreeY } = this.state
    return (
      <View style={styles.container}>
        <Button title="Decay Basic" onPress={this.handleDecayBasic} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Animated.View
            style={[
              styles.ball,
              {
                top: ballOneY,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              {
                top: ballTwoY,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.ball,
              {
                top: ballThreeY,
              },
            ]}
          />
        </View>
      </View>
    )
  }
}

export default Decay
