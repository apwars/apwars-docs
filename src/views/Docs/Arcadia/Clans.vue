<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Clans
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
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
              <span class="description" v-html="topics[i].img[j].desc"></span>
            </div>
            <v-row class="d-flex justify-center mt-4">
              <div v-for="(item, j) in topics[i].img2" :key="j" class="justify-center mb-6">
                <v-col class="d-flex" cols="6" md="2">
                  <v-img
                    :src="topics[i].img2[j].link"
                    :max-width="topics[i].img2[j].heigth"
                    class="img"
                  ></v-img>
                </v-col>
              </div>
            </v-row>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import Clans2 from 'Assets/docs/Clans2.png';
import I001 from 'Assets/docs/emblems/001.png';
import I002 from 'Assets/docs/emblems/002.png';
import I003 from 'Assets/docs/emblems/003.png';
import I004 from 'Assets/docs/emblems/004.png';
import I005 from 'Assets/docs/emblems/005.png';
import I006 from 'Assets/docs/emblems/006.png';
import I007 from 'Assets/docs/emblems/007.png';
import I008 from 'Assets/docs/emblems/008.png';
import I009 from 'Assets/docs/emblems/009.png';
import I010 from 'Assets/docs/emblems/010.png';

import I01 from 'Assets/docs/emblems/01.png';
import I02 from 'Assets/docs/emblems/02.png';
import I03 from 'Assets/docs/emblems/03.png';
import I04 from 'Assets/docs/emblems/04.png';
import I05 from 'Assets/docs/emblems/05.png';
import I06 from 'Assets/docs/emblems/06.png';
import I07 from 'Assets/docs/emblems/07.png';
import I08 from 'Assets/docs/emblems/08.png';
import I09 from 'Assets/docs/emblems/09.png';
import I10 from 'Assets/docs/emblems/10.png';
import I11 from 'Assets/docs/emblems/11.png';
import I12 from 'Assets/docs/emblems/12.png';
import I13 from 'Assets/docs/emblems/13.png';
import I14 from 'Assets/docs/emblems/14.png';
import I15 from 'Assets/docs/emblems/15.png';
import I16 from 'Assets/docs/emblems/16.png';
import I17 from 'Assets/docs/emblems/17.png';
import I18 from 'Assets/docs/emblems/18.png';
import I19 from 'Assets/docs/emblems/19.png';
import I20 from 'Assets/docs/emblems/20.png';
import I21 from 'Assets/docs/emblems/21.png';
import I22 from 'Assets/docs/emblems/22.png';
import I23 from 'Assets/docs/emblems/23.png';
import I24 from 'Assets/docs/emblems/24.png';
import I25 from 'Assets/docs/emblems/25.png';
import I26 from 'Assets/docs/emblems/26.png';
import I27 from 'Assets/docs/emblems/27.png';
import I28 from 'Assets/docs/emblems/28.png';
import I29 from 'Assets/docs/emblems/29.png';
import I30 from 'Assets/docs/emblems/30.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>APWars Clans',
        },
        {
          title: 'Definition',
          desc:
            '<br>A Clan is a collective organization that play a role at a world domination scheme. It serves to organize attacks, protect Villages and synchronize resource trading between players.',
        },
        {
          title: 'Clan formation',
          desc:
            '<br>To create a clan you will need a council composed by three members holders of a society ring.<br>Also you will be required the Clan Ticket to create a clan, these can be bought with wLAND.',
        },
        {
          title: 'Clan Master',
          desc:
            "<br>As a clan master you will receive:<br>A fee of your choice for each Village that joins your clan.<br>A Deposit fee of 0.5% for every deposit made in your clan's deposit fee.",
          img: [
            {
              link: Clans2,
              heigth: '900',
              imgdesc: "Clan's Liquidity Pools",
              desc:
                'A clan receives a proportion of the world currency by providing services to the villages. The more liquidity a clan can raise and sustain the more rewarded it will be.',
            },
          ],
        },
        {
          title: 'Clan emblems:',
          img2: [
            {
              link: I01,
              heigth: '150',
            },
            {
              link: I02,
              heigth: '150',
            },
            {
              link: I03,
              heigth: '150',
            },
            {
              link: I04,
              heigth: '150',
            },
            {
              link: I05,
              heigth: '150',
            },
            {
              link: I06,
              heigth: '150',
            },
            {
              link: I07,
              heigth: '150',
            },
            {
              link: I08,
              heigth: '150',
            },
            {
              link: I09,
              heigth: '150',
            },
            {
              link: I10,
              heigth: '150',
            },
            {
              link: I11,
              heigth: '150',
            },
            {
              link: I12,
              heigth: '150',
            },
            {
              link: I13,
              heigth: '150',
            },
            {
              link: I14,
              heigth: '150',
            },
            {
              link: I15,
              heigth: '150',
            },
            {
              link: I16,
              heigth: '150',
            },
            {
              link: I17,
              heigth: '150',
            },
            {
              link: I18,
              heigth: '150',
            },
            {
              link: I19,
              heigth: '150',
            },
            {
              link: I20,
              heigth: '150',
            },
            {
              link: I21,
              heigth: '150',
            },
            {
              link: I22,
              heigth: '150',
            },
            {
              link: I23,
              heigth: '150',
            },
            {
              link: I24,
              heigth: '150',
            },
            {
              link: I25,
              heigth: '150',
            },
            {
              link: I26,
              heigth: '150',
            },
            {
              link: I27,
              heigth: '150',
            },
            {
              link: I28,
              heigth: '150',
            },
            {
              link: I29,
              heigth: '150',
            },
            {
              link: I30,
              heigth: '150',
            },
            {
              link: I001,
              heigth: '150',
            },
            {
              link: I002,
              heigth: '150',
            },
            {
              link: I003,
              heigth: '150',
            },
            {
              link: I004,
              heigth: '150',
            },
            {
              link: I005,
              heigth: '150',
            },
            {
              link: I006,
              heigth: '150',
            },
            {
              link: I007,
              heigth: '150',
            },
            {
              link: I008,
              heigth: '150',
            },
            {
              link: I009,
              heigth: '150',
            },
            {
              link: I010,
              heigth: '150',
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
