<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Resources
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span class="description" v-html="topics[i].desc" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <div class="text-center">
                <v-img
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                  class="img mb-4 "
                ></v-img>
                <span v-html="topics[i].img[j].rarity" class="titleImg" />
                <span class="description" v-html="topics[i].img[j].name"></span>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import I0 from 'Assets/docs/resources/0.png';
import I1 from 'Assets/docs/resources/1.png';
import I2 from 'Assets/docs/resources/2.png';
import I3 from 'Assets/docs/resources/3.png';
import I4 from 'Assets/docs/resources/4.png';
import I5 from 'Assets/docs/resources/5.png';
import I6 from 'Assets/docs/resources/6.png';
import I7 from 'Assets/docs/resources/7.png';
import I8 from 'Assets/docs/resources/8.png';
import I9 from 'Assets/docs/resources/9.png';
import I10 from 'Assets/docs/resources/10.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>APWars resources',
        },
        {
          desc: '<br>Economic resources are divided in three main groups:',
        },
        {
          title: 'Raw Materials',
          desc:
            '<br>Raw Materials are natural resources that can be found in the world. There are available to be gathered with low to none technology.',
        },
        {
          title: 'Enhanced Materials',
          desc:
            '<br>Enhanced Materials are raw materials benefited by labor and technology. Those resources are prone to be developed by more sophisticated villages and have a grater market price.',
        },
        {
          title: 'Labor',
          desc:
            '<br>Labor is the measurement of time to conclude all material operations in the game. A civilization with more workers is a civilization with more productive capacity.',
        },
        {
          img: [
            {
              link: I0,
              heigth: '300',
              rarity: 'Common',
              name: 'Clay',
            },
          ],
        },
        {
          img: [
            {
              link: I1,
              heigth: '300',
              rarity: 'Epic',
              name: 'Iron',
            },
          ],
        },
        {
          img: [
            {
              link: I2,
              heigth: '300',
              rarity: 'Common',
              name: 'Untreated Wood',
            },
          ],
        },
        {
          img: [
            {
              link: I3,
              heigth: '300',
              rarity: 'Rare',
              name: 'Cattle',
            },
          ],
        },
        {
          img: [
            {
              link: I4,
              heigth: '300',
              rarity: 'Rare',
              name: 'Iron Ore',
            },
          ],
        },
        {
          img: [
            {
              link: I6,
              heigth: '300',
              rarity: 'Common',
              name: 'Stone',
            },
          ],
        },
        {
          img: [
            {
              link: I7,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Wood',
            },
          ],
        },
        {
          img: [
            {
              link: I8,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Grains',
            },
          ],
        },
        {
          img: [
            {
              link: I9,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Water',
            },
          ],
        },
        {
          img: [
            {
              link: I5,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Human Worker',
            },
          ],
        },
        {
          img: [
            {
              link: I10,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Orc Worker',
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
