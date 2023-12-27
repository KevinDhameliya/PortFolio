import React from "react";
import { Text, View } from "react-native";
import { useEducationStyle } from "./EducationStyle";

const Education = () => {
  const styles = useEducationStyle();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.degreeText}>B.E. - Computer Engineering</Text>
        <Text style={styles.institutionText}>
          Ahmedabad Institute of Technology
        </Text>
        <Text style={styles.detailsText}>CGPA: 8.01 / 10.00 | 2019-2023</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.degreeText}>12th Grade</Text>
        <Text style={styles.institutionText}>
          Imperial Science School, Dhoraji
        </Text>
        <Text style={styles.detailsText}>
          GSEB | Percentage: 82 / 100.00 | 2019
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.degreeText}>10th Grade</Text>
        <Text style={styles.institutionText}>BAPS Gurukul, Gondal</Text>
        <Text style={styles.detailsText}>
          GSEB | Percentage: 79 / 100.00 | 2017
        </Text>
      </View>
    </View>
  );
};

export default Education;
