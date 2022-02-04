import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import feed from "../Screens/Feed";

import CreatePost from "../screens/CreatePost";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon : ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName = focused
                    ? 'book'
                    : 'book-outline';
                } else if (route.name === 'CreatePost') {
                    iconName = focused? 'create' : 'create-outline';
                } 
                return <Icons name = {iconName} size ={size} color={color} />;
            },
         })}
          tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'grey',
          }}
        >
             <Tab.screen name="Feed" component={feed}/> 
             <Tab.screen name="CreatePost" component={CreatePost}/>
        
        </Tab.Navigator>
    );
}

export default BottomTabNavigator
    
        
        
        
            
        
    

