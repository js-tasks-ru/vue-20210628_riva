import {createApp} from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

export default createApp({
  data() {
    return {
      id: 1,
      title: ''
    }
  },
  watch: {
    id: {
      handler(value) {
        fetchMeetupById(value).then(result => this.title = result.title);
      },
      immediate: true
    }
  },
  template: `
    <div>
    <template v-for="n in 5">
      <label>
        <input v-model="id" type="radio" :value="n"/> {{ n }}
      </label>
    </template>

    <hr/>

    <h3>{{ title }}</h3>
    </div>
  `
}).mount('#app');
