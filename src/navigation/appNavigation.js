import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';


import Splash from '../screen/splash';
import Onbording from '../screen/onbording';
import Login from '../screen/login';
import Signup from '../screen/signup';
import Otpverify from '../screen/otpverify';
import Otpverifychange from '../screen/otpverifychange';
import Profiledetail from '../screen/profiledetail';
import Membership from '../screen/membership';
import Paymentmethod from '../screen/paymentmethod';
import HOME from '../screen/dashboard';
import Alert from '../screen/alert';
import Notification from '../screen/alert';
import Connect from '../screen/connect';
import changenumber from '../screen/changenumber';
import Humanbook from '../screen/humanbook';
import T_C from '../screen/T_C';
import Humanbookcreate from '../screen/humanbookcreate';
import Humanbookdetails from '../screen/humanbookdetails';
import Fullscreen from '../screen/humanbookdetails/fullscreen';
import Recorder from '../screen/humanbookcreate/recorder';
import Programs from '../screen/programs';
import updateprofile from '../screen/updateprofile';
import profilemenu from '../screen/profilemenu';
import Coupons from '../screen/coupons';
import Offer from '../screen/offer';
import Offercreate from '../screen/offercreate';
import Offeredit from '../screen/offercreate/edit';
import Inbox from '../screen/inbox';
import About from '../screen/about';
import UserProfile from '../screen/profile';
import Addalert from '../screen/addalert';



const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onbording"
          component={Onbording}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="profilemenu"
          component={profilemenu}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="updateprofile"
          component={updateprofile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Otpverify"
          component={Otpverify}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Otpverifychange"
          component={Otpverifychange}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profiledetail"
          component={Profiledetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="changenumber"
          component={changenumber}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Membership"
          component={Membership}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Paymentmethod"
          component={Paymentmethod}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Humanbook"
          component={Humanbook}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Humanbookcreate"
          component={Humanbookcreate}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="T_C"
          component={T_C}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Recorder"
          component={Recorder}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Programs"
          component={Programs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Connect"
          component={Connect}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Coupons"
          component={Coupons}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Offer"
          component={Offer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Offercreate"
          component={Offercreate} 
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Offeredit"
          component={Offeredit}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Humanbookdetails"
          component={Humanbookdetails}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Addalert"
          component={Addalert}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Alert"
          component={Alert}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Inbox"
          component={Inbox}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Fullscreen"
          component={Fullscreen}
          
        />
         {/* ---------------------custom bottom tab------------------ */}
         <Stack.Screen
          options={{headerShown: false}}
          name="HOME"
          component={HOME}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Notification"
          component={Notification}
          
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="About"
          component={About}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
