import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BottomNav, TabKey } from "@/components/BottomNav";
import { useApp } from "@/context/AppContext";
import { disableDailyReminder, enableDailyReminder } from "@/services/notifications";

const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const moods = ["Calm", "Hopeful", "Uncertain", "Focused", "Tired"];

export function ProfileScreen({
  onNavigate,
  onOpenPaywall
}: {
  onNavigate: (tab: TabKey) => void;
  onOpenPaywall: () => void;
}) {
  const { profile, updateProfile, isPremium } = useApp();

  const toggleReminder = async (enabled: boolean) => {
    if (enabled) {
      const granted = await enableDailyReminder();
      updateProfile({ reminderEnabled: granted });
      if (!granted) Alert.alert("Permission needed", "Enable notifications in system settings to use daily reminders.");
    } else {
      await disableDailyReminder();
      updateProfile({ reminderEnabled: false });
    }
  };

  return (
    <LinearGradient colors={["#090A12", "#171121", "#090A12"]} style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>PERSONALIZE YOUR RITUAL</Text>
        <Text style={styles.title}>Your Profile</Text>

        <View style={styles.card}>
          <Text style={styles.label}>BIRTH DATE</Text>
          <TextInput
            value={profile.birthDate}
            onChangeText={(birthDate) => updateProfile({ birthDate })}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#6F6975"
            style={styles.input}
          />

          <Text style={styles.label}>ZODIAC</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.chips}>
              {zodiacSigns.map((sign) => (
                <Pressable key={sign} onPress={() => updateProfile({ zodiac: sign })} style={[styles.chip, profile.zodiac === sign && styles.chipActive]}>
                  <Text style={[styles.chipText, profile.zodiac === sign && styles.chipTextActive]}>{sign}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>CURRENT MOOD</Text>
          <View style={styles.wrap}>
            {moods.map((mood) => (
              <Pressable key={mood} onPress={() => updateProfile({ mood })} style={[styles.chip, profile.mood === mood && styles.chipActive]}>
                <Text style={[styles.chipText, profile.mood === mood && styles.chipTextActive]}>{mood}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>CURRENT GOAL</Text>
          <TextInput
            value={profile.goal}
            onChangeText={(goal) => updateProfile({ goal })}
            placeholder="e.g. launch my project"
            placeholderTextColor="#6F6975"
            style={styles.input}
          />
        </View>

        <View style={styles.rowCard}>
          <View style={styles.rowCopy}>
            <Text style={styles.rowTitle}>Daily reminder</Text>
            <Text style={styles.rowSub}>Receive your prompt every day at 8:30 AM.</Text>
          </View>
          <Switch value={profile.reminderEnabled} onValueChange={toggleReminder} />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>THEME</Text>
          <View style={styles.wrap}>
            {(["Midnight", "Temple", "Moonlight"] as const).map((theme) => (
              <Pressable
                key={theme}
                disabled={!isPremium && theme !== "Midnight"}
                onPress={() => updateProfile({ theme })}
                style={[styles.theme, profile.theme === theme && styles.themeActive]}
              >
                <Text style={styles.themeText}>{theme}{!isPremium && theme !== "Midnight" ? " ✦" : ""}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {!isPremium && (
          <Pressable style={styles.premium} onPress={onOpenPaywall}>
            <Text style={styles.premiumTitle}>Unlock Premium</Text>
            <Text style={styles.premiumSub}>Personal readings, reports, all dimensions and no ads.</Text>
          </Pressable>
        )}
      </ScrollView>
      <BottomNav active="profile" onChange={onNavigate} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { paddingTop: 68, paddingHorizontal: 20, paddingBottom: 120 },
  eyebrow: { color: "#A89BC0", fontSize: 11, letterSpacing: 2, fontWeight: "700" },
  title: { color: "#F6F1E8", fontSize: 30, fontWeight: "800", marginTop: 7 },
  card: { backgroundColor: "rgba(255,255,255,0.045)", borderRadius: 20, padding: 18, marginTop: 20 },
  label: { color: "#A89EB0", fontSize: 10, fontWeight: "800", letterSpacing: 1.5, marginTop: 14, marginBottom: 9 },
  input: { borderWidth: 1, borderColor: "#413A49", borderRadius: 13, color: "#F3EEE7", paddingHorizontal: 13, paddingVertical: 12 },
  chips: { flexDirection: "row", gap: 8 },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { borderWidth: 1, borderColor: "#4C4355", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 8 },
  chipActive: { borderColor: "#D4B778", backgroundColor: "rgba(212,183,120,0.12)" },
  chipText: { color: "#908995", fontSize: 12 },
  chipTextActive: { color: "#EAD6A9", fontWeight: "700" },
  rowCard: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255,255,255,0.045)", borderRadius: 20, padding: 18, marginTop: 14 },
  rowCopy: { flex: 1, marginRight: 15 },
  rowTitle: { color: "#ECE6DF", fontSize: 16, fontWeight: "700" },
  rowSub: { color: "#89838D", fontSize: 12, marginTop: 4, lineHeight: 18 },
  theme: { borderRadius: 14, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: "#211C27" },
  themeActive: { borderWidth: 1, borderColor: "#C6A66A" },
  themeText: { color: "#D7CEDB", fontSize: 12 },
  premium: { backgroundColor: "#E4D0A5", borderRadius: 19, padding: 19, marginTop: 16 },
  premiumTitle: { color: "#241B24", fontSize: 18, fontWeight: "900" },
  premiumSub: { color: "#5F505F", fontSize: 12, marginTop: 5 }
});
