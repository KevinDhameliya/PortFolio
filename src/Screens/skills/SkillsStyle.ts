import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useSkillsStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 16,
          backgroundColor: "#f0f0f0",
        },
        card: {
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        itemContainer: {
          flexDirection: "row",
          alignItems: "center",
        },
        arrow: {
          marginRight: 8,
          fontSize: 20,
        },
        itemText: {
          fontSize: 16,
          height: 24,
        },
      }),
    []
  );
};
