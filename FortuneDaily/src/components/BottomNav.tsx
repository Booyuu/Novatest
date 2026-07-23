import { Pressable, StyleSheet, Text, View } from "react-native";

export type TabKey = "today" | "history" | "insights" | "profile";

const tabs: { key: TabKey; icon: string; label: string }[] = [
  { key: "today", icon: "☾", label: "Today" },
  { key: "history", icon: "▤", label: "History" },
  { key: "insights", icon: "⌁", label: "Insights" },
  { key: "profile", icon: "○", label: "You" }
];

export function BottomNav({ active, onChange }: { active: TabKey; onChange: (tab: TabKey) => void }) {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => (
        <Pressable key={tab.key} style={styles.item} onPress={() => onChange(tab.key)}>
          <Text style={[styles.icon, active === tab.key && styles.active]}>{tab.icon}</Text>
          <Text style={[styles.label, active === tab.key && styles.active]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: { position: "absolute", left: 14, right: 14, bottom: 18, height: 72, borderRadius: 22, backgroundColor: "rgba(19,17,27,0.97)", borderWidth: 1, borderColor: "rgba(255,255,255,0.10)", flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  item: { alignItems: "center", minWidth: 58 },
  icon: { color: "#706B78", fontSize: 20 },
  label: { color: "#706B78", fontSize: 10, marginTop: 5, fontWeight: "700" },
  active: { color: "#E3C98F" }
});
