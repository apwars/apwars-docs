<template>
  <div>
    <v-col>
      <v-banner class="justify-center eight-bold" sticky>
        Emblems
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span class="description" v-html="topics[i].desc" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <div class="text-center">
                <v-img
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                  class="img mb-4 "
                ></v-img>
                <span v-html="topics[i].img[j].desc" class="titleImg" />
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import I0 from 'Assets/docs/emblems/0.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: 'Village Emblems',
        },
        {
          desc:
            'Village emblems are collectibles that provides a personalized look and feel to your own empire.',
          img: [
            {
              link: I0,
              heigth: '500',
              desc: 'Village Emblems',
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
