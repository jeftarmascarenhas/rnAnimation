import React, { Component } from 'react'
import { View, Dimensions, Animated } from 'react-native'

import { Button } from '../../components'
import stylesProps from './styles'

const WIDTH = Dimensions.get('window').width
const propStyles = { WIDTH }
const styles = stylesProps(propStyles)

class Timing extends Component {
  static navigationOptions = {
    title: 'Timing',
  }

  state = {
    ballY: new Animated.Value(0),
  }

  handleTimingBasic = () => {
    const { ballY } = this.state
    ballY.setValue(0)
    Animated.timing(ballY, {
      toValue: 300,
      duration: 1000,
    }).start()
  }

  render() {
    const { ballY } = this.state
    return (
      <View style={styles.container}>
        <Button title="Timing Basic" onPress={this.handleTimingBasic} />
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

export default Timing
