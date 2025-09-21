import { VocabTest } from './vocabTest';

class VocabTestApp {
	private vocabTest: VocabTest;
	private correctCount: number = 0;
	private minesweeperStarted: boolean = false;

	constructor() {
		this.vocabTest = new VocabTest();
		this.initAndStart();
	}

	private async initAndStart() {
		await this.vocabTest.init();
		this.renderQuestion();
	}

	renderQuestion() {
		if (this.minesweeperStarted) return;
		const question = this.vocabTest.getQuestion();
		if (!question) {
			this.renderEnd();
			return;
		}
		let app = document.getElementById('app');
		if (!app) {
			app = document.createElement('div');
			app.id = 'app';
			document.body.appendChild(app);
		}
		app.innerHTML = `
			<h2>Was heißt <span style="color: #0074D9">${question.spanish}</span> auf Deutsch?</h2>
			<div id="options">
				${question.options.map((opt: string, i: number) => `<button data-opt="${opt}" style="margin: 0.5em;">${opt}</button>`).join('')}
			</div>
			<div id="result" style="margin-top:1em;"></div>
		`;

		const optionsDiv = document.getElementById('options');
		const resultDiv = document.getElementById('result');
		if (optionsDiv && resultDiv) {
			let answered = false;
			optionsDiv.addEventListener('click', (e) => {
				const target = e.target as HTMLElement;
				if (target.tagName === 'BUTTON' && !answered) {
					answered = true;
					const selected = target.getAttribute('data-opt');
					if (selected === question.answer) {
						resultDiv.innerHTML = '<span style="color:green">Richtig!</span>';
						this.correctCount++;
						if (this.correctCount >= 5 && !this.minesweeperStarted) {
							this.minesweeperStarted = true;
							setTimeout(() => this.startMinesweeper(), 800);
							return;
						}
					} else {
						resultDiv.innerHTML = `<span style=\"color:red\">Falsch! Richtig war: ${question.answer}</span>`;
					}
					// Add Weiter button
					const weiterBtn = document.createElement('button');
					weiterBtn.textContent = 'Weiter';
					weiterBtn.style.marginLeft = '1em';
					weiterBtn.onclick = () => {
						this.vocabTest.nextQuestion();
						this.renderQuestion();
					};
					resultDiv.appendChild(document.createElement('br'));
					resultDiv.appendChild(weiterBtn);
				}
			});
		}
	}

	private startMinesweeper() {
		let app = document.getElementById('app');
		if (!app) {
			app = document.createElement('div');
			app.id = 'app';
			document.body.appendChild(app);
		}
		app.innerHTML = '<h2>Minesweeper!</h2><div id="minesweeper-container"></div>';
		// Statically import and start MinesweeperView
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const { MinesweeperView } = require('./minesweeper/minesweeper-view');
		new MinesweeperView('minesweeper-container', 8, 8, 10);
	}

	renderEnd() {
		let app = document.getElementById('app');
		if (!app) {
			app = document.createElement('div');
			app.id = 'app';
			document.body.appendChild(app);
		}
		app.innerHTML = `<h2>Test beendet!</h2>`;
	}
}


new VocabTestApp();