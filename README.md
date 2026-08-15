# USMDO Study

A study app for the **US Medicine Olympiad (USMDO)**, built with Expo / React Native.
It pairs concise high-yield **study notes** with **A–E multiple-choice quizzes** in the
USMDO test style.

## Features

- **Notes** — high-yield bullet-point notes grouped by topic.
- **Quiz** — five-option (A–E) multiple-choice questions with instant feedback,
  the correct answer, an explanation, and scoring.
- **Browse** — all questions with their correct answers, grouped by topic.
- **Topic filters** — Cardiovascular, Respiratory, Neurology, Endocrine,
  Renal, Gastrointestinal, Hematology, Immunology, and Pharmacology.

## Run it

```powershell
npm install
npm start
```

Open the project in **Expo Go** on your phone, or press `i` / `a`.

## Project structure

```
App.tsx                     Tab shell (Notes / Quiz / Browse)
src/
  components/TopicBar.tsx    Horizontal topic filter chips
  data/
    notes.ts                Study notes by topic
    questions.ts            A–E question bank
  screens/
    NotesScreen.tsx
    QuizScreen.tsx          A–E multiple choice
    BrowseScreen.tsx
  theme.ts                  Colors / spacing / radius tokens
  types.ts                  StudyNote + QuizQuestion types
  utils.ts                  Topic + shuffle + letter helpers
.github/workflows/ios-ipa.yml  Builds an unsigned iOS IPA for sideloading
```

## Free iOS install (no Mac, no paid Apple account)

Push to GitHub and let the workflow build an unsigned `.ipa`, then sign + install
it with [Sideloadly](https://sideloadly.io) using a free Apple ID.

> Educational study aid. Not affiliated with USMDO. Content is general medical
> knowledge for exam preparation, not medical advice.
