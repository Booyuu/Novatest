import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DailyEntry, DimensionKey, StoredState, UserProfile } from "@/types";
import { fortunes } from "@/data/fortunes";
import { loadState, saveState } from "@/services/storage";
import { showRewardedAd } from "@/services/rewardedAds";

interface AppContextValue extends StoredState {
  isReady: boolean;
  todayEntry?: DailyEntry;
  drawToday: () => Promise<void>;
  unlockDetail: () => Promise<void>;
  unlockDimension: (dimension: DimensionKey) => Promise<void>;
  drawSupplement: () => Promise<void>;
  setPremium: (value: boolean) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const defaultProfile: UserProfile = {
  birthDate: "",
  zodiac: "",
  mood: "",
  goal: "",
  reminderEnabled: false,
  theme: "Midnight"
};

const initialState: StoredState = {
  history: [],
  isPremium: false,
  profile: defaultProfile
};

const AppContext = createContext<AppContextValue | null>(null);

function localDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function randomFortune(excludeId?: string) {
  const candidates = fortunes.filter((item) => item.id !== excludeId);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoredState>(initialState);
  const [isReady, setReady] = useState(false);
  const today = localDateKey();

  useEffect(() => {
    loadState().then((saved) => {
      if (saved) setState(saved);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (isReady) saveState(state);
  }, [state, isReady]);

  const todayEntry = useMemo(
    () => state.history.find((entry) => entry.date === today),
    [state.history, today]
  );

  const updateToday = (updater: (entry: DailyEntry) => DailyEntry) => {
    setState((current) => ({
      ...current,
      history: current.history.map((entry) => entry.date === today ? updater(entry) : entry)
    }));
  };

  const drawToday = async () => {
    if (todayEntry) return;
    const entry: DailyEntry = {
      date: today,
      fortune: randomFortune(),
      detailUnlocked: false,
      unlockedDimensions: []
    };
    setState((current) => ({ ...current, history: [entry, ...current.history] }));
  };

  const unlockDetail = async () => {
    if (!todayEntry) return;
    if (state.isPremium) {
      updateToday((entry) => ({ ...entry, detailUnlocked: true }));
      return;
    }
    if (await showRewardedAd()) {
      updateToday((entry) => ({ ...entry, detailUnlocked: true }));
    }
  };

  const unlockDimension = async (dimension: DimensionKey) => {
    if (!todayEntry) return;
    if (state.isPremium || await showRewardedAd()) {
      updateToday((entry) => ({
        ...entry,
        unlockedDimensions: Array.from(new Set([...entry.unlockedDimensions, dimension]))
      }));
    }
  };

  const drawSupplement = async () => {
    if (!todayEntry || todayEntry.supplement) return;
    if (state.isPremium || await showRewardedAd()) {
      updateToday((entry) => ({
        ...entry,
        supplement: randomFortune(entry.fortune.id)
      }));
    }
  };

  const setPremium = (value: boolean) => {
    setState((current) => ({ ...current, isPremium: value }));
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    setState((current) => ({
      ...current,
      profile: { ...current.profile, ...profile }
    }));
  };

  return (
    <AppContext.Provider value={{
      ...state,
      isReady,
      todayEntry,
      drawToday,
      unlockDetail,
      unlockDimension,
      drawSupplement,
      setPremium,
      updateProfile
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
