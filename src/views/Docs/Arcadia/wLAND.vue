<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        wLAND
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
import wLAND from 'Assets/wLAND.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>The token for the purchasing of land related endevours.',
        },
        {
          title: 'wLAND',
          desc:
            '<br>wLAND is a utility token used to create worlds, clans and also to buy lands for the creation villages and foundations. ',
          img: [
            {
              link: wLAND,
              heigth: '300',
              imgdesc: 'wLAND Icon',
              name: 'APWars Land',
              type: 'Resource',
              ticker: 'wLAND',
              address: '0x2C6107c27A15D2C7F397D88D76257Ea42c12f89F',
              chain: 'Binance Smart Chain (BEP-20)',
              supply: '1,500,000.00',
            },
          ],
        },
      ],
    };
  },
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
