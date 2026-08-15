import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { BrowseScreen } from "./src/screens/BrowseScreen";
import { NotesScreen } from "./src/screens/NotesScreen";
import { QuizScreen } from "./src/screens/QuizScreen";
import { colors, spacing } from "./src/theme";

type Tab = "notes" | "quiz" | "browse";

const TABS: { key: Tab; label: string }[] = [
  { key: "notes", label: "Notes" },
  { key: "quiz", label: "Quiz" },
  { key: "browse", label: "Browse" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("notes");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      <View style={styles.appBar}>
        <Text style={styles.title}>⚕️ USMDO Study</Text>
        <Text style={styles.subtitle}>Medicine Olympiad · notes & A–E quizzes</Text>
      </View>

      <View style={styles.content}>
        {tab === "notes" && <NotesScreen />}
        {tab === "quiz" && <QuizScreen />}
        {tab === "browse" && <BrowseScreen />}
      </View>

      <View style={styles.tabBar}>
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <Pressable
              key={t.key}
              style={styles.tab}
              onPress={() => setTab(t.key)}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appBar: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 2,
  },
  content: { flex: 1 },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  tabText: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: "700",
  },
  tabTextActive: {
    color: colors.primary,
  },
});
