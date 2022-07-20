import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Stack
import DashboardStack from './stack/DeskboardStack';
import CreateStack from './stack/CreateStack';

//Icons
import DashboardIcon from '@assets/icons/dashboard';
import CreateIcon from '@assets/icons/create';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarStyle: {
              paddingVertical: hp(1),
          },
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <DashboardIcon
              colors={focused ? '#ff8800' : '#797a7c'}
              width={hp(2.5)}
              height={hp(2.5)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            paddingBottom: hp(0.5),
          },

          tabBarActiveTintColor: '#ff8800',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="CreateStack"
        component={CreateStack}
        options={{
          tabBarStyle: {
              paddingVertical: hp(1),
          },
          headerShown: false,
          title: 'Note',
          tabBarIcon: ({focused}) => (
            <CreateIcon
              colors={focused ? '#ff8800' : '#797a7c'}
              width={hp(2.5)}
              height={hp(2.5)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            paddingBottom: hp(0.5),
          },

          tabBarActiveTintColor: '#ff8800',
          tabBarInactiveTintColor: '#000',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator