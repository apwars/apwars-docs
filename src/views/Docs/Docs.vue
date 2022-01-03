<template>
  <v-app>
    <v-container fluid>
      <ap-header></ap-header>
      <v-divider
        class="color: secondary"
        style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
      />
      <v-row>
        <v-col cols="12" lg="2" md="2" class="menu justify-center align-center">
          <v-navigation-drawer permanent style="width: 100%">
            <div class="logo-container">
              <v-img max-width="209" :src="LogoAP" alt="APWars"></v-img>
            </div>
            <v-divider></v-divider>
            <v-treeview
              activatable
              :items="items"
              @update:active="openLink"
              open-on-click
              return-object
            ></v-treeview>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="12" md="9" class="mt-n2">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <ap-footer></ap-footer>
  </v-app>
</template>

<script>
import ApHeader from '../../components/ApHeader.vue';
import ApFooter from '../../components/ApFooter.vue';
import LogoAP from 'Assets/game-ui/logo-small.png';
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'Introduction',
          desc: 'APWars is the most innovative gaming that runs in a blockchain ecosystem, on BSC.',
        },
        {
          title: 'An introduction to APWars',
          desc:
            'APWars is a game.  We know that, until then, there is a very strong financial appeal in blockchain-based games, causing many people to play exclusively for the purpose of earning money and having some kind of income.  We do not recommend that you play APWars with this mentality, as it is a game developed and maintained with the aim of providing people with entertainment.  Just like in any game, such as Dota, Counter Strike, League of Legends, World of Warcraft etc, you can sell items to other players and get some money, or the game can evolve a lot to the point of championships, but, these things are just expectations.  If your interest is exclusively to make money, we recommend that you look for DeFi tools developed for this purpose and not play APWars, which uses blockchain, but is just a game.',
        },
        {
          title: 'Swap and stake',
          desc:
            'One of the big new paradigms that we have in blockchain games is that the currency in game, can be acquired by in game actions, recorded in blockchain transactions, that have your use exclusively in the game world.',
        },
        {
          title: 'War Gold (wGOLD)',
          desc:
            'The wGOLD is the core token of APWars. Through it liquidity is channeled to all other tokens. With wGOLD you can foster loyal troops or hire mercenaries.',
        },
        {
          title: 'Hiring and merging troops',
          desc:
            'Like old-school addictive games, this game will have wars, tiers and eras. Within these you will be able to hire your army in various ways. In the dawn of ages, the genesis of the first creatures will be very simple. By offering wGold you will be able to attract and hire your first creatures. As technology and magic evolves you will need to gather stronger troops to send to battle. To create those, lesser minions can be combined to foster greater ones.',
        },
        {
          title: 'The Battle for Faction Supremacy',
          desc:
            'The never-ending existential war between the two factions, known as the "Corporation" (Corps) and the "Degenerates" (Degen) is a bloody combat from which only one winner can emerge. Factions clash their powers against one-another, where confrontation can result in causalities from both sides, until the winner faction is announced. As in real life and other games, factors like morale and luck are brought back to this epic battle in the form of random decision cards that may influence the outcome War-heroes that won the war and survived to tell the story will have the opportunity to prove their worth once more by challenging the Forces of Extreme Darkness and earning unthinkable treasures.',
        },
        {
          title: 'The war against the Forces of Extreme Darkness',
          desc:
            'The blood-weary heroes that face the darkest of creatures will encounter great danger before casting evil away. They will have the chance to earn great wealth in treasures that are securely guarded by monsters. In this confrontation the war-heroes have the opportunity to win a quantity of the wGOLD guarded by the enemy. This opportunity is regulated by a random chance from 0% to 100% distributed to the troops proportionally to their power.',
        },
        {
          title: 'Legendary Relics (NFTs)',
          desc:
            'Epic battles generate passion, faith, and fear. All those energies are materialized in legendary relics in form of Non Fungible Tokens. Some of those relics are so intense that they become items that produce practical effects in battle.',
        },
      ],
      items: [
        {
          id: 1,
          name: 'Introduction',
          children: [{ id: 2, name: 'Game', link: '/' }],
          link: '',
        },
        {
          id: 3,
          name: 'APWars',
          children: [
            {
              id: 4,
              name: 'War :',
              children: [
                {
                  id: 5,
                  name: 'Combat Dynamics',
                  link: '/war/combat-dynamics',
                },
                {
                  id: 6,
                  name: 'Forces of Extreme Darknes',
                  link: '/war/forces-of-extreme-darkness',
                },
                {
                  id: 7,
                  name: 'Celebration Festival',
                  link: '/war/celebration-festival',
                },
                {
                  id: 8,
                  name: 'Legendary Relics (NFTs)',
                  link: '/war/legendary-relics-nfts',
                },
                {
                  id: 9,
                  name: 'Factions, Races and Units',
                  link: '/factions',
                },
                {
                  id: 10,
                  name: 'Magical Items Spendables',
                  link: '/war/magical-items-spendables',
                },
                {
                  id: 11,
                  name: 'Weapons Research',
                  link: '/war/weapons-research',
                },
                {
                  id: 12,
                  name: 'Training Center',
                  link: '/war/training-center',
                },
              ],
            },
            {
              id: 13,
              name: 'Guardians',
              link: '/guardians',
            },
            {
              id: 14,
              name: 'Black Market',
              link: '/black-market',
            },
            {
              id: 15,
              name: 'The Global Events',
              link: '/the-global-events',
            },
          ],
          link: '',
        },
        {
          id: 16,
          name: 'Tokenomics',
          children: [
            {
              id: 17,
              name: 'wGOLD - Deflationary Emission Curve',
              link: '/deflationary-emission-curve',
            },
            // { id: 14, name: 'Pumpamentals', link: '/pumpamentals' },
            { id: 18, name: 'Multiple Burning Mechanisms', link: '/burning-mechanims' },
          ],
          link: '',
        },
        {
          id: 19,
          name: 'FAQ',
          children: [
            {
              id: 20,
              name: 'General',
              link: '/faq/general',
            },
            { id: 21, name: 'Wars', link: '/faq/wars' },
          ],
          link: '',
        },
        {
          id: 22,
          name: 'Security',
          children: [
            {
              id: 23,
              name: 'Migrator Code',
              link: '/security/migrator-code',
            },
            { id: 24, name: 'Audits', link: '/security/audits' },
            { id: 25, name: 'Emergency Withdrawals', link: '/security/emergency-withdrawals' },
          ],
          link: '',
        },
        {
          id: 26,
          name: 'Arcadia',
          link: '',
          children: [
            {
              id: 27,
              name: 'Intro',
              link: '/arcadia/intro',
            },
            { id: 28, name: 'Worlds', link: '/arcadia/worlds' },
            { id: 29, name: 'Clans', link: '/arcadia/clans' },
            {
              id: 30,
              name: 'Villages',
              children: [
                {
                  id: 31,
                  name: 'Regional Battles',
                  link: '/arcadia/regional-battles',
                },
                { id: 32, name: 'Weapons', link: '/arcadia/weapons' },
                {
                  id: 33,
                  name: 'Resources',
                  link: '/arcadia/resources',
                },
                {
                  id: 34,
                  name: 'Material Transformations',
                  link: '/arcadia/material-transformations',
                },
                { id: 35, name: 'Mystic Protectors', link: '/arcadia/mystic-protectors' },
                { id: 36, name: 'Emblems', link: '/arcadia/emblems' },
                { id: 37, name: 'Buildings', link: '/arcadia/buildings' },
                { id: 38, name: 'Heroes', link: '/arcadia/heroes' },
              ],
            },
            { id: 39, name: 'wLAND', link: '/arcadia/wland' },
            { id: 40, name: 'wWISDOM', link: '/arcadia/wwisdom' },
            { id: 41, name: 'Reservation Tickets', link: '/arcadia/reservation-tickets' },
            { id: 42, name: 'Worker', link: '/arcadia/worker' },
            { id: 43, name: 'Foundations', link: '/arcadia/foundations' },
          ],
        },
      ],
      LogoAP,
    };
  },
  components: {
    ApHeader,
    ApFooter,
  },

  methods: {
    openLink(items) {
      const item = items[0];
      this.$router.push(item.link);
    },
  },
};
</script>

<style>
.description {
  font-size: 14px;
}

.title {
  font-size: 14px;
}
.subtitle {
  font-size: 14px;
  margin-left: 10px;
}
.cursor {
  cursor: pointer;
}

.logo-container {
  width: 100%;
  padding: 6px 12px;
  width: 100%;
}
</style>
