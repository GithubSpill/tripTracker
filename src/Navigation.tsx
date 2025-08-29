// filepath: /home/thor/Desktop/react-projects/uber-tracker-app/tripTracker/src/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TripsScreen from './screens/TripsScreen';
import ReceiptsScreen from './screens/ReceiptsScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartTrip from './screens/timer/StartTrip';
import EndTrip from './screens/timer/EndTrip';


const TimerStack = createNativeStackNavigator();
function TimerStackGroup() {
  return (
    <TimerStack.Navigator>
      <TimerStack.Screen name="TripsScreen" component={TripsScreen} />
      <TimerStack.Screen name="StartTrip" component={StartTrip} options={{
        presentation: 'transparentModal',
      }}/>
      <TimerStack.Screen name="EndTrip" component={EndTrip} />
    </TimerStack.Navigator>
  )
}




const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: 'home' | 'car' | 'filetext1' = 'home';
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'TimerStackGroup') {
            iconName = 'car';
          } else if (route.name === 'Receipts') {
            iconName = 'filetext1';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0091d4ff',
      })
      }
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="TimerStackGroup" component={TimerStackGroup} options={{headerShown: false, tabBarLabel: "Trips"}}/>
      <Tab.Screen name="Receipts" component={ReceiptsScreen} />
    </Tab.Navigator>
  )
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}