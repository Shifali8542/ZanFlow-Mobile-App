import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreens';
import MyTask from '../screens/Task/MyTasks';
import HamburgerMenu from '../screens/HamburgerMenu';
import CreateScreen from '../screens/CreateScreen';
import DocumentsPage from '../screens/Documents';
import ProjectsPage from '../screens/Projects';
import MyTasks from '../screens/Task/MyTasks';
import AllTasks from '../screens/Task/AllTask';
import CompletedTasks from '../screens/Task/CompletedTask';
import PendingTasks from '../screens/Task/PendingTasks';
import InProgressTasks from '../screens/Task/InProgressTask';
import BacklogTasks from '../screens/Task/BacklogTask';
import DeployedTasks from '../screens/Task/DeployedTask';
import DeferredTasks from '../screens/Task/DeferredTask';
import AddNewTask from '../screens/Task/AddNewTask';

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
            <Stack.Screen name="Tasks" component={MyTask} />
            <Stack.Screen name="More" component={HamburgerMenu} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Documents" component={DocumentsPage} />
            <Stack.Screen name="Projects" component={ProjectsPage} />
            <Stack.Screen name="MyTasks" component={MyTasks} />
            <Stack.Screen name="AllTasks" component={AllTasks} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
            <Stack.Screen name="PendingTasks" component={PendingTasks} />
            <Stack.Screen name="InProgressTasks" component={InProgressTasks} />
            <Stack.Screen name="BacklogTasks" component={BacklogTasks} />
            <Stack.Screen name="DeployedTasks" component={DeployedTasks} />
            <Stack.Screen name="DeferredTasks" component={DeferredTasks} />
            <Stack.Screen name="AddNewTask" component={AddNewTask} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;