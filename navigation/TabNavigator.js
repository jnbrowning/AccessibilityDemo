import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';  
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Buttons from '../screens/Buttons';
import Forms from '../screens/Form';
import Imgs from '../screens/Imgs';
import HomePage from '../screens/HomePage';

const Tab = createBottomTabNavigator();

//Tab Navigation
function TabNavigator() {

  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

      {/* GOOD: if you just include a name for the tab, that is what will be read off */}
      {/* NOTE: icons like these do NOT need alt text, as the names give enough information */}
      <Tab.Screen 
        name='Home' 
        component={HomePage}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Feather name="home" size={size} color={color} />),
        }} />

      {/* GOOD: If there is a name and a tabBarLabel, it will read just the tabBarLabel */}
      <Tab.Screen 
        name='Buttons' 
        component={Buttons} 
        options={{
          tabBarLabel: 'Buttons',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="gesture-tap-button" size={size} color={color} />),
        }} />
        
      {/* BAD ACCESSIBILITY: if you override by making the tabBarLabel blank, nothing will be read */}
      <Tab.Screen 
        name='Forms' 
        component={Forms} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="form-textbox-password" size={size} color={color} />),
        }}  />

      {/* GOOD: If there is a non-matching name and tabBarLabel, it will read just the tabBarLabel */}
        <Tab.Screen 
        name='Imgs' 
        component={Imgs} 
        options={{
          tabBarLabel: 'Images',
          tabBarIcon: ({ color, size }) => (
          <Feather name="image" size={size} color={color} />),
        }}  />
    </Tab.Navigator>
  );
}

export default TabNavigator;