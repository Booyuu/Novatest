import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BottomNav, TabKey } from "@/components/BottomNav";
import { useApp } from "@/context/AppContext";

export function HistoryScreen({ onNavigate }: { onNavigate: (tab: TabKey) => void }) {
  const { history, isPremium } = useApp();
  return (
    <LinearGradient colors={["#090A12", "#171121", "#090A12"]} style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>YOUR JOURNEY</Text>
        <Text style={styles.title}>Fortune History</Text>
        <Text style={styles.subtitle}>
          {isPremium ? "Your complete history is available." : "Free preview: your latest seven entries."}
        </Text>
        {(isPremium ? history : history.slice(0, 7)).map((entry) => (
          <View key={entry.date} style={styles.card}>
            <View style={styles.symbolWrap}><Text style={styles.symbol}>{entry.fortune.symbol}</Text></View>
            <View style={styles.copy}>
              <Text style={styles.date}>{entry.date}</Text>
              <Text style={styles.cardTitle}>{entry.fortune.title}</Text>
              <Text style={styles.level}>{entry.fortune.level} · {entry.fortune.score}</Text>
            </View>
          </View>
        ))}
        {history.length === 0 && <Text style={styles.empty}>Draw your first fortune to begin your history.</Text>}
      </ScrollView>
      <BottomNav active="history" onChange={onNavigate} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { paddingTop: 68, paddingHorizontal: 20, paddingBottom: 120 },
  eyebrow: { color: "#A89BC0", fontSize: 11, letterSpacing: 2, fontWeight: "700" },
  title: { color: "#F6F1E8", fontSize: 30, fontWeight: "800", marginTop: 7 },
  subtitle: { color: "#958F9C", fontSize: 14, marginTop: 8, marginBottom: 22 },
  card: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255,255,255,0.045)", borderRadius: 18, padding: 15, marginBottom: 11, borderWidth: 1, borderColor: "rgba(255,255,255,0.07)" },
  symbolWrap: { width: 48, height: 48, borderRadius: 16, backgroundColor: "rgba(215,181,116,0.11)", alignItems: "center", justifyContent: "center" },
  symbol: { color: "#DAB879", fontSize: 23 },
  copy: { marginLeft: 14 },
  date: { color: "#7E7885", fontSize: 11 },
  cardTitle: { color: "#EFE9E1", fontSize: 17, fontWeight: "700", marginTop: 3 },
  level: { color: "#A69EAA", fontSize: 12, marginTop: 4 },
  empty: { color: "#8C8692", textAlign: "center", marginTop: 70 }
});
