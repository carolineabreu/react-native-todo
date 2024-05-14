import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type Task = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TaskItemProps = {
  tasks: Task[];
  handleSelect: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

export function TaskItem({ tasks, handleSelect, handleDeleteTask }: TaskItemProps) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tasks}
      keyExtractor={(todo) => todo.id}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <TouchableOpacity style={styles.task} onPress={() => handleSelect(item.id)}>
            <View>
              {item.isComplete ? (
                <Image source={require("./img/radioChecked.png")} />
              ) : (
                <Image source={require("./img/radioDefault.png")} />
              )}
            </View>
            <Text style={[styles.taskTitle, item.isComplete && styles.taskTitleSelected]}>
              {item.title}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
            <Image source={require("./img/trash.png")} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
