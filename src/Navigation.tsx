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


const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: 'home' | 'car' | 'filetext1' = 'home';
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Trips') {
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
      <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarLabel: "Dashboard"}}/>
      <Tab.Screen name="Trips" component={TripsScreen} options={{tabBarLabel: "Trips"}}/>
      <Tab.Screen name="Receipts" component={ReceiptsScreen} options={{tabBarLabel: "Receipts"}}/>
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
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    paddingTop: 5,
    width: tabBarWidth,
    marginLeft: marginLeft,
  },
});

export { styles };