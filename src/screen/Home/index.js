import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerBg: {
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#fdf86a',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
})

class Home extends Component {
  static navigationOptions = {
    title: 'Animation Examples',
    headerStyle: { ...styles.headerBg },
  }

  state = {
    title: 'Home',
    routes: [
      {
        id: 1,
        name: 'Timing',
        title: 'Timing',
      },
      {
        id: 2,
        name: 'SpringDacay',
        title: 'Spring and Dacay',
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
    const { title, routes } = this.state
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <View>
          {!!routes.length
            && routes.map(route => (
              <TouchableOpacity
                key={route.id}
                style={styles.button}
                onPress={() => this.handleRoute(route.name)}
              >
                <Text style={styles.buttonText}>{route.title}</Text>
              </TouchableOpacity>
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
