<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        The Global Events
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].ul" :key="j" class="justify-center d-block">
              <ul>
                <li>{{ topics[i].ul[j] }}</li>
              </ul>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'The Global Events',
          desc:
            '<br>The Global Events are a list of circumstances that can take place in a weekly basis, except on the week of The Celebration Festival, if a demanded tribute is not send to the FEDs address within a specific timeframe. The tribute is demanded during one week and the random consequence can take place in the following week.',
        },
        {
          title: 'Tribute',
          desc: '<br>The current tribute is the total amount of 100.000 wGOLD',
        },
        {
          title: 'Consequences:',
          ul: [
            '5% - Reduction in a permanent global gold production by 1%',
            '5% - Reduce gold production by 20% for 24 hours',
            '5% - FED receives 100% of the emission of the devs for 24h.',
            '5% - Nothing happens.',
            '20% - Increase the reward in the wGOLD/BUSD pool by 20%.',
            '20% - Stop troop production of Corp faction for 24 hours.',
            '20% - Stop troop production of Degen faction for 24 hours.',
            '20% - Stop Production for both troops for 24 hours.',
          ],
        },
        {
          title: 'FAQ',
        },
        {
          title: 'What if a tribute sent in a timeframe is less than the demanded amount?',
          desc:
            '<br>The consequence will not be avoided for the week in question and the sent amount will accumulate and count as tribute to the next week.',
        },
        {
          title: 'Is there a way to stop the consequence after it has passed?',
          desc:
            '<br>Yes but a sum of wGOLD corresponding to twice the amount of the tribute should be paid to the FED.',
        },
      ],
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.span {
  font-size: 18px;
}
.description p {
  font-size: 18px;
}

.titleImg {
  font-size: 12px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
ul li {
  font-size: 18px;
}
</style>
