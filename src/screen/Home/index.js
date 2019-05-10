import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from '../../components'
import styles from './styles'

class Home extends Component {
  static navigationOptions = {
    title: 'Animation Examples',
    headerStyle: { ...styles.headerBg },
  }

  state = {
    routes: [
      {
        id: 1,
        name: 'Timing',
        title: 'Timing',
      },
      {
        id: 2,
        name: 'Spring',
        title: 'Spring',
      },
      {
        id: 3,
        name: 'Decay',
        title: 'Decay',
      },
    ],
  }

  handleRoute = (name) => {
    const { navigation } = this.props
    if (!name) {
      Alert.alert('The route not informated by the dev. o/')
      return
    }
    navigation.navigate(name)
  }

  render() {
    const { routes } = this.state
    return (
      <View style={styles.container}>
        <View style={[styles.paragraph, styles.borderBottom]}>
          <Text style={styles.title}>React Native Animations</Text>
          <Text style={styles.subtitle}>By Jeftar Mascarenhas</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.title}>Basic Animations</Text>
        </View>
        <View>
          {!!routes.length
            && routes.map(route => (
              <Button
                key={route.id}
                title={route.title}
                onPress={() => this.handleRoute(route.name)}
              />
            ))}
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Home
