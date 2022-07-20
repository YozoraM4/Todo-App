import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Components
import Deskboard from '@screens/Deskboard';
const Stack = createNativeStackNavigator();

const DeskboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Deskboard' component={Deskboard}/>
    </Stack.Navigator>
  )
}

export default DeskboardStack