<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Combat Dynamics
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <v-img class="img" :src="topics[i].img" max-width="80%"></v-img>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import HumansVSOrcs from 'Assets/docs/humans-vs-orcs.png';
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'The Battle for Supremacy',
          desc:
            '<br>From time to time, a battle is scheduled to happen. Players must farm creatures before the battle begins. <br> There is a 3-day period for staking the combat troops on the battle smart-contract. Players choose which side they would like to battle with: Corporations or Degens. Placing minions on both sides of the battlefield can reduce risk. <br>The strength and defense amount of each faction units is summed, but randomness and morale is added to the mix. Randomness can be understood as luck, a random generated number that can benefit one side instead of the other. Morale is a variable that decreases strength and defense attribute of the most numerous team, and the higher the difference in these attributes between the teams, the higher morale will affect the War results.<br><br> Having finished the 3-day staking period, the war results are computed within the smart contract, all within a single block. It is likely that both sides lose troops; still, one faction will prevail as the winner. The lost troops are burned and can only be minted with new farming. The remaining brave and lucky troops can follow onto the next war.<br><br>Every player on the winning faction will receive an NFT that will grant his participation on the war against the Dark Forces. It is also a symbolic compensation for this hard achievement.<br><br>The losing faction will lose all their troops. However, every player will receive a war-only participation NFT, that can be sold in the secondary market. Every war will grant players with different NFTs each time.',
        },
        {
          title: 'The war against the Forces of Extreme Darkness',
          desc:
            "<br>This is the final war, a war that we've all been waiting for. The war against the Forces of Extreme Darkness is a war to prove your abilities as a real fighter, and to defeat the monster locking a huge amount of wGOLD – 1,5% of every deposit on APWars is set aside for this moment. In every war against the Forces of Extreme Darkness, a random number between 1 and 100 is generated, and battling players have the chance to withdraw the equivalent amount of the deposit fees, according to the percentage of the randomly generated number. <br>For example, if the lucky number is 70, then 70% of the wGOLD retrieved in deposit fees is distributed to the players, accordingly to their troops size at that point in time. The remaining 30% is burned.<br>This mechanic serves as an incentive for people to battle for the real prize, and to take part in all layers of farming, because at each layer the troops farmed are more powerful than the previous tier ones. The wGOLD burning feature also decreases its supply, making it even more scarce in the long run.",
        },
        {
          title: 'Celebration Festival',
          desc:
            '<br>Whenever you join the first round of the war: The Battle for Supremacy, in which the Degenerate and Corporation factions face each other, you will clash troop power against troop power. There is a random luck coefficient, which can affect the outcome, only if the aggregate attack power of the factions are not too uneven. The weaker side will receive a morale modifier, which is an equilibrium parameter pondered by the difference in troop sizes. Consider that wCOURAGE tokens will be distributed between players proportional to their troop power times morale. ',
          img: HumansVSOrcs,
        },
        {
          desc:
            '<br>After the war ends, a festive event known as the Celebration Festival comes at play. It is a period of time that in which a subsidized wCOURAGE/wGOLD pool appears for wGOLD farming. This promotional pool presents the higher APR of the game harnessing the farming power of , practically, all other pools combined. ',
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
.description {
  font-size: 14px;
}
</style>
