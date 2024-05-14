import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { styles } from "./style";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  function handleSelect(id: string) {
    let updateTasks = tasks.map((task) => {
      return task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task;
    });

    setTasks(updateTasks);
  }

  function handleSubmit(value: string) {
    const hasSameTitle = tasks.some((todo) => todo.title === value);

    if (value.trim().length !== 0 && !hasSameTitle) {
      setTasks((prevState) => [
        {
          id: uuid.v4().toString(),
          title: value,
          isComplete: false,
        },
        ...prevState,
      ]);

      setTask("");
    }
  }

  function handleDeleteTask(id: string) {
    const updatedOptions = tasks.filter((option) => option.id !== id);
    setTasks(updatedOptions);
  }

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
        <View style={styles.tasksInfo}>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <View style={styles.tasksCreatedNumber}>
              <Text style={styles.tasksCreatedNumberText}>0</Text>
            </View>
          </View>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksFinishedText}>Concluídas</Text>
            <View style={styles.tasksCreatedNumber}>
              <Text style={styles.tasksCreatedNumberText}>0</Text>
            </View>
          </View>
        </View>
        {tasks.length === 0 ? (
          <View style={styles.tasksList}>
            <Image source={require("./img/Clipboard.png")} />
            <View style={styles.tasksListText}>
              <Text style={styles.tasksListText1}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.tasksListText2}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          </View>
        ) : (
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
        )}
      </View>
    </View>
  );
}
