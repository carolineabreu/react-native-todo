import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasks: {
    backgroundColor: "#191919",
    height: "100%",
    padding: 24,
  },
  tasksInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },
  tasksCreated: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    height: 19,
  },
  tasksCreatedText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  tasksCreatedNumber: {
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tasksCreatedNumberText: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 12,
  },
  tasksFinished: {
    flexDirection: "row",
  },
  tasksFinishedText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
});
