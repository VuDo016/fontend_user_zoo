import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/TabBarStyles';
import colors from '../../assets/colors/colors';
import EventScreen from '../screens/Main/EventScreen';
import AnimalScreen from '../screens/Main/AnimalScreen';
import MapScreen from '../screens/Main/MapScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

function Screen1({ navigation }) {
  return (
    <View>
      <EventScreen navigation={navigation} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View>
      <AnimalScreen navigation={navigation} />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View>
      <MapScreen navigation={navigation} />
    </View>
  );
}

function Screen4({ navigation }) {
  return (
    <View>
      <ProfileScreen navigation={navigation} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class TabBar extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: '13%', borderTopWidth: 2, borderTopColor: colors.mainHome }
        }}
      >
        <Tab.Screen
          name="Event"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/event.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Sự kiện
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen1} />
        <Tab.Screen
          name="Animal"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/animal.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Động vật
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen2} />
        <Tab.Screen
          name="Ticket"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/ticket.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Mua vé
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen3} />
        <Tab.Screen
          name="Map"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/map.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Bản đồ
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen3} />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/profile.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Hồ sơ
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen4} />
      </Tab.Navigator>
    );
  }
}