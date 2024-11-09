import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";
import ShowImages from "./show-images";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ShowImages" component={ShowImages} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
