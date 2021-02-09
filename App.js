import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./components/Homescreen";
import EducationScreen from "./components/Education";
import ExperienceScreen from "./components/Experience";
import ProjectScreen from "./components/Projects";
import ContactScreen from "./components/ContactScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Education" component={EducationScreen} />
          <Drawer.Screen name="Experience" component={ExperienceScreen} />
          <Drawer.Screen name="Project" component={ProjectScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
