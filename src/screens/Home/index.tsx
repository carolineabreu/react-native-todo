import { AntDesign } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./img/logo.png")} />
      </View>
      <View style={styles.tasks}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.plusButton}>
            <AntDesign name="pluscircleo" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text>Criadas</Text>
            <Text>Concluídas</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
