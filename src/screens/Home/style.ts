import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tasks: {
    backgroundColor: "#191919",
    height: "100%",
    padding: 24,
  },
  inputGroup: {
    marginTop: -50,
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    color: "#FFFF",
    fontSize: 16,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  plusButton: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    padding: 18,
  },
});
