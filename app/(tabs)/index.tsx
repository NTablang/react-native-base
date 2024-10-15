import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CapsuleMobile, Environment } from "@usecapsule/react-native-wallet";
export default function HomeScreen() {
  const capsule = new CapsuleMobile(
    Environment.BETA,
    "API-KEY-HERE"
  );

  const handleLogin = async (email: string): Promise<void> => {
    try {
      const userExists = await capsule.checkIfUserExists(email);
      if (userExists) {
        await capsule.login();
        console.log("User logged in successfully");
      } else {
        console.log("User does not exist. Please create a new account.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={() => handleLogin("test@test.com")} title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
