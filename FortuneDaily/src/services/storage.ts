import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoredState } from "@/types";

const STORAGE_KEY = "@fortune_daily_state_v1";

export async function loadState(): Promise<StoredState | null> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredState;
  } catch {
    return null;
  }
}

export async function saveState(state: StoredState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
