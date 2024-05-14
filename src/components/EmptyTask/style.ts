import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#333333",
    borderTopWidth: 1,
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  tasksListText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tasksListText1: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14,
  },
  tasksListText2: {
    color: "#808080",
    fontSize: 14,
  },
});
