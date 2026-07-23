import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Fortune } from "@/types";

export function FortuneCard({ fortune }: { fortune: Fortune }) {
  return (
    <LinearGradient colors={["rgba(238,218,179,0.16)", "rgba(120,91,147,0.10)"]} style={styles.card}>
      <Text style={styles.symbol}>{fortune.symbol}</Text>
      <Text style={styles.level}>{fortune.level}</Text>
      <Text style={styles.title}>{fortune.title}</Text>
      <View style={styles.scoreTrack}>
        <View style={[styles.scoreFill, { width: `${fortune.score}%` }]} />
      </View>
      <Text style={styles.score}>{fortune.score} / 100 energy</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 28, padding: 24, alignItems: "center", borderWidth: 1, borderColor: "rgba(232,211,169,0.24)" },
  symbol: { color: "#EACF98", fontSize: 42 },
  level: { color: "#CDBD9E", fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", fontWeight: "800", marginTop: 12 },
  title: { color: "#F7F0E3", fontSize: 29, fontWeight: "700", marginTop: 8 },
  scoreTrack: { height: 5, width: "100%", backgroundColor: "rgba(255,255,255,0.10)", borderRadius: 999, marginTop: 24, overflow: "hidden" },
  scoreFill: { height: "100%", backgroundColor: "#DAB879", borderRadius: 999 },
  score: { color: "#91889B", fontSize: 11, marginTop: 8 }
});
