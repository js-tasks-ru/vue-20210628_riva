import {defineComponent} from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import {fetchMeetupById} from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      meetup: null,
      errorMessage: null
    };
  },

  computed: {
    loading() {
      return (this.meetup ?? this.errorMessage) === null;
    }
  },

  watch: {
    meetupId: {
      handler(value) {
        this.meetup = this.errorMessage = null;

        fetchMeetupById(value).then(
          result => this.meetup = result,
          error => this.errorMessage = error.message
        );
      },
      immediate: true
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  template: `
    <div class="page-meetup">
    <ui-container v-if="loading">
      <ui-alert>Загрузка...</ui-alert>
    </ui-container>
    <template v-else>
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>
      <ui-container v-else>
        <ui-alert>{{ errorMessage }}</ui-alert>
      </ui-container>
    </template>
    </div>`,
});
