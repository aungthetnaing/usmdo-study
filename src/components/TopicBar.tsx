import { ScrollView, StyleSheet, Text, Pressable } from "react-native";

import { colors, radius, spacing } from "../theme";

interface Props {
  topics: string[];
  selected: string;
  onSelect: (topic: string) => void;
}

/** Horizontal scrolling row of topic filter chips. */
export function TopicBar({ topics, selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {topics.map((topic) => {
        const active = topic === selected;
        return (
          <Pressable
            key={topic}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect(topic)}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {topic}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  text: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  textActive: {
    color: colors.text,
  },
});
