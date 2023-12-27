import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useProjectsStyle } from "./ProjectsStyle";

const Projects = () => {
  const styles = useProjectsStyle();
  return (
    <View style={styles.container}>
      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>Class-Care - Application</Text>
        <Text style={styles.projectDescription}>
          In the ClassCare app, I played a key role in developing diverse
          modules. I contributed to enhancing functionality, user experience,
          and overall system efficiency. My work involved tackling specific
          challenges within each module, showcasing my adaptability and
          proficiency in React Native development.
        </Text>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>
          Tax Invoice Generation using .NET MVC
        </Text>
        <Text style={styles.projectDescription}>
          The tax invoice generation project in .NET MVC automates the creation
          of tax invoices, streamlining the process and ensuring accurate and
          compliant documentation for financial transactions.
        </Text>
      </View>
    </View>
  );
};

export default Projects;
