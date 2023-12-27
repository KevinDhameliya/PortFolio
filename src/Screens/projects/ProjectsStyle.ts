import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useProjectsStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 12,
          marginVertical: 13,
        },
        projectItem: {
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        projectTitle: {
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 8,
        },
        projectDescription: {
          fontSize: 16,
          color: "#333",
        },
      }),
    []
  );
};
