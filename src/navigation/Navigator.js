// import React from 'react';
import React, { useEffect } from 'react';
import {
    Image,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
// import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from '../screens/LoginScreen';
import SliderScreen from '../screens/SliderScreen';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../components/SideMenu';
// import HomeScreen from '../screens/HomeScreen';

// const AuthStack = createStackNavigator();
// const AppStack = createStackNavigator();

const AuthStack = createDrawerNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator  drawerContent={props => <SideMenu {...props} />}>
        <AuthStack.Screen
            name="Slider"
            component={SliderScreen}
            options={{ title: "Slider", headerShown: false,swipeEnabled: false }}
        />

        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Sign In", headerShown: false, }}
        />
        <AuthStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false, }}
        />
    </AuthStack.Navigator>
);