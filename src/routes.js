import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from './screen/Home'
import Timing from './screen/Timing'
import Spring from './screen/Spring'
import Decay from './screen/Decay'

const MainStack = createStackNavigator(
  {
    Home,
    Timing,
    Spring,
    Decay,
  },
  {
    initialRouteName: 'Home',
  },
)

const createNavigation = createAppContainer(MainStack)

export default createNavigation
