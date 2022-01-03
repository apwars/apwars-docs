<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Training Center
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <v-img :src="topics[i].img" max-width="80%" class="img"></v-img>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import IMG from 'Assets/docs/war/training-process.png';

export default {
  name: 'Training Center',
  data() {
    return {
      topics: [
        {
          title: 'Training Center',
          desc: `<br>The new mechanism created by the APWars team in the Tier 4 Stables is the Combinator Pattern.
            <br><br> This magical process is only possible thanks to the lovely trainer Dora Noble and her unbelievable expertise in horse training. After the horses spend a few hours with her, they are prepared and ready to run to the battlefield.
            <br><br> In her workplace, wCOURAGE is essential and it's where a new token is created by combining two other completely different tokens. It starts with a deposit of two native tokens (wCOURAGE and tier 2 wUNITS) in the smart contract which activates a predetermined timer adding time in the action. At the end, the player will receive a different token, a Mounting Unit tier 4 wUNIT.            
            <br><br> This operation happens in the Training Center:  https://app.apwars.farm/training-center.
            <br><br> Dora Noble will ask for 2,200 wCOURAGE plus 100 (tier 2) wUNITS and will add 1 hour of her time in order to produce 100 (tier 4) wUNITs.
            <br><br> This feature allows more interactivity, amusement and equality amongst players since the amount received at the end of each process is the same to everyone. It marks the foundation for the Arcadia Expansion. <br><br>`,
          img: IMG,
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
.description p {
  font-size: 14px;
}
</style>
