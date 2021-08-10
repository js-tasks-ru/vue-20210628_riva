import {defineComponent} from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  emits: [
    'update:count'
  ],

  data() {
    return {};
  },

  methods: {
    increaseСounter() {
      this.$emit('update:count', this.count + 1);
    }
  },

  template: `
    <button @click="increaseСounter" type="button">{{ count }}</button>`,
});
