import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useExperianceStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 16,
        },
        card: {
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
        jobTitle: {
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 3,
        },
        companyName: {
          fontSize: 16,
          color: "#555",
          marginBottom: 3,
        },
        duration: {
          fontSize: 14,
          color: "#777",
        },
        details: {
          fontSize: 14,
          color: "#333",
        },
      }),
    []
  );
};
