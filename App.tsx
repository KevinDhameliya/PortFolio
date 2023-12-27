import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Education from "./src/Screens/education/Education";
import Experiance from "./src/Screens/experiance/Experiance";
import Certificates from "./src/Screens/certificates/Cretificates";
import Skills from "./src/Screens/skills/Skills";
import Projects from "./src/Screens/projects/Projects";
import Profile from "./src/Screens/profile/Profile";
import Objective from "./src/Screens/objective/Objective";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Career Objective" component={Objective} />
        <Drawer.Screen name="Skills" component={Skills} />
        <Drawer.Screen name="Education" component={Education} />
        <Drawer.Screen name="Experiance" component={Experiance} />
        <Drawer.Screen name="Certificates" component={Certificates} />
        <Drawer.Screen name="Projects" component={Projects} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    marginVertical: 50,
  },
  contentContainer: {
    justifyContent: "center",
    // borderWidth: 2,
    borderColor: "black",
  },
  header: {},
  roundedImage: {
    width: 130,
    height: 130,
    resizeMode: "cover",
    borderRadius: 150,
    overflow: "hidden",
  },
});

//  <View style={styles.contentContainer}>
//   <Text>Details : </Text>
//   <Text>
//     <FontAwesome name="github" height={20} width={20} color="black" />
//     ABCD
//   </Text>
//   <Text>
//     <FontAwesome
//       name="graduation-cap"
//       height={20}
//       width={20}
//       color="black"
//     />
//     B.E. - Computer Engineering{" "}
//   </Text>
//   <Text>
//     <FontAwesome name="phone" height={20} width={20} color="black" />
//     Ph: +91-9727318649
//   </Text>
//   <Text>
//     <FontAwesome name="envelope" height={20} width={20} color="black" />
//     Email: dhameliyakevin405@gmail.com
//   </Text>
//   <Text>
//     <FontAwesome
//       name="location-arrow"
//       height={20}
//       width={20}
//       color="black"
//     />
//     Ahmedabad, Gujarat, India - 380017
//   </Text>
// </View>
