// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WelcomeScreen from './src/screens/WelcomeScreen.js';
// import LoginScreen from './src/screens/LoginScreen.js'; // Import your LoginScreen
// import RegistrationScreen from './src/screens/RegistrationScreen.js'; // Import your RegistrationScreen
// import HomeScreen from './src/screens/HomeScreen.js';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Registration" component={RegistrationScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  return <AuthNavigator />;
};
export default App;
