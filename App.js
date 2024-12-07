import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For icon support
import { BentoProvider } from './contexts/BentoContext'; // Import BentoProvider

// Import screens
import SignInScreen from './screens/SignInScreen';
import StatusScreen from './screens/StatusScreen';
import AssistanceScreen from './screens/AssistanceScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <BentoProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Sign In"
          screenOptions={{
            headerShown: false, // Hide the header on each screen
            tabBarStyle: { height: 70 },
          }}
        >
          <Tab.Screen
            name="Sign In"
            component={SignInScreen}
            options={{
              tabBarIcon: ({ color }) => <Ionicons name="person" size={30} color={color} />,
            }}
          />
          <Tab.Screen
            name="Status"
            component={StatusScreen}
            options={{
              tabBarIcon: ({ color }) => <Ionicons name="list" size={30} color={color} />,
            }}
          />
          <Tab.Screen
            name="Assistance"
            component={AssistanceScreen}
            options={{
              tabBarIcon: ({ color }) => <Ionicons name="help-circle" size={30} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </BentoProvider>
  );
};

export default App;
