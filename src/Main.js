import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen';
import TabBar from './components/TabBar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
import BuyTicketScreen from './screens/BuyTicket/BuyTicketScreen';
import ChoiceTypeTicket from './screens/BuyTicket/ChoiceTypeTicketScreen';
import ChoiceServiceScreen from './screens/BuyTicket/ChoiceServiceScreen';
import ChoiceVehicalScreen from './screens/BuyTicket/ChoiceVehicalScreen';
import InfoBill from './screens/BuyTicket/InfoBill';
import InforAnimal from './screens/Other/InforAnimal';

const stack = createNativeStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
      <stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <stack.Screen name="TabBar" component={TabBar} />
        <stack.Screen name="BuyTicketScreen" component={BuyTicketScreen} />
        <stack.Screen name="ChoiceTypeTicket" component={ChoiceTypeTicket} />
        <stack.Screen name="ChoiceServiceScreen" component={ChoiceServiceScreen} />
        <stack.Screen name="ChoiceVehicalScreen" component={ChoiceVehicalScreen} />
        <stack.Screen name="InfoBill" component={InfoBill} />
        <stack.Screen name="InforAnimal" component={InforAnimal} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}