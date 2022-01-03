<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Material Transformations
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span class="description" v-html="topics[i].desc" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <div class="text-center">
                <v-img
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                  class="img mb-4 mt-4"
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
import Resources from 'Assets/docs/Resources.png';
import Ready from 'Assets/docs/Ready.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>Material framework for the domestic economy.',
        },
        {
          desc:
            '<br>Material transformations is the name of the game framework used to generate game itens.<br>For example: To build a forge level 1 I would need to provide 100 units of wood and 100 units of clay and wait around 21 hours with the quantity of workers I have available. It is a framework whether the input are tokens that represents raw materials and time, and the output is also a token of the enhanced resource.',
          img: [
            {
              link: Resources,
              heigth: '900',
              imgdesc: 'Combine material to create other materials or buildings',
            },
          ],
        },
        {
          desc:
            'Whenever enough time passes you will receive your newly acquired construction ready for use:',
          img: [
            {
              link: Ready,
              heigth: '900',
              imgdesc: 'Congratulations on your forge level 1',
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
