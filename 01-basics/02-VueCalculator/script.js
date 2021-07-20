import {createApp} from './vendor/vue.esm-browser.js';

export default createApp({
  data() {
    return {
      a: 0,
      b: 0,
      operation: 'sum'
    }
  },
  computed: {
    result() {
      let result;

      switch (this.operation) {
        case 'sum':
          result = this.a + this.b;
          break;
        case 'subtract':
          result = this.a - this.b;
          break;
        case 'multiply':
          result = this.a * this.b;
          break;
        case 'divide':
          result = this.a / this.b;
          break;
      }

      return result;
    }
  },
  template: `
    <div class="row">
    <div class="col">
      <input v-model.number="a" type="number"/>
    </div>

    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
      <label><input v-model="operation" type="radio" value="sum"/> ➕</label>
      <label><input v-model="operation" type="radio" value="subtract"/> ➖</label>
      <label><input v-model="operation" type="radio" value="multiply"/> ✖</label>
      <label><input v-model="operation" type="radio" value="divide"/> ➗</label>
    </div>

    <div class="col">
      <input v-model.number="b" type="number"/>
    </div>

    <div class="col">=</div>

    <output class="col">{{ result }}</output>
    </div>
  `
}).mount('#app');
