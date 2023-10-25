import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DriverAccountScreen from './src/screens/DriverAccountScreen';
import DriverProfileScreen from './src/screens/DriverProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors';
import VehicleInformationScreen from './src/screens/VehicleInformationScreen';
import DriverInformationScreen from './src/screens/DriverInformationScreen';
import StartupRegistrationPage1 from './src/screens/StartupRegistrationPage1';
import StartupRegistrationPage2 from './src/screens/StartupRegistrationPage2';
import AddOfferScreen1 from './src/screens/AddOfffersScreen1';
import AddOffersScreen2 from './src/screens/AddOffersScreen2';
import OffersHome from './src/screens/OffersHome';
import OfferDetails from './src/screens/OfferDetails';
import InitialPage from './src/screens/InitialPage';
InitialPage


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DriverAccount'>
            <Stack.Screen name='DriverAccount' component={DriverAccountScreen} options={{title: 'Driver Account'}}/>
            <Stack.Screen name='DriverProfile' component={DriverProfileScreen} options={{title: 'Driver Profile'}}/>
            <Stack.Screen name='VehicleInformation' component={VehicleInformationScreen} options={{title: 'Vehicle Account'}}/>
            <Stack.Screen name='DriverInformation' component={DriverInformationScreen} options={{title: 'Driver Info Account'}}/>
            <Stack.Screen name='StartupRegistrationPage1' component={StartupRegistrationPage1} options={{title: 'Start up Registration'}}/>
            <Stack.Screen name='StartupRegistrationPage2' component={StartupRegistrationPage2} options={{title: 'Start up Registration'}}/>
            <Stack.Screen name='AddOffersScreen1' component={AddOfferScreen1} options={{title: 'Add Deals'}}/>
            <Stack.Screen name='AddOffersScreen2' component={AddOffersScreen2} options={{title: 'Add Deals'}}/>
            <Stack.Screen name='OffersHome' component={OffersHome} options={{title: 'Offers Home'}}/>
            <Stack.Screen name='OfferDetails' component={OfferDetails} creenOptions={{ headerShown: false }}/>
            <Stack.Screen name='InitialPage' component={InitialPage} creenOptions={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
