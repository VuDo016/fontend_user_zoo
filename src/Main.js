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
import InforEvent from './screens/Other/InforEvent';
import VNpayScreen from './screens/BuyTicket/VNpayScreen';
import InforUser from './screens/Other/InforUser';
import EditUser from './screens/Other/EditUser';
import ChangePass from './screens/Other/ChangePass';
import TicketsPaidScreen from './screens/BuyTicket/TicketsPaidScreen';
import HisTicket from './screens/Other/HisTicket';
import CreateNew from './components/Comment/CreateComment';
import ContactUs from './screens/Other/ContactUs';
import Donation from './screens/Other/Donation';
import WhyDonation from './screens/Other/WhyDonation';

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
        <stack.Screen name="InforEvent" component={InforEvent} />
        <stack.Screen name="VNpayScreen" component={VNpayScreen} />
        <stack.Screen name="InforUser" component={InforUser} />
        <stack.Screen name="EditUser" component={EditUser} />
        <stack.Screen name="ChangePass" component={ChangePass} />
        <stack.Screen name="TicketsPaidScreen" component={TicketsPaidScreen} />
        <stack.Screen name="HisTicket" component={HisTicket} />
        <stack.Screen name="CreateNew" component={CreateNew} />
        <stack.Screen name="ContactUs" component={ContactUs} />
        <stack.Screen name="Donation" component={Donation} />
        <stack.Screen name="WhyDonation" component={WhyDonation} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}