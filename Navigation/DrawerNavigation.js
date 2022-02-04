import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigation from "./TabNavigator"
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.DrawerNavigator>
            <Drawer.screen name = "Home" component = {TabNavigator} />
            <Drawer.screen name = "Profile" component = {Profile}/>


        </Drawer.DrawerNavigator>
    );
};

export default DrawerNavigator;