import {defineComponent} from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    }
  },

  computed: {
    coverStyle() {
      let coverStyle = {};

      if (this.image) {
        coverStyle['--bg-url'] = 'url(\'' + this.image + '\')';
      }

      return coverStyle;
    }
  },

  template: `
    <div class="meetup-cover" :style="coverStyle">
    <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
