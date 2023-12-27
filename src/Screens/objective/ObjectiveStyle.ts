import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useObjectiveStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: "#f0f0f0",
          padding: 20,
          margin: 10,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        text: {
          fontSize: 16,
          lineHeight: 24,
          color: "#333",
        },
      }),
    []
  );
};
