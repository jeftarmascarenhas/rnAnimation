import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from './screen/Home'
import Timing from './screen/Timing'
import SpringDacay from './screen/SpringDacay'

const MainStack = createStackNavigator(
  {
    Home,
    Timing,
    SpringDacay,
  },
  {
    initialRouteName: 'Timing',
  },
)

const createNavigation = createAppContainer(MainStack)

export default createNavigation
