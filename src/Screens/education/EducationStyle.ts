import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useEducationStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 16,
          backgroundColor: "#f0f0f0",
        },
        card: {
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 16,
          marginBottom: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        degreeText: {
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 3,
        },
        institutionText: {
          fontSize: 16,
          color: "#555",
        },
        detailsText: {
          fontSize: 14,
          color: "#777",
        },
      }),
    []
  );
};
