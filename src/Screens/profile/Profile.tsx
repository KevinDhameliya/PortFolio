import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { useProfileStyle } from "./ProfileStyle";

const Profile = () => {
  const styles = useProfileStyle();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#333" />
      <View style={styles.contentContainer}>
        <Image
          source={require("../profile/profile_pic.jpg")}
          style={styles.roundedImage}
        />
        <Text style={styles.text}>Kevin Dhameliya</Text>
        <Text style={styles.subtitle}>React-native Developer </Text>
      </View>
    </View>
  );
};

export default Profile;
