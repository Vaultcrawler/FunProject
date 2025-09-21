
import { VocabTest } from '../vocabTest';
import { VocabTestView } from './vocab-test-view';
import { VocabTestController } from './vocab-test-controller';

const view = new VocabTestView('app');
const controller = new VocabTestController(new VocabTest(), view);
controller.start();