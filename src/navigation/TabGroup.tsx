import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import TripsScreen from '../screens/TripsScreen';
import ReceiptsScreen from '../screens/ReceiptsScreen';
import Export from '../screens/Export';
import StartTrip from '../screens/timer/StartTrip';

const Tab = createBottomTabNavigator();

export default function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home';
          let backgroundCenterButtonColor = '#272829ff';
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Trips') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Receipts') {
            iconName = focused ? 'file-tray-full' : 'file-tray-outline';
          } else if (route.name === 'Export') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          } else if (route.name === 'Start Trip') {
            size = 40;
            color = '#fff';

            if (focused) {
              backgroundCenterButtonColor = '#0091d4ff';
            }

            iconName = 'add';
          }

          if (route.name === 'Start Trip') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: backgroundCenterButtonColor,
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  marginBottom: 30,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          } else {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -20,
                }}
              >
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          }
        },
        tabBarActiveTintColor: '#0091d4ff',
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 70,
          // position: 'absolute',
          // bottom: 50,
          // left: 20,
          // right: 20,
          // borderRadius: 50,
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarLabel: 'Dashboard', title: 'Home' }}
      />
      <Tab.Screen
        name="Trips"
        component={TripsScreen}
        options={{ tabBarLabel: 'Trips', title: 'Your Trips' }}
      />
      <Tab.Screen
        name="Start Trip"
        component={StartTrip}
        options={{ tabBarLabel: 'Start Trip', title: 'Start a New Trip' }}
      />
      <Tab.Screen
        name="Receipts"
        component={ReceiptsScreen}
        options={{ tabBarLabel: 'Receipts', title: 'Your Receipts' }}
      />
      <Tab.Screen
        name="Export"
        component={Export}
        options={{ tabBarLabel: 'Export', title: 'Export Data' }}
      />
    </Tab.Navigator>
  );
}