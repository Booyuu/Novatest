import { Alert } from "react-native";

/**
 * Development adapter.
 * Replace this implementation with Google Mobile Ads RewardedAd in an
 * Expo development build. Expo Go cannot load custom native ad modules.
 */
export async function showRewardedAd(): Promise<boolean> {
  return new Promise((resolve) => {
    Alert.alert(
      "Test Rewarded Ad",
      "This simulates a completed rewarded ad. Connect AdMob before release.",
      [
        { text: "Cancel", style: "cancel", onPress: () => resolve(false) },
        { text: "Complete Ad", onPress: () => resolve(true) }
      ]
    );
  });
}
