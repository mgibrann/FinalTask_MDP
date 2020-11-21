import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Splash, SignIn, SignUp, EditProfile, Home} from '../pages';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
