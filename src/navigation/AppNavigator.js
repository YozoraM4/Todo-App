import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

//Components
import TabNavigator from './TabNavigator'
import store from '../store'

const AppNavigator = () => {
  return (
   <Provider store={store}>
      <NavigationContainer>
          <TabNavigator />
      </NavigationContainer>
   </Provider>
  )
}

export default AppNavigator