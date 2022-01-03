<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Docs
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>

            <p class="description">{{ topics[i].desc }}</p>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: 'Introduction',
          desc:
            'APWars is the most innovative gamified farming protocol on BSC with the best and most fun APRs in DeFi.',
        },
        {
          title: 'An introduction to APWars',
          desc:
            'APWars is a game.  We know that, until then, there is a very strong financial appeal in blockchain-based games, causing many people to play exclusively for the purpose of earning money and having some kind of income.  We do not recommend that you play APWars with this mentality, as it is a game developed and maintained with the aim of providing people with entertainment.  Just like in any game, such as Dota, Counter Strike, League of Legends, World of Warcraft etc, you can sell items to other players and get some money, or the game can evolve a lot to the point of championships, but, these things are just expectations.  If your interest is exclusively to make money, we recommend that you look for DeFi tools developed for this purpose and not play APWars, which uses blockchain, but is just a game.',
        },
        {
          title: 'Swap and stake',
          desc:
            'These are the most common and traditionally known features for every farming protocol. APWars leverages the stability of Pancake Swap, where you can seamlessly interact with it to trade and to gain tokens from liquidity pools.',
        },
        {
          title: 'War Gold (wGOLD)',
          desc:
            'The wGOLD is the core token of APWars and all other tokens are channelled through its liquidity. With wGOLD, you can foster loyal troops or hire mercenaries.',
        },
        {
          title: 'Farming and composite farming',
          desc:
            'Like old-school addictive games, this game has wars, tiers, and eras. Within these you will be able to farm your army token in various ways. In the dawn of ages, the genesis of the first creatures will be very simple - by staking gold you will be able to attract and hire your first creatures. As technology and magic evolves, you will need to gather stronger troops to send to battle. To create those, lesser minions can be combined to foster greater ones. Further farming dynamics will be revealed during the ages.',
        },
        {
          title: 'The Battle for Faction Supremacy',
          desc:
            'The never-ending existential war between the two factions, known as the "Corporation" (Corps) and the "Degenerates" (Degen) is a bloody combat from which only one winner can emerge. Factions clash their powers against one-another, where confrontation can result in causalities from both sides, and the winner faction, the winner faction is announced. As in real life and other games, factors like morale and luck are brought back to this epic battle in the form of random decision cards that may influence the outcome. War-heroes that won the war and survived to tell the story, will have the opportunity to prove their worth once more by challenging the Forces of Extreme Darkness and earning unthinkable treasures.',
        },
        {
          title: 'The war against the Forces of Extreme Darkness',
          desc:
            'The blood-weary heroes that face the darkest of creatures will encounter great danger before casting the evil away. They will have the chance to earn great wealth in tokens that are securely guarded by monsters. In this confrontation, the war-heroes have the opportunity to win a quantity of the wGOLD guarded by the enemy. This opportunity is regulated by a random chance from 0% to 100% distributed to the troops proportionally to their power.',
        },
        {
          title: 'Legendary Relics (NFTs)',
          desc:
            'Epic battles generate passion, faith, and fear. All those energies are materialized in legendary relics in form of Non Fungible Tokens. Some of those relics are so intense that they become items that produce practical effects in battle.',
        },
      ],
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
.description {
  font-size: 14px;
}
</style>
