import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useApp } from "@/context/AppContext";

const features = [
  "No ads",
  "Full daily reading and all three life dimensions",
  "Personalized reading based on mood, goal, birthday and zodiac",
  "Weekly and monthly reports",
  "Complete fortune history and trend insights",
  "AI follow-up questions",
  "Exclusive themes, animations and sounds",
  "Daily reminder; native home-screen widget planned for production build"
];

export function PaywallModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { isPremium, setPremium } = useApp();

  const purchase = () => {
    setPremium(true);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <LinearGradient colors={["#100D18", "#23162E", "#0D0B12"]} style={styles.page}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={onClose} style={styles.close}><Text style={styles.closeText}>Close</Text></Pressable>
          <Text style={styles.icon}>✦</Text>
          <Text style={styles.title}>Make every reading personal.</Text>
          <Text style={styles.subtitle}>Unlock the complete Fortune Daily experience.</Text>

          <View style={styles.features}>
            {features.map((feature) => (
              <View key={feature} style={styles.featureRow}>
                <Text style={styles.check}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <Pressable style={styles.plan} onPress={purchase}>
            <View>
              <Text style={styles.planTitle}>Annual</Text>
              <Text style={styles.planSub}>7-day free trial, then US$29.99/year</Text>
            </View>
            <Text style={styles.best}>BEST VALUE</Text>
          </Pressable>

          <Pressable style={styles.monthly} onPress={purchase}>
            <Text style={styles.planTitle}>Monthly</Text>
            <Text style={styles.planSub}>3-day free trial, then US$4.99/month</Text>
          </Pressable>

          {isPremium && <Text style={styles.active}>Premium is active in this development build.</Text>}
          <Text style={styles.legal}>
            Development mode uses a simulated purchase. Connect RevenueCat, App Store Connect and Google Play products before release.
          </Text>
        </ScrollView>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { padding: 24, paddingTop: 28, paddingBottom: 60 },
  close: { alignSelf: "flex-end", padding: 8 },
  closeText: { color: "#BFB5C8", fontWeight: "700" },
  icon: { color: "#E2C88F", fontSize: 55, textAlign: "center", marginTop: 20 },
  title: { color: "#F8F1E5", fontSize: 32, lineHeight: 39, fontWeight: "800", textAlign: "center", marginTop: 18 },
  subtitle: { color: "#AAA1B1", fontSize: 15, textAlign: "center", marginTop: 10 },
  features: { marginTop: 30, backgroundColor: "rgba(255,255,255,0.045)", borderRadius: 22, padding: 18 },
  featureRow: { flexDirection: "row", marginBottom: 14 },
  check: { color: "#DFC17F", fontWeight: "900", marginRight: 12 },
  featureText: { color: "#DAD3DF", fontSize: 14, lineHeight: 20, flex: 1 },
  plan: { backgroundColor: "#E8D5AE", borderRadius: 18, padding: 17, marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  monthly: { borderWidth: 1, borderColor: "#675A75", borderRadius: 18, padding: 17, marginTop: 12 },
  planTitle: { color: "#211A24", fontSize: 17, fontWeight: "900" },
  planSub: { color: "#5B4B5E", fontSize: 12, marginTop: 4 },
  best: { color: "#684F20", fontSize: 10, fontWeight: "900", letterSpacing: 1 },
  active: { color: "#D8BE85", textAlign: "center", marginTop: 18, fontWeight: "700" },
  legal: { color: "#6F6975", fontSize: 10, lineHeight: 15, textAlign: "center", marginTop: 18 }
});
