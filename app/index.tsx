import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Velkommen til risktester!</Text>
      <Pressable>
        <Link href="/riskCheckerPage">Take test</Link>
      </Pressable>
    </View>
  );
}
