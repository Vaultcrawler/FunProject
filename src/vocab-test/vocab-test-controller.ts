import { VocabTest } from '../vocabTest';
import { VocabTestView } from './vocab-test-view';

export class VocabTestController {
  private test: VocabTest;
  private view: VocabTestView;

  constructor(test: VocabTest, view: VocabTestView) {
    this.test = test;
    this.view = view;
  }

  start() {
    this.renderCurrent();
  }

  renderCurrent() {
    const question = this.test.getQuestion();
    if (!question) {
      this.view.renderEnd();
      return;
    }
    this.view.renderQuestion(question);
    this.view.bindOptionClick((selected) => {
      const isCorrect = selected === question.answer;
      this.view.renderResult(isCorrect, question.answer);
      this.view.addWeiterButton(() => {
        this.test.nextQuestion();
        this.renderCurrent();
      });
    });
  }
}
