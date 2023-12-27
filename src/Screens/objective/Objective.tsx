import { Text, View, TouchableOpacity } from "react-native";
import { useObjectiveStyle } from "./ObjectiveStyle";

const Objective = ({ navigation }: any) => {
  const styles = useObjectiveStyle();
  return (
    <View style={styles.container}>
      <Text>
        My objective is to become a full stack web developer that can meet all
        the requirements of the company and help company to grow further.Seeking
        a challenging position in a reputed organization where I can learn new
        skills, expand my knowledge, and leverage my learnings.
      </Text>
    </View>
  );
};

export default Objective;
