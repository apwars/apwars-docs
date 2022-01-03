<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Pumpamentals
      </v-banner>

      <v-container>
        <v-card-text>
          <div class="justify-center mb-6">
            <span class="description">
              Cutting to the econ-chase.
            </span>
          </div>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold mb-3">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description mt-2" />
            <span class="mt-2 description" v-html="topics[i].p"></span>
            <span class="description mt-2" v-html="topics[i].span"></span>
            <span class="font-weight-bold mt-2" v-html="topics[i].subtitle"></span>
            <div v-for="(item, j) in topics[i].ul" :key="j" class="mt-1">
              <ul>
                <li><span class="description" v-html="topics[i].ul[j]"></span></li>
              </ul>
            </div>
            <div class="text-center">
              <img :src="topics[i].link" :max-width="topics[i].height" class="img" />
              <span class="titleImg">{{ topics[i].desc2 }}</span>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import wGOLDgraph from 'Assets/docs/wGOLDgraph.png';
import PiggyBank from 'Assets/docs/PiggyBank.png';
import Equation from 'Assets/docs/equation.png';
import WeeklyEmissionsWeeklyBurn from 'Assets/docs/WeeklyEmissionsWeeklyBurn.png';
import AcumulatedEmissionsAccumulatedBurn from 'Assets/docs/AcumulatedEmissionsAccumulatedBurn.png';
import MonthlyemissionMonthlyBurn from 'Assets/docs/MonthlyemissionMonthlyBurn.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      wGOLDgraph,
      PiggyBank,
      topics: [
        {
          title: 'Economic Pumpamentals',
          p: '<br><br>Deflationary protocol by design<br>',
          span:
            "<br>One of the biggest challenges of the crypto-sphere is to preserve long term protocol value. Economic value is fostered by the symbiotic collaboration between scarcity and utility. From the Utility standpoint, the protocol plays an entertainment role (which is one of the world's biggest markets), while offering users innovative ways to interact with the DeFi Farming space. APWars combines the latest and hottest blockchain technologies at the same protocol in a coherent structure. From the Scarcity standpoint, the combination of the Deflationary emission curve and the Multiple Burning Mechanisms make the token deflationary; below is a model that represents a 3 year timeframe.<br>",
          subtitle: '<br>Model assumptions:<br>',
          ul: [
            'Consider successive weekly allocations of 250.000 USD (TVL is already "UPDATE this value” 437.000 USD in the first week at the time of this writing) into the protocol pools that generates deposit fees, compounded with the conservative rate of 2.75% increase per week – “Refer to APR or APY (2.75 x 52 weeks) so people can relate to Pancake or other protocols for comparison” (Plausible stream for good farming protocols.)',
            'Consider the deposit fee of 3.6% and that will go to the Dark Forces treasure pool to be challenged by the supreme faction.',
            'Consider 50% as the long term expected probability of wGOLD burn, according to the law of large numbers, that can be derived from the average of the probability range between 0% and 100%. ([0 + 100]/2 = 50% -> toss of a fair coin).',
          ],
          link: Equation,
          height: 700,
          desc2: 'Model equation',
        },
        {
          span:
            'mB = Weekly burn<br>DFS = Deposit fee staked at Dark Forces bounty<br>pB = Probability of burn<br>mVL = Weekly value locked',
          link: WeeklyEmissionsWeeklyBurn,
          height: 700,
          desc2: 'Deflationary turnover',
        },
        {
          span:
            'The protocol would become deflationary whenever the red curve is above the blue one in the above chart around the 50th week.',
          link: AcumulatedEmissionsAccumulatedBurn,
          height: 700,
          desc2: 'The blue line represents what we call Asymptotic Limited Supply',
        },
        {
          span:
            'Further discussion<br>According to the benchmark fundamented approach, considering Goose Finance as a competitor, the if the TVL is similar for the same period, the protocol could become deflationary in a shorter timeframe than 6 months.',
          link: MonthlyemissionMonthlyBurn,
          height: 700,
          desc2: 'Goose Benckmark - Deflationary turnover',
        },
        {
          span:
            'Also, we are not accounting for the strongest burning mechanism in APWars, the use of gold for unit creation. Due to the unpredictability of troop farming we did not account any weight to this burning factor in the model. Considering that this excluded factor is the core mechanics of the game, burning rate could be even more steep and the deflationary turnover, faster.',
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
  font-size: 14px;
}
.description p {
  font-size: 14px;
}

.titleImg {
  font-size: 12px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
ul li {
  font-size: 14px;
}
</style>
