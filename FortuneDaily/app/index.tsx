import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useApp } from "@/context/AppContext";
import { DimensionKey } from "@/types";
import { FortuneCard } from "@/components/FortuneCard";
import { UnlockCard } from "@/components/UnlockCard";
import { BottomNav, TabKey } from "@/components/BottomNav";
import { HistoryScreen } from "@/screens/HistoryScreen";
import { InsightsScreen } from "@/screens/InsightsScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { PaywallModal } from "@/components/PaywallModal";

export default function HomeScreen() {
  const {
    todayEntry,
    drawToday,
    unlockDetail,
    unlockDimension,
    drawSupplement,
    isPremium,
    profile,
  } = useApp();

  const [activeTab, setActiveTab] = useState<TabKey>("today");
  const [showPaywall, setShowPaywall] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const fortune = todayEntry?.fortune;
  const unlockedDimensions = todayEntry?.unlockedDimensions ?? [];

  const personalizedIntro = useMemo(() => {
    if (!fortune || !isPremium) return "";
    const parts = [
      profile.mood ? `You are arriving with a ${profile.mood.toLowerCase()} mood.` : "",
      profile.goal ? `Keep your focus on ${profile.goal.toLowerCase()}.` : "",
      profile.zodiac ? `Your ${profile.zodiac} profile favors reflection over impulse today.` : "",
    ].filter(Boolean);
    return parts.join(" ");
  }, [fortune, isPremium, profile]);

  const askFortune = () => {
    if (!question.trim()) return;
    if (!isPremium) {
      setShowPaywall(true);
      return;
    }
    const subject = question.trim();
    setAnswer(
      `For “${subject},” today's message is not to force certainty. ${fortune?.action ?? "Take one calm, practical step and observe what changes."}`
    );
    setQuestion("");
  };

  if (activeTab === "history") {
    return <HistoryScreen onNavigate={setActiveTab} />;
  }
  if (activeTab === "insights") {
    return <InsightsScreen onNavigate={setActiveTab} />;
  }
  if (activeTab === "profile") {
    return <ProfileScreen onNavigate={setActiveTab} onOpenPaywall={() => setShowPaywall(true)} />;
  }

  return (
    <LinearGradient colors={["#090A12", "#161125", "#090A12"]} style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>YOUR DAILY RITUAL</Text>
            <Text style={styles.title}>Fortune Daily</Text>
          </View>
          <Pressable
            onPress={() => setShowPaywall(true)}
            style={[styles.premiumChip, isPremium && styles.premiumChipActive]}
          >
            <Text style={styles.premiumChipText}>{isPremium ? "✦ Premium" : "Go Premium"}</Text>
          </Pressable>
        </View>

        {!fortune ? (
          <View style={styles.drawArea}>
            <Text style={styles.moon}>☾</Text>
            <Text style={styles.drawTitle}>A message is waiting for you.</Text>
            <Text style={styles.drawSubtitle}>
              Draw once today. Return tomorrow for a new reflection.
            </Text>
            <Pressable
              style={styles.drawButton}
              onPress={async () => {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                await drawToday();
              }}
            >
              <LinearGradient colors={["#E8C98E", "#B98B4E"]} style={styles.drawButtonGradient}>
                <Text style={styles.drawButtonText}>Draw Today's Fortune</Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : (
          <>
            <FortuneCard fortune={fortune} />
            {!!personalizedIntro && (
              <View style={styles.personalCard}>
                <Text style={styles.sectionLabel}>PERSONALIZED FOR YOU</Text>
                <Text style={styles.personalText}>{personalizedIntro}</Text>
              </View>
            )}

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>TODAY'S OVERVIEW</Text>
              <Text style={styles.bodyText}>{fortune.overview}</Text>
              <Text style={styles.quote}>“{fortune.shortMeaning}”</Text>
            </View>

            {(todayEntry?.detailUnlocked || isPremium) ? (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>DEEPER READING</Text>
                <Text style={styles.bodyText}>{fortune.detailedMeaning}</Text>
                <View style={styles.actionBox}>
                  <Text style={styles.actionLabel}>TODAY'S ACTION</Text>
                  <Text style={styles.actionText}>{fortune.action}</Text>
                </View>
              </View>
            ) : (
              <UnlockCard
                title="Unlock the deeper reading"
                subtitle="Watch a short rewarded ad to reveal the full interpretation and today's action."
                buttonText="Watch Ad to Unlock"
                onPress={unlockDetail}
              />
            )}

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>EXPLORE ONE AREA</Text>
              <Text style={styles.hint}>
                Free users can unlock one area with a rewarded ad. Premium members see all three.
              </Text>
              {(["love", "career", "wealth"] as DimensionKey[]).map((dimension) => {
                const unlocked = isPremium || unlockedDimensions.includes(dimension);
                return (
                  <View key={dimension} style={styles.dimensionCard}>
                    <View style={styles.dimensionHeader}>
                      <Text style={styles.dimensionTitle}>
                        {dimension === "love" ? "♡ Love" : dimension === "career" ? "◇ Career" : "◌ Wealth"}
                      </Text>
                      {!unlocked && <Text style={styles.lock}>Locked</Text>}
                    </View>
                    {unlocked ? (
                      <Text style={styles.bodyText}>{fortune.dimensions[dimension]}</Text>
                    ) : (
                      <Pressable style={styles.secondaryButton} onPress={() => unlockDimension(dimension)}>
                        <Text style={styles.secondaryButtonText}>Watch Ad to Unlock</Text>
                      </Pressable>
                    )}
                  </View>
                );
              })}
            </View>

            {todayEntry?.supplement ? (
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>SUPPLEMENTARY FORTUNE</Text>
                <Text style={styles.supplementTitle}>{todayEntry.supplement.title}</Text>
                <Text style={styles.bodyText}>{todayEntry.supplement.shortMeaning}</Text>
              </View>
            ) : (
              <UnlockCard
                title="Need one more perspective?"
                subtitle="Watch a rewarded ad to draw one supplementary fortune for today."
                buttonText="Watch Ad & Draw"
                onPress={drawSupplement}
              />
            )}

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>ASK YOUR FORTUNE</Text>
              <Text style={styles.hint}>Premium members can ask a personal follow-up question.</Text>
              <TextInput
                value={question}
                onChangeText={setQuestion}
                placeholder="What does this mean for my next move?"
                placeholderTextColor="#777381"
                style={styles.input}
                multiline
              />
              <Pressable style={styles.askButton} onPress={askFortune}>
                <Text style={styles.askButtonText}>{isPremium ? "Ask" : "Unlock with Premium"}</Text>
              </Pressable>
              {!!answer && <Text style={styles.answer}>{answer}</Text>}
            </View>
          </>
        )}
      </ScrollView>

      <BottomNav active={activeTab} onChange={setActiveTab} />
      <PaywallModal visible={showPaywall} onClose={() => setShowPaywall(false)} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { paddingTop: 66, paddingHorizontal: 20, paddingBottom: 130 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 28 },
  eyebrow: { color: "#A89BC0", fontSize: 11, letterSpacing: 2.2, fontWeight: "700" },
  title: { color: "#F6F1E8", fontSize: 30, fontWeight: "700", marginTop: 5 },
  premiumChip: { borderWidth: 1, borderColor: "#6E5F83", borderRadius: 999, paddingHorizontal: 13, paddingVertical: 9 },
  premiumChipActive: { borderColor: "#D5B678", backgroundColor: "rgba(213,182,120,0.12)" },
  premiumChipText: { color: "#E7D4AF", fontSize: 12, fontWeight: "700" },
  drawArea: { alignItems: "center", paddingTop: 72 },
  moon: { color: "#E6D1A2", fontSize: 90, marginBottom: 28 },
  drawTitle: { color: "#F6F1E8", fontSize: 26, textAlign: "center", fontWeight: "700" },
  drawSubtitle: { color: "#AAA4B2", fontSize: 15, lineHeight: 23, textAlign: "center", marginTop: 14, maxWidth: 310 },
  drawButton: { width: "100%", marginTop: 36, borderRadius: 18, overflow: "hidden" },
  drawButtonGradient: { paddingVertical: 18, alignItems: "center" },
  drawButtonText: { color: "#1C150D", fontSize: 16, fontWeight: "800" },
  section: { backgroundColor: "rgba(255,255,255,0.045)", borderWidth: 1, borderColor: "rgba(255,255,255,0.08)", borderRadius: 22, padding: 19, marginTop: 16 },
  personalCard: { borderRadius: 20, padding: 18, backgroundColor: "rgba(184,147,214,0.10)", borderWidth: 1, borderColor: "rgba(184,147,214,0.22)", marginTop: 16 },
  personalText: { color: "#DED3E8", fontSize: 14, lineHeight: 22, marginTop: 9 },
  sectionLabel: { color: "#BFAFCE", fontSize: 11, fontWeight: "800", letterSpacing: 1.8 },
  bodyText: { color: "#D7D2DD", fontSize: 15, lineHeight: 23, marginTop: 10 },
  quote: { color: "#EFE4CB", fontSize: 18, lineHeight: 27, marginTop: 16, fontStyle: "italic" },
  actionBox: { backgroundColor: "rgba(215,181,116,0.10)", borderRadius: 16, padding: 15, marginTop: 16 },
  actionLabel: { color: "#D7B574", fontSize: 10, fontWeight: "800", letterSpacing: 1.5 },
  actionText: { color: "#F1E7D4", fontSize: 15, lineHeight: 22, marginTop: 7 },
  hint: { color: "#8F8997", fontSize: 13, lineHeight: 20, marginTop: 8 },
  dimensionCard: { backgroundColor: "rgba(0,0,0,0.15)", borderRadius: 17, padding: 15, marginTop: 12 },
  dimensionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  dimensionTitle: { color: "#F1EBE2", fontSize: 16, fontWeight: "700", textTransform: "capitalize" },
  lock: { color: "#817A87", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 },
  secondaryButton: { borderWidth: 1, borderColor: "#7D6C91", borderRadius: 13, paddingVertical: 11, alignItems: "center", marginTop: 13 },
  secondaryButtonText: { color: "#D8C7E8", fontSize: 13, fontWeight: "700" },
  supplementTitle: { color: "#F1E2C2", fontSize: 21, fontWeight: "700", marginTop: 10 },
  input: { minHeight: 76, borderRadius: 14, borderWidth: 1, borderColor: "#403A4A", color: "#F5F0E8", padding: 13, marginTop: 13, textAlignVertical: "top" },
  askButton: { backgroundColor: "#EEE1C5", borderRadius: 14, paddingVertical: 13, alignItems: "center", marginTop: 10 },
  askButtonText: { color: "#171219", fontWeight: "800" },
  answer: { color: "#DAD1E2", fontSize: 14, lineHeight: 22, marginTop: 14 }
});
