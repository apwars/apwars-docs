<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Worlds
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
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
import WorldR from 'Assets/docs/worldR.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>Proprietary game ecosystems.',
        },
        {
          desc:
            "<br>Definition:<br>A world is an instance of the APWars Arcadia Expansion player's ecosystem where players can buy pieces of land to construct foundations such as Villages.",
        },
        {
          desc:
            '<br>World creation:<br>To create a world you will need a council composed by three members holders of a society ring.<br>Also you will be required the World Ticket to create a world, these can be bought with wLAND.',
        },
        {
          desc:
            '<br>World Owner:<br>As an World Owner you will be able to harvest all the benefits from your player base:<br>You will be able to create a coin, that will name wCOIN for the sake of didactics.You will receive 8% of all wCOIN emissions at your address.<br>You will receive 50% of the Clan fee every time a new Clan is created.<br>You will receive 50% of the fees in wLAND every time a land is bought in your world.<br>You will receive 40% of the fee for foundation improvement.<br>You will receive 1% of the deposit fee every time someone deposits funds is a Clan pool in your world.',
        },
        {
          img: [
            {
              link: WorldR,
              heigth: '900',
              imgdesc: 'Sky view of a Arcadian World',
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
