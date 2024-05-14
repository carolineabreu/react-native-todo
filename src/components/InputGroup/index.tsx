import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type InputGroupProps = {
  task: string;
  setTask: (task: string) => void;
  handleSubmit: (task: string) => void;
};

export function InputGroup({ task, setTask, handleSubmit }: InputGroupProps) {
  return (
    <View style={styles.inputGroup}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => {
          handleSubmit(task);
        }}
      >
        <AntDesign name="pluscircleo" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
