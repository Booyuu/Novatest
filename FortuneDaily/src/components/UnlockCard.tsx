import { Pressable, StyleSheet, Text, View } from "react-native";

export function UnlockCard({
  title,
  subtitle,
  buttonText,
  onPress
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>◉</Text>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", backgroundColor: "rgba(255,255,255,0.04)", borderWidth: 1, borderColor: "rgba(255,255,255,0.08)", borderRadius: 22, padding: 18, marginTop: 16 },
  icon: { color: "#C4A66E", fontSize: 25, marginRight: 13, marginTop: 2 },
  copy: { flex: 1 },
  title: { color: "#F2ECE4", fontSize: 16, fontWeight: "700" },
  subtitle: { color: "#96909C", fontSize: 13, lineHeight: 19, marginTop: 6 },
  button: { backgroundColor: "#E9D8B7", borderRadius: 13, paddingVertical: 12, alignItems: "center", marginTop: 14 },
  buttonText: { color: "#1E1720", fontWeight: "800", fontSize: 13 }
});
