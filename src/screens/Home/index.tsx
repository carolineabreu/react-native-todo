import { useState } from "react";
import { Text, View } from "react-native";
import uuid from "react-native-uuid";
import { EmptyTask } from "../../components/EmptyTask";
import { Header } from "../../components/Header";
import { InputGroup } from "../../components/InputGroup";
import { TaskItem } from "../../components/TaskItem";
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

  function handleToggleTask(id: string) {
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
      <Header />
      <View style={styles.tasks}>
        <InputGroup task={task} setTask={setTask} handleSubmit={handleSubmit} />

        <View style={styles.tasksInfo}>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <View style={styles.tasksCreatedNumber}>
              <Text style={styles.tasksCreatedNumberText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksFinishedText}>Concluídas</Text>
            <View style={styles.tasksCreatedNumber}>
              <Text style={styles.tasksCreatedNumberText}>
                {tasks.filter((task) => task.isComplete).length}
              </Text>
            </View>
          </View>
        </View>

        {tasks.length === 0 ? (
          <EmptyTask />
        ) : (
          <TaskItem
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleSelect={handleToggleTask}
          />
        )}
      </View>
    </View>
  );
}
