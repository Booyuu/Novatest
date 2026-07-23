export type FortuneLevel =
  | "Exceptional Fortune"
  | "Good Fortune"
  | "Gentle Blessing"
  | "Balanced"
  | "Proceed with Care"
  | "A Day for Caution";

export type DimensionKey = "love" | "career" | "wealth";

export interface Fortune {
  id: string;
  level: FortuneLevel;
  title: string;
  symbol: string;
  score: number;
  overview: string;
  shortMeaning: string;
  detailedMeaning: string;
  action: string;
  dimensions: Record<DimensionKey, string>;
}

export interface DailyEntry {
  date: string;
  fortune: Fortune;
  detailUnlocked: boolean;
  unlockedDimensions: DimensionKey[];
  supplement?: Fortune;
}

export interface UserProfile {
  birthDate: string;
  zodiac: string;
  mood: string;
  goal: string;
  reminderEnabled: boolean;
  theme: "Midnight" | "Temple" | "Moonlight";
}

export interface StoredState {
  history: DailyEntry[];
  isPremium: boolean;
  profile: UserProfile;
}
