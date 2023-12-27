import React from "react";
import { Text, View } from "react-native";
import { useExperianceStyle } from "./ExperianceStyle";

const Experiance = () => {
  const styles = useExperianceStyle();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.jobTitle}>Rushkar Technology PVT LTD </Text>
        <Text style={styles.companyName}>Intern, 2019 - 2023</Text>
        <Text style={styles.details}>
          I have done an Internship at Rushkar Technology PVT LTD in web
          development using .NET. In this internship, I have created one project
          using C#.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>Wama Software</Text>
        <Text style={styles.companyName}>Intern, June 2023 - Current</Text>
        <Text style={styles.details}>
          During my internship at Wama Software, I actively contributed to React
          Native projects, specifically focusing on ClassCare initiatives. I
          gained hands-on experience and honed my skills in React Native
          development while working on these projects.
        </Text>
      </View>
    </View>
  );
};

export default Experiance;
