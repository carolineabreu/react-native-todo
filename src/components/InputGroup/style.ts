import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
