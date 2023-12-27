import React from "react";
import { Text, View, FlatList } from "react-native";
import { useSkillsStyle } from "./SkillsStyle";

const Skills = () => {
  const styles = useSkillsStyle();

  const data = [
    "React Native",
    "HTML",
    "CSS",
    "JavaScript",
    "OOP",
    "Java",
    "C++",
    "SQL",
    "React",
    ".NET",
    "C#",
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.itemContainer}>
        <Text style={styles.arrow}>➤</Text>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `skillsListEntry-${item}`}
      />
    </View>
  );
};

export default Skills;
