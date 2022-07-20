import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Components
import Create from '@screens/Create';
const Stack = createNativeStackNavigator();

const CreateStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Create' component={Create}/>
    </Stack.Navigator>
  )
}

export default CreateStack