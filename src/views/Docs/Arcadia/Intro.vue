<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Intro
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
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
              <span class="description" v-html="topics[i].img[j].desc"></span>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import ArcadiaExpansion from 'Assets/docs/ArcadiaExpansion.png';
import Villages from 'Assets/docs/Villages.png';
import Clans from 'Assets/docs/Clans.png';
import Worlds from 'Assets/docs/World.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>APWars first expansion.',
        },
        {
          img: [
            {
              link: ArcadiaExpansion,
              heigth: '300',
              imgdesc: 'APWars game expansion',
              desc:
                '<br>The Arcadia Expansion is an open world, turn based expansion, for APWars classic. With the Arcadia Expansion a player will be able to enjoy the creation of his own village which will be actively managed in terms of domestic economy and military foreign policy.<br>A Village is a settlement where buildings can be constructed, heroes can earn fame, armies can be recruited, mystic protectors invoked, weapons forged and resources transformed.<br>A player can also join forces with its neighbors by founding a Clan of allies to fight common foes. This expansion integrates perfectly with the well established APWars ecosystem where troops recruited and wGOLD will serve as a universal currency. <br>The Arcadia expansion was designed to please three types of players: ',
            },
          ],
        },
        {
          img: [
            {
              link: Villages,
              heigth: '300',
              imgdesc: 'Domestic affairs',
              desc:
                '<br>A Village ruler is an active player that loves to manage and strategize the growth of an empire. Host your troops while you advance in technology, earn the world currency and protect your culture from enemies.',
            },
          ],
        },
        {
          img: [
            {
              link: Clans,
              heigth: '300',
              imgdesc: 'Collective strategy',
              desc:
                '<br>A Clan master is a leader capable of managing a group of villages in collective attack and defense schemes. And also, from the economical standpoint, control game funds to strengthen his group of allies by earning world coin. ',
            },
          ],
        },
        {
          img: [
            {
              link: Worlds,
              heigth: '300',
              imgdesc: 'Grand architects',
              desc:
                '<br>World owners are the rulers of an entire gaming ecosystem. They mint game currencies, decide on clan creation taxes and also sell all the land to their player base. They play a strategy style of management to create a sustainable and rewarding environment for players.',
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
