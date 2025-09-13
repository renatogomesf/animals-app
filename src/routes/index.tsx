import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00DDA2",
        tabBarStyle: {
          backgroundColor: "#334050",
          borderTopWidth: 0, // tira a borda de cima da barra de navegação
          bottom: 60,
          width: 370,
          height: 60,
          margin: "auto",
          borderRadius: 30,
        },
        tabBarIconStyle: {
          // borderColor: "#fff",
          // borderWidth: 1,
          // width: 50,
          // height: 50,
          top: 10,
          borderRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5 name="clipboard-list" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome name="user" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome name="gear" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
