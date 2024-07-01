import { StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("./lock.json");

export default function Skill() {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <View style={styles.container}>
      <Player
        ref={playerRef}
        size={96}
        icon={ICON}
        onComplete={() => playerRef.current?.playFromBeginning()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
