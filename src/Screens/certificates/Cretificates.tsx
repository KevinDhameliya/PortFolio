import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Modal from "react-native-modal";
import { useCertificatesStyle } from "./CertificatesStyle";

const Certificates = () => {
  const styles = useCertificatesStyle();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.arrow}>➤</Text>
        <Text style={styles.certificateTitle}>Data Structure, Coursera</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.arrow}>➤</Text>
        <Text style={styles.certificateTitle}>
          SQL For Data Science, Coursera
        </Text>
      </View>

      <View style={[styles.card]}>
        <Text style={styles.arrow}>➤</Text>
        <Text style={styles.certificateTitle}>Training Certificate</Text>
        <TouchableOpacity
          style={[
            styles.viewCertificateButton,
            { right: 0, position: "absolute", marginRight: 10 },
          ]}
          onPress={toggleModal}
        >
          <Text style={styles.viewCertificateButtonText}>View Certificate</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Image
            source={require("../certificates/Training-Certificate.jpg")}
            style={styles.modalImage}
          />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Certificates;
