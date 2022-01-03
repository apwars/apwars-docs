<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Mystic Protectors
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
                <div>
                  <span class="description" v-html="topics[i].img[j].name"></span>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import I0 from 'Assets/docs/protectors/0.png';
import I1 from 'Assets/docs/protectors/1.png';
import I2 from 'Assets/docs/protectors/2.png';
import I3 from 'Assets/docs/protectors/3.png';
import I4 from 'Assets/docs/protectors/4.png';
import I5 from 'Assets/docs/protectors/5.png';
import I6 from 'Assets/docs/protectors/6.png';
import I7 from 'Assets/docs/protectors/7.png';
import I8 from 'Assets/docs/protectors/8.png';
import I9 from 'Assets/docs/protectors/9.png';
import I10 from 'Assets/docs/protectors/10.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: 'APWars Familiars',
        },
        {
          desc:
            'Mystic Protectors are familiars fostered by faith and culture that are know as spiritual protectors of villages and folks men.',
          img: [
            {
              link: I0,
              heigth: '800',
              rarity: 'Mystic Protectors',
              desc:
                'Those protectors can be worshiped one at at time per village and to be able to host their spirit the village has to posses a level 3 temple.',
            },
          ],
        },
        {
          title: 'Mystic Protectors',
          img: [
            {
              link: I1,
              heigth: '300',
              rarity: 'Pegasus',
              name: 'Rare',
            },
          ],
        },
        {
          img: [
            {
              link: I2,
              heigth: '300',
              rarity: 'Epic',
              name: 'Draco',
            },
          ],
        },
        {
          img: [
            {
              link: I3,
              heigth: '300',
              rarity: 'Common',
              name: 'Taurus',
            },
          ],
        },
        {
          img: [
            {
              link: I4,
              heigth: '300',
              rarity: 'Epic',
              name: 'Dominus',
            },
          ],
        },
        {
          img: [
            {
              link: I5,
              heigth: '300',
              rarity: 'Rare',
              name: 'Griffin',
            },
          ],
        },
        {
          img: [
            {
              link: I6,
              heigth: '300',
              rarity: 'Common',
              name: 'Aries',
            },
          ],
        },
        {
          img: [
            {
              link: I7,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Aracnum',
            },
          ],
        },
        {
          img: [
            {
              link: I8,
              heigth: '300',
              rarity: 'Uncommon',
              name: 'Canine',
            },
          ],
        },
        {
          img: [
            {
              link: I9,
              heigth: '300',
              rarity: 'Rare',
              name: 'Viper',
            },
          ],
        },
        {
          img: [
            {
              link: I10,
              heigth: '300',
              rarity: 'Common',
              name: 'Scorpio',
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
