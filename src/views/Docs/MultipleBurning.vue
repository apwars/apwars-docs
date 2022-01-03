<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Multiple Burning Mechanisms
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: 'War tokens are burned in several ways.',
        },
        {
          title: 'Burn of Resource Tokens (wGOLD)',
          desc:
            '<br>This war is a massive source of unit token burning, units from both factions are always injured and killed in the battleground. Here, fatalities will essentially correspond to w-token burns. Every conflict can lead to a potentially 100% unit w-token burn, resetting the supply and leading to scarcity.',
        },
        {
          title: 'Unit production (wTokens)',
          desc:
            '<br>For you to farm/train units you will have to invest in the construction of your unit training building, the more wGOLD you put into it the faster it will produce units. Those building <br> This war is another source of unit token burning, the faction which won the supremacy, can confront the dark forces and, by doing so, will be exposed to a 0% - 100% fatality probability of troops leading to extra token burn.',
        },
        {
          title: 'The unclaimed wGold from the Dark Forces',
          desc:
            '<br>Consider the supreme faction will have the chance of conquering from 0% to 100% percent of the enemy wGOLD. The remaining unconquered wGOLD will be entirely burned',
        },
        // {
        //   title: 'Burn of unit tokens (wTokens)',
        //   desc:
        //     '<br>Consider the supreme faction will have the chance of conquering from 0% to 100% percent of the enemy wGOLD. The remaining unconquered wGOLD will be entirely and automatically burned.',
        // },
        {
          title: 'The war for supremacy',
          desc:
            '<br>This war is a massive source of unit token burning, units from both factions are always injured in the battleground leading to fatalities which are essentially token burns. Every conflict can lead to a potentially 100% unit token burn, reseting the supply and leading to scarcity.',
        },
        {
          title: 'The war against the Forces of Extreme Darkness',
          desc:
            '<br>This war is another source of unit token burning, the faction which won the supremacy, can confront the dark forces and by doing so will be exposed to a 0% - 100% fatality probability of troops leading to extra token burn.',
        },
        {
          title: '',
          desc: '',
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
