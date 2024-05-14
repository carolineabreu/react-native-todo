import { Image, View } from "react-native";
import { styles } from "./style";

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("./img/logo.png")} />
    </View>
  );
}
