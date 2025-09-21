

import type { VocabListEntry } from './types/VocabListEntry';
import type { VocabQuestion } from './types/VocabQuestion';
import { vocabList } from './vocab-test/vocabList';


export class VocabTest {
  private questions: VocabQuestion[] = [];
  private currentIndex: number = 0;

  constructor() {}

  async init() {
    this.questions = vocabList.map((entry) => {
      // Pick 3 wrong options
      const wrong = this.shuffle(
        vocabList.filter((v) => v.german !== entry.german)
      ).slice(0, 3);
      const options = this.shuffle([
        entry.german,
        ...wrong.map((v) => v.german),
      ]);
      return {
        spanish: entry.spanish,
        options,
        answer: entry.german,
      };
    });
    this.currentIndex = 0;
    this.shuffleQuestions();
  }

  private shuffle<T>(array: T[]): T[] {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  private shuffleQuestions() {
    this.questions = this.shuffle(this.questions);
  }

  public getQuestion(): VocabQuestion | null {
    if (this.currentIndex < this.questions.length) {
      return this.questions[this.currentIndex] ?? null;
    }
    return null;
  }

  public nextQuestion(): VocabQuestion | null {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      return this.questions[this.currentIndex] ?? null;
    }
    return null;
  }

  public reset(): void {
    this.currentIndex = 0;
    this.shuffleQuestions();
  }
}
