import {createApp} from './vendor/vue.esm-browser.js';

export default createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseСounter() {
      this.counter++;
    }
  },
  template: `
    <button @click="increaseСounter" type="button">{{ counter }}</button>
  `
}).mount('#app');
