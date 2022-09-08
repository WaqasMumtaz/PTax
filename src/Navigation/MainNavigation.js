import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../Screens';
import BottomNavigation from './BottomNavigation';


const Stack = createNativeStackNavigator();

function Navigation() {
 
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
          <Stack.Screen name="Bottom Tabs" component={BottomNavigation} />
          <Stack.Screen name="Detail" component={Screens.DetailsPage} />
          
    </Stack.Navigator>
  )

}

export default Navigation;