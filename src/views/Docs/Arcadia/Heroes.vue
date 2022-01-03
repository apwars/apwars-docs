<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Heroes
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
                  class="img mb-4 mt-5"
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
import Heroes from 'Assets/docs/heroes.png';
import Joaquim from 'Assets/docs/joaquim.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<p>APWars Heroes</p>',
        },
        {
          desc:
            'Heroes are leaders that represents the Village army. Each hero has a special attribute that helps the village in a military or economic manner.',
          img: [
            {
              link: Heroes,
              heigth: '600',
              imgdesc: 'Company of Heroes',
            },
          ],
        },
        {
          desc: 'You can recruit your hero by burning your NFT.',
          img: [
            {
              link: Joaquim,
              heigth: '900',
              imgdesc: 'Joaquim a skillful craftsman',
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
  font-size: 18px;
}
.description p {
  font-size: 20px;
}

.titleImg {
  font-size: 12px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
</style>
