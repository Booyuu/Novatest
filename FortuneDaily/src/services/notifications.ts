import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function enableDailyReminder(): Promise<boolean> {
  const permission = await Notifications.requestPermissionsAsync();
  if (!permission.granted) return false;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("daily-fortune", {
      name: "Daily Fortune",
      importance: Notifications.AndroidImportance.DEFAULT
    });
  }

  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Your daily fortune is waiting",
      body: "Take a quiet moment and draw today's reflection."
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 8,
      minute: 30
    }
  });
  return true;
}

export async function disableDailyReminder(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
