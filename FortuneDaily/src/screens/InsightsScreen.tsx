import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BottomNav, TabKey } from "@/components/BottomNav";
import { useApp } from "@/context/AppContext";

export function InsightsScreen({ onNavigate }: { onNavigate: (tab: TabKey) => void }) {
  const { history, isPremium } = useApp();
  const recent = history.slice(0, 30);
  const average = recent.length
    ? Math.round(recent.reduce((sum, entry) => sum + entry.fortune.score, 0) / recent.length)
    : 0;

  return (
    <LinearGradient colors={["#090A12", "#171121", "#090A12"]} style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>PATTERNS, NOT PREDICTIONS</Text>
        <Text style={styles.title}>Your Insights</Text>

        <View style={styles.hero}>
          <Text style={styles.heroLabel}>30-DAY ENERGY AVERAGE</Text>
          <Text style={styles.average}>{average || "—"}</Text>
          <Text style={styles.heroSub}>
            {recent.length ? "A reflective view of your recent draws." : "Your trend will appear after your first draw."}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent trend</Text>
          <View style={styles.chart}>
            {(recent.length ? recent.slice(0, 12).reverse() : Array.from({ length: 8 }, () => null)).map((entry, index) => (
              <View
                key={entry?.date ?? index}
                style={[styles.bar, { height: entry ? Math.max(12, entry.fortune.score) : 15 }]}
              />
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly reflection</Text>
          <Text style={styles.body}>
            {isPremium
              ? "Your report will summarize recurring themes, strongest areas and practical actions from the last seven days."
              : "Weekly and monthly reports are included with Premium."}
          </Text>
        </View>
      </ScrollView>
      <BottomNav active="insights" onChange={onNavigate} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { paddingTop: 68, paddingHorizontal: 20, paddingBottom: 120 },
  eyebrow: { color: "#A89BC0", fontSize: 11, letterSpacing: 2, fontWeight: "700" },
  title: { color: "#F6F1E8", fontSize: 30, fontWeight: "800", marginTop: 7 },
  hero: { alignItems: "center", backgroundColor: "rgba(215,181,116,0.08)", borderRadius: 24, padding: 28, marginTop: 24, borderWidth: 1, borderColor: "rgba(215,181,116,0.18)" },
  heroLabel: { color: "#C6AA76", fontSize: 10, letterSpacing: 1.6, fontWeight: "800" },
  average: { color: "#F3E5C8", fontSize: 60, fontWeight: "700", marginTop: 9 },
  heroSub: { color: "#968E99", fontSize: 13, textAlign: "center" },
  card: { backgroundColor: "rgba(255,255,255,0.045)", borderRadius: 20, padding: 18, marginTop: 15 },
  cardTitle: { color: "#EEE8E0", fontSize: 17, fontWeight: "700" },
  chart: { height: 110, flexDirection: "row", alignItems: "flex-end", gap: 7, marginTop: 20 },
  bar: { flex: 1, maxHeight: 100, minHeight: 10, backgroundColor: "#9377AA", borderRadius: 999 },
  body: { color: "#A59EAA", fontSize: 14, lineHeight: 22, marginTop: 10 }
});
