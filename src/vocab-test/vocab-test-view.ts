export class VocabTestView {
  private app: HTMLElement;
  constructor(appId: string) {
    const app = document.getElementById(appId);
    if (!app) throw new Error('App element not found');
    this.app = app;
  }

  renderQuestion(question: {spanish: string, options: string[]}) {
    this.app.innerHTML = `
      <div class="vocab-quiz-container">
        <div class="quiz-title">Vokabeltest</div>
        <div class="quiz-question">Was heißt <span style="color: #0074D9">${question.spanish}</span> auf Deutsch?</div>
        <div id="options" class="quiz-options">
          ${question.options.map((opt: string) => `<button class="quiz-btn" data-opt="${opt}">${opt}</button>`).join('')}
        </div>
        <div id="result" class="quiz-feedback"></div>
      </div>
    `;
  }

  renderResult(isCorrect: boolean, answer: string) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      if (isCorrect) {
        resultDiv.innerHTML = '<span>Richtig!</span>';
        resultDiv.classList.remove('wrong');
        resultDiv.classList.add('right');
      } else {
        resultDiv.innerHTML = `<span>Falsch! Richtig war: ${answer}</span>`;
        resultDiv.classList.remove('right');
        resultDiv.classList.add('wrong');
      }
    }
  }

  renderEnd() {
    this.app.innerHTML = `
      <div class="vocab-quiz-container">
        <div class="quiz-title">Test beendet!</div>
      </div>
    `;
  }

  addWeiterButton(onClick: () => void) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      const weiterBtn = document.createElement('button');
      weiterBtn.textContent = 'Weiter';
      weiterBtn.className = 'quiz-btn';
      weiterBtn.style.marginLeft = '1em';
      weiterBtn.onclick = onClick;
      resultDiv.appendChild(document.createElement('br'));
      resultDiv.appendChild(weiterBtn);
    }
  }

  bindOptionClick(handler: (selected: string) => void) {
    const optionsDiv = document.getElementById('options');
    if (optionsDiv) {
      let answered = false;
      optionsDiv.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' && !answered) {
          answered = true;
          const selected = target.getAttribute('data-opt');
          if (selected) handler(selected);
        }
      });
    }
  }
}
