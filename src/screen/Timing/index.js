import React, { Component } from 'react'
import {
  View, StyleSheet, Dimensions, Animated,
} from 'react-native'

import { Button } from '../../components'

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ball: {
    width: WIDTH / 6,
    height: WIDTH / 6,
    borderRadius: WIDTH / 6,
    backgroundColor: '#fdf86a',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 0.2,
  },
})

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
