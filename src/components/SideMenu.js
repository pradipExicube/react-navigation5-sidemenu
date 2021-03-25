import React from 'react';
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {View, Text, Image, TouchableOpacity, ImageBackground} from "react-native";
// import * as actionCreator from '../redux/actions/userAuth';
// import AsyncStorage from '@react-native-community/async-storage';
// import { useSelector, useDispatch } from 'react-redux';

// import styles from '../styles/sidebar'
// import { ScrollView } from 'react-native-gesture-handler';


const SideMenu = (props) => {

    // const dispatch = useDispatch();
    // const logout = async () => {
    //     console.log("@@@@@@@@@@ Called @@@@@@@@@")
            
    //     dispatch(actionCreator.storeLoginStatus(false));
    //     dispatch(actionCreator.storeUserDetails(null)); 
    //     // await AsyncStorage.removeItem('userDetails')
    //     // await AsyncStorage.removeItem('isUserLoggedIn');
    //     console.log("@@@@@@@@@@ Logout @@@@@@@@@")
    // };

    // const openPage = async (destination) => {
    //     // dispatch(actionCreator.updateNavigateFrom('menu'));
    //     console.log("@@@@@@@@@@ Called @@@@@@@@@")
    //     console.log(destination)
    //     props.navigation.toggleDrawer();
    //     // props.navigation.navigate(destination)
    // };

    return (
        <View>
            <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Slider')}}
            ><Text>This is sidemenu</Text></TouchableOpacity>
        </View>
    );
}

export default SideMenu;