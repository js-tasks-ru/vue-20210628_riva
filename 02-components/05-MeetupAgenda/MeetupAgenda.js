import {defineComponent} from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  props: {
    'agenda': {
      type: Array,
      required: true
    }
  },

  components: {MeetupAgendaItem},

  template: `
    <ul class="agenda">
    <li v-for="item in agenda" :key="item.id" class="agenda__item">
      <meetup-agenda-item :agenda-item="item"></meetup-agenda-item>
    </li>
    </ul>`,
});
