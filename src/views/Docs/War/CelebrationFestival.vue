<template>
  <div>
    <v-col>
      <v-banner class="justify-center" sticky>
        Celebration Festival
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>

            <span v-html="topics[i].desc" class="description" />
            <div class="text-center">
              <v-img class="img mt-3" :src="topics[i].img" :max-width="topics[i].heigth"></v-img>
              <span v-html="topics[i].desc2" class="titleImg" />
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import wCOURAGE from 'Assets/docs/wCOURAGE.png';
import LPwCOURAGE from 'Assets/docs/LPwCOURAGE.png';
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc:
            'The Celebration Festival is a specific period in APWars that succeeds the end of the War.',
        },
        {
          title: 'wCOURAGE',
          desc:
            '<br>wCOURAGE is a resource token from APWars with limited supply that can be earned by sending troops to the War of Supremacy. The wCOURAGE rewards will be distributed based on Arimedes and Dora Noble fees collection.',
          img: wCOURAGE,
          desc2: 'wCOURAGE Icon',
          heigth: '120',
        },
        {
          desc:
            '<br>After the war, it is possible to stake your wCOURAGE tokens in a Liquidity Pool with wGOLD. This event will reward all the brave warmongers in a superior way compared to those in Hobbit-town that stood at their farms quietly during war-season.',
          img: LPwCOURAGE,
          desc2: 'LP wCOURAGE',
          heigth: '300',
        },
        {
          desc:
            "<br>Rest assured that in the War for Supremacy, the losing faction tends to receive more wCOURAGE tokens because of morale effects. And it would not be a surprise if the losing faction amassed more wGOLD after war-season than the winning one depending on the former's luck.",
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
  font-size: 10px;
}
.description {
  font-size: 14px;
}

.titleImg {
  font-size: 12px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
</style>
