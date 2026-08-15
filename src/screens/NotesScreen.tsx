import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { TopicBar } from "../components/TopicBar";
import { colors, radius, spacing } from "../theme";
import { ALL_TOPICS, getTopics, notesForTopic } from "../utils";

export function NotesScreen() {
  const topics = useMemo(() => getTopics(), []);
  const [topic, setTopic] = useState<string>(ALL_TOPICS);
  const notes = notesForTopic(topic);

  return (
    <View style={styles.container}>
      <TopicBar topics={topics} selected={topic} onSelect={setTopic} />

      <ScrollView contentContainerStyle={styles.content}>
        {notes.map((note) => (
          <View key={note.id} style={styles.card}>
            <Text style={styles.topic}>{note.topic}</Text>
            <Text style={styles.title}>{note.title}</Text>
            {note.points.map((point, i) => (
              <View key={i} style={styles.pointRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.point}>{point}</Text>
              </View>
            ))}
          </View>
        ))}
        {notes.length === 0 ? (
          <Text style={styles.empty}>No notes for this topic yet.</Text>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  topic: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "800",
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  pointRow: {
    flexDirection: "row",
    marginBottom: spacing.sm,
  },
  bullet: {
    color: colors.primary,
    fontSize: 16,
    marginRight: spacing.sm,
    lineHeight: 22,
  },
  point: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
