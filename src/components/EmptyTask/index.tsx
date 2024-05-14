import { Image, Text, View } from "react-native";
import { styles } from "./style";

export function EmptyTask() {
  return (
    <View style={styles.tasksList}>
      <Image source={require("./img/Clipboard.png")} />
      <View style={styles.tasksListText}>
        <Text style={styles.tasksListText1}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.tasksListText2}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
