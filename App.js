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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartupProfile from './src/screens/StartupProfile';
import { Ionicons } from '@expo/vector-icons';
import UpdateOffersScreen from './src/screens/UpdateOffersScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {

  function StartUpDashboard() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'OffersHome') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'StartupProfile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [
            {
              
              display: 'flex',
           
              paddingTop:10
            },
            null
          ],
          tabBarActiveTintColor: COLORS.blue, // active icon color
          tabBarInactiveTintColor: 'gray', // inactive icon color
        })}>
        <Tab.Screen name="OffersHome" component={OffersHome}
         options={{
          headerShown: true,
          title: 'Offer Home',
          headerTitleAlign: 'center',
          headerPressColor: '#3A95C2',
          headerTitleStyle: {fontSize: 20,color:COLORS.blue},
          headerStyle:{borderBottomColor:COLORS.blue, borderBottomWidth:1},
        }} />
        
        <Tab.Screen name='StartupProfile' component={StartupProfile}
         options={{
          headerShown: true,
          title: 'Profile',
          headerTitleAlign: 'center',
          headerPressColor: '#3A95C2',
          headerTitleStyle: {fontSize: 20,color:COLORS.blue},
          headerStyle:{borderBottomColor:COLORS.blue, borderBottomWidth:1},
        }} />
      </Tab.Navigator>
    );

  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='InitialPage'>
            <Stack.Screen name='StartupRegistrationPage1' component={StartupRegistrationPage1} options={{title: 'Start up Registration', headerTitleAlign: 'center',}} />
            <Stack.Screen name='StartupRegistrationPage2' component={StartupRegistrationPage2} options={{title: 'Start up Registration', headerTitleAlign: 'center',}}/>
            <Stack.Screen name='AddOffersScreen1' component={AddOfferScreen1} options={{title: 'Add Deals', headerTitleAlign: 'center',}}/>
            <Stack.Screen name='OfferDetails' component={OfferDetails} options={{ headerShown: false }}/>
            <Stack.Screen name='InitialPage' component={InitialPage} options={{ headerShown: false }}/>
            <Stack.Screen name='StartUpDashboard' component={StartUpDashboard} options={{ headerShown: false }}/>        
            <Stack.Screen name='UpdateOffersScreen' component={UpdateOffersScreen} options={{title: 'Update Offer', headerTitleAlign: 'center',}}/>        
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
