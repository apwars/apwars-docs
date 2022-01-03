<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Weapons
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
import I0 from 'Assets/docs/weapons/0.png';
import I1 from 'Assets/docs/weapons/1.png';
import I2 from 'Assets/docs/weapons/2.png';
import I3 from 'Assets/docs/weapons/3.png';
import I4 from 'Assets/docs/weapons/4.png';
import I5 from 'Assets/docs/weapons/5.png';
import I6 from 'Assets/docs/weapons/6.png';
import I7 from 'Assets/docs/weapons/7.png';
import I8 from 'Assets/docs/weapons/8.png';
import I9 from 'Assets/docs/weapons/9.png';
import I10 from 'Assets/docs/weapons/10.png';
import I11 from 'Assets/docs/weapons/11.png';
import I12 from 'Assets/docs/weapons/12.png';
import I13 from 'Assets/docs/weapons/13.png';
import I14 from 'Assets/docs/weapons/14.png';
import I15 from 'Assets/docs/weapons/15.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>APWars Weapons',
        },
        {
          desc:
            '<br>Weapons are expendable game items using to enhance troop stats during combat, those artifacts have different levels of rarity and special abilities.<br>Some example of weapons are: ',
          img: [
            {
              link: I0,
              heigth: '300',
              rarity: 'Common',
              name: 'Armored Shield',
            },
          ],
        },
        {
          img: [
            {
              link: I1,
              heigth: '300',
              rarity: 'Common',
              name: 'Spike mace',
            },
          ],
        },
        {
          img: [
            {
              link: I2,
              heigth: '300',
              rarity: 'Common',
              name: 'Average Blade',
            },
          ],
        },
        {
          img: [
            {
              link: I3,
              heigth: '300',
              rarity: 'Incommon',
              name: 'Magic Claw',
            },
          ],
        },
        {
          img: [
            {
              link: I4,
              heigth: '300',
              rarity: 'Incommon',
              name: 'Arcane Staff',
            },
          ],
        },
        {
          img: [
            {
              link: I5,
              heigth: '300',
              rarity: 'Common',
              name: 'Crossbow',
            },
          ],
        },
        {
          img: [
            {
              link: I6,
              heigth: '300',
              rarity: 'Common',
              name: 'Pike axe',
            },
          ],
        },
        {
          img: [
            {
              link: I7,
              heigth: '300',
              rarity: 'Common',
              name: 'Orc Axe',
            },
          ],
        },
        {
          img: [
            {
              link: I8,
              heigth: '300',
              rarity: 'Common',
              name: 'Chevaliers shield',
            },
          ],
        },
        {
          img: [
            {
              link: I9,
              heigth: '300',
              rarity: 'Epic',
              name: 'Wand of Death',
            },
          ],
        },
        {
          img: [
            {
              link: I10,
              heigth: '300',
              rarity: 'Rare',
              name: "Assassin's Dagger",
            },
          ],
        },
        {
          img: [
            {
              link: I11,
              heigth: '300',
              rarity: 'Epic',
              name: 'The portal maker',
            },
          ],
        },
        {
          img: [
            {
              link: I12,
              heigth: '300',
              rarity: 'Incommon',
              name: 'Orc Spike',
            },
          ],
        },
        {
          img: [
            {
              link: I13,
              heigth: '300',
              rarity: 'Epic',
              name: 'Spear of Destiny',
            },
          ],
        },
        {
          img: [
            {
              link: I14,
              heigth: '300',
              rarity: 'Rare',
              name: 'Shield of Fire and Ice',
            },
          ],
        },
        {
          img: [
            {
              link: I15,
              heigth: '300',
              rarity: 'Epic',
              name: "Angel's Blade",
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
