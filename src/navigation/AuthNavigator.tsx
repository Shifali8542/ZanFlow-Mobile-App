import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreens';
import TasksScreen from '../screens/TasksScreen';
import MoreScreen from '../screens/MoreScreen';     
import CreateScreen from '../screens/CreateScreen';
import DocumentsPage from '../screens/Documents';
import ProjectsPage from '../screens/Projects';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {  
    return (    
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="More" component={MoreScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Documents" component={DocumentsPage} />
            <Stack.Screen name="Projects" component={ProjectsPage} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;