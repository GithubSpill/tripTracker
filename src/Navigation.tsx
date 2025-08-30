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
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { PiAlignBottomSimpleFill } from 'react-icons/pi';


const TimerStack = createNativeStackNavigator();
function TimerStackGroup() {
  return (
    <TimerStack.Navigator>
      <TimerStack.Screen name="TripsScreen" component={TripsScreen} />
    </TimerStack.Navigator>
  )
}

const DashboardStack = createNativeStackNavigator();
function DashboardStackGroup() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="StartTrip" component={StartTrip} />
      <DashboardStack.Screen name="EndTrip" component={EndTrip} />
    </DashboardStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: 'home' | 'car' | 'filetext1' = 'home';
          if (route.name === 'DashboardStackGroup') {
            iconName = 'home';
          } else if (route.name === 'TimerStackGroup') {
            iconName = 'car';
          } else if (route.name === 'Receipts') {
            iconName = 'filetext1';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0091d4ff',
        tabBarStyle: { ...styles.tabBar, alignSelf: 'center' },
      })}
    >
      <Tab.Screen name="DashboardStackGroup" component={DashboardStackGroup} options={{headerShown: false, tabBarLabel: "Dashboard"}}/>
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
const screenWidth = Dimensions.get('window').width;
const tabBarWidth = Math.min(screenWidth * 0.95, 400);
const marginLeft = (screenWidth - tabBarWidth) / 2;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20, // Distance from the bottom of the screen
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    paddingTop: 5,
    width: tabBarWidth, // Keeps the width consistent
    marginLeft: marginLeft,
  },
});

export { styles };