import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    gap: 8,
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },
  task: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    color: "#f2f2f2",
  },
  taskTitleSelected: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
