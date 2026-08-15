import { NOTES } from "./data/notes";
import { QUESTIONS } from "./data/questions";
import { QuizQuestion, StudyNote } from "./types";

export const ALL_TOPICS = "All topics";

/** Unique topic names across notes + questions, prefixed with an "All" option. */
export function getTopics(): string[] {
  const seen: string[] = [];
  for (const q of QUESTIONS) if (!seen.includes(q.topic)) seen.push(q.topic);
  for (const n of NOTES) if (!seen.includes(n.topic)) seen.push(n.topic);
  return [ALL_TOPICS, ...seen];
}

export function questionsForTopic(topic: string): QuizQuestion[] {
  if (topic === ALL_TOPICS) return QUESTIONS;
  return QUESTIONS.filter((q) => q.topic === topic);
}

export function notesForTopic(topic: string): StudyNote[] {
  if (topic === ALL_TOPICS) return NOTES;
  return NOTES.filter((n) => n.topic === topic);
}

/** Fisher-Yates shuffle returning a new array. */
export function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

/** Uppercase letter label for a 0-based option index (0 -> A, 1 -> B, …). */
export function letter(index: number): string {
  return String.fromCharCode(65 + index);
}
