import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useCertificatesStyle = () => {
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
          flexDirection: "row",
          alignItems: "center",
        },
        arrow: {
          marginRight: 8,
          fontSize: 20,
        },
        certificateTitle: {
          fontSize: 16,
          color: "#333",
        },
        modalContent: {
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 8,
        },
        modalImage: {
          width: "98%",
          height: 500,
          resizeMode: "cover",
          borderRadius: 8,
          marginBottom: 16,
        },
        closeButton: {
          backgroundColor: "#4CAF50",
          padding: 8,
          borderRadius: 5,
          alignSelf: "flex-end",
        },
        closeButtonText: {
          color: "#fff",
        },
        viewCertificateButton: {
          backgroundColor: "#4CAF50",
          padding: 8,
          borderRadius: 5,
          marginLeft: 16,
        },
        viewCertificateButtonText: {
          color: "#fff",
        },
      }),
    []
  );
};
