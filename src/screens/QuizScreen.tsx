import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { TopicBar } from "../components/TopicBar";
import { colors, radius, spacing } from "../theme";
import { QuizQuestion } from "../types";
import {
  ALL_TOPICS,
  getTopics,
  letter,
  questionsForTopic,
  shuffle,
} from "../utils";

interface Item {
  q: QuizQuestion;
  options: string[];
}

function buildItems(topic: string): Item[] {
  return shuffle(questionsForTopic(topic)).map((q) => ({
    q,
    options: shuffle(q.options),
  }));
}

export function QuizScreen() {
  const topics = useMemo(() => getTopics(), []);
  const [topic, setTopic] = useState<string>(ALL_TOPICS);
  const [items, setItems] = useState<Item[]>(() => buildItems(ALL_TOPICS));
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
    setItems(buildItems(topic));
    setIndex(0);
    setChoice(null);
    setScore(0);
    setAnswered(0);
  }, [topic]);

  const item = items[index];
  const finished = index >= items.length;

  const pick = (option: string) => {
    if (choice) return;
    setChoice(option);
    setAnswered((n) => n + 1);
    if (option === item.q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setChoice(null);
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setItems(buildItems(topic));
    setIndex(0);
    setChoice(null);
    setScore(0);
    setAnswered(0);
  };

  return (
    <View style={styles.container}>
      <TopicBar topics={topics} selected={topic} onSelect={setTopic} />

      <View style={styles.scoreRow}>
        <Text style={styles.scoreText}>
          Score: {score}/{answered}
        </Text>
        <Text style={styles.scoreText}>
          {finished ? items.length : index + 1}/{items.length}
        </Text>
      </View>

      {finished ? (
        <View style={styles.center}>
          <Text style={styles.resultTitle}>Test complete!</Text>
          <Text style={styles.resultScore}>
            {score} / {items.length} correct
          </Text>
          <Text style={styles.resultPct}>
            {items.length ? Math.round((score / items.length) * 100) : 0}%
          </Text>
          <Pressable style={[styles.button, styles.primary]} onPress={restart}>
            <Text style={styles.buttonText}>Retake</Text>
          </Pressable>
        </View>
      ) : item ? (
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.topic}>{item.q.topic}</Text>
          <Text style={styles.question}>{item.q.question}</Text>

          {item.options.map((option, i) => {
            const isCorrect = option === item.q.answer;
            const isChosen = option === choice;
            const showState = choice !== null;
            return (
              <Pressable
                key={option}
                disabled={choice !== null}
                onPress={() => pick(option)}
                style={[
                  styles.option,
                  showState && isCorrect && styles.optionCorrect,
                  showState && isChosen && !isCorrect && styles.optionWrong,
                ]}
              >
                <View style={styles.letterBadge}>
                  <Text style={styles.letterText}>{letter(i)}</Text>
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            );
          })}

          {choice !== null ? (
            <View style={styles.feedback}>
              <Text
                style={[
                  styles.feedbackText,
                  choice === item.q.answer
                    ? styles.feedbackRight
                    : styles.feedbackWrong,
                ]}
              >
                {choice === item.q.answer ? "Correct! ✓" : "Incorrect."}
              </Text>
              {choice !== item.q.answer ? (
                <Text style={styles.correctLine}>
                  Answer: {item.q.answer}
                </Text>
              ) : null}
              {item.q.explanation ? (
                <Text style={styles.explanation}>{item.q.explanation}</Text>
              ) : null}
              <Pressable
                style={[styles.button, styles.primary]}
                onPress={next}
              >
                <Text style={styles.buttonText}>
                  {index + 1 >= items.length ? "See results" : "Next"}
                </Text>
              </Pressable>
            </View>
          ) : null}
        </ScrollView>
      ) : (
        <Text style={styles.empty}>No questions for this topic.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  scoreText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "700",
  },
  body: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  topic: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  question: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    marginBottom: spacing.md,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionCorrect: {
    backgroundColor: "#134e4a",
    borderColor: colors.success,
  },
  optionWrong: {
    backgroundColor: "#7f1d1d",
    borderColor: colors.danger,
  },
  letterBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  letterText: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 14,
  },
  optionText: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },
  feedback: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: "700",
  },
  feedbackRight: { color: colors.success },
  feedbackWrong: { color: colors.danger },
  correctLine: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  explanation: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
  },
  resultTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
  },
  resultScore: {
    color: colors.text,
    fontSize: 18,
  },
  resultPct: {
    color: colors.accent,
    fontSize: 48,
    fontWeight: "800",
  },
  empty: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    marginTop: spacing.xl,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.sm,
  },
  primary: { backgroundColor: colors.primary },
  buttonText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 16,
  },
});
