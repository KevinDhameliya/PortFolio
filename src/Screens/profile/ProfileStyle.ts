import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useProfileStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#333",
        },
        contentContainer: {
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        },
        text: {
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "capitalize",
        },
        subtitle: {
          marginTop: 8,
          fontSize: 18,
          color: "#bbb",
        },
        roundedImage: {
          width: 150,
          height: 150,
          borderRadius: 75,
          marginBottom: 16,
        },
      }),
    []
  );
};
