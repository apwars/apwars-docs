<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Forces of Extreme Darkness
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
import FED from 'Assets/docs/war/FED.png';

export default {
  data() {
    return {
      topics: [
        {
          title: 'The Battle for Supremacy',
          desc:
            "<br>The Forces of Extreme Darkness are powerful beings that come from the planar helm known as the far away galaxy of Centrafinan. Those deities can only be encountered by the brave, who seek to access great rewards from their power legacy. The first representative Forces of Extreme Darkness: Dragon Louis. <br> The winning faction from the Battle for Supremacy will have the opportunity to face the 'FED' and claim its treasure. The math here is simple — there are two random numbers involved, which represents probabilities form 1% to 100%: First one is a coefficient of causality. The second one is a capture coefficient that represents the amount of conquered treasure form the FED's accumulated treasury. All unconquered wGOLD will be completely burned.",
          img: FED,
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
