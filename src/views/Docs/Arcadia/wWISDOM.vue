<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        wWISDOM
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <div class="text-center">
                <v-img
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                  class="img mb-4 "
                ></v-img>
                <span v-html="topics[i].img[j].imgdesc" class="titleImg" />
              </div>
              <div class="d-flex mt-1">
                <span class="font-weight-bold">Name: </span>
                <span class="description ml-2">{{ topics[i].img[j].name }}</span>
              </div>
              <div class="d-flex mt-3">
                <span class="font-weight-bold">Type: </span>
                <span class="description ml-2">{{ topics[i].img[j].type }}</span>
              </div>
              <div class="d-flex mt-3">
                <span class="font-weight-bold">Ticker: </span>
                <span class="description ml-2">{{ topics[i].img[j].ticker }}</span>
              </div>
              <div class="d-flex mt-3">
                <span class="font-weight-bold">Contract address: </span>
                <span class="description ml-2">{{ topics[i].img[j].address }}</span>
              </div>
              <div class="d-flex mt-3">
                <span class="font-weight-bold">Chain: </span>
                <span class="description ml-2">{{ topics[i].img[j].chain }}</span>
              </div>
              <div class="d-flex mt-3">
                <span class="font-weight-bold">Supply: </span>
                <span class="description ml-2">{{ topics[i].img[j].supply }}</span>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import wWISDOM from 'Assets/wWISDOM.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc:
            '<br>wWISDOM is the ticket for the community to express opinions on matters that the development team requests participation. These topics will help the development team understand how players prefer certain features and their importance in gameplay. wWISDOM is a token used to empower the community. Its usefulness comes from the help of its owners to make decisions regarding the project.',
        },
        {
          desc:
            'The wWISDOM supply will be distributed to players who buy wLAND from the private sale (29%), ring bearers (20%) and the development team (51%).',
        },
        {
          desc:
            'The distribution of wWISDOM to wLAND Buyers on Private Sale is a reward to incentivize early participation. Additionally, as a double incentive wWISDOM holders are able to farm wGOLD in a reserved one token pool.',
        },
        {
          desc:
            'The distribution schedule will be as follows:<br><li>To wLAND Buyers on Private Sale <li>The distribution to private buyers will last two months.</li>.</li><li>To Ring Bearers one month after the Private Sale.</li><li>To the development team two months after the Private Sale.</li>',
        },
        {
          desc: 'The distribution will last for a period of 2 years (approximately 2% per month).',
        },
        {
          desc:
            'The total supply will be defined according to the private sale of wLAND in the proportion of 10000:1, ie for every 10000 wLAND sold in the private sale, 1 wWISDOM will be issued.',
        },
        {
          title: 'wWISDOM',
          desc:
            '<br>wWISDOM is a token used to empower the community. Its usefulness comes from the help of its owners to make decisions regarding the project.',
          img: [
            {
              link: wWISDOM,
              heigth: '300',
              imgdesc: 'wWISDOM Icon',
              name: 'War Wisdom',
              type: 'Resource',
              ticker: 'wWISDOM',
              address: '',
              chain: 'Binance Smart Chain (BEP-20)',
              supply: 'Defined To (After Arcadia Private Sale)',
            },
          ],
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
.description li {
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
