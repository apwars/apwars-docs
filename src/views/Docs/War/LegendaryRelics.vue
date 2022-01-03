<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Legendary Relics (NFTs)
        <span class="span"
          >Relics are coherently energy that materializes depending on the occasion.</span
        >
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold">{{ topics[i].title }}</span>

            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="text-center mb-4">
              <v-img
                class="img"
                :src="topics[i].img[j].link"
                :max-width="topics[i].img[j].heigth"
              ></v-img>
              <span v-html="topics[i].img[j].desc" class="titleImg" />
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import EpicRelics from 'Assets/docs/epic-relics.png';
import MemorableVictory from 'Assets/docs/MemorableVictory.png';
import TheOrcLegend from 'Assets/docs/The-orc-legend.png';
import DragonSlayer from 'Assets/docs/DragonSlayer.png';
import DeathByGold from 'Assets/docs/DeathByGold.png';
import BlooodyBattle from 'Assets/docs/BlooodyBattle.png';
import TheHumanLegend from 'Assets/docs/TheHumanLegend.png';
import Elixir from 'Assets/docs/elixir.png';
import Elixir20 from 'Assets/docs/elixir20.png';
import Goldsaver10 from 'Assets/docs/goldsaver10.png';
import Goldsaver15 from 'Assets/docs/goldsaver15.png';
import Goldsaver20 from 'Assets/docs/goldsaver20.png';
import TheSocietySaver from 'Assets/docs/TheSocietySaver.png';
import PioneerSaver from 'Assets/docs/PioneerSaver.png';
import Arcane from 'Assets/docs/Arcane.png';
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'Types of relics',
          desc:
            "<br>There are two types of relics: the first type is subtle in memorial collectibles, recordation's, songs, and poetry from historical moments. The other type are dense materialized objects that serves as items with special powers in battle.",
          img: [
            {
              link: EpicRelics,
              desc:
                'Epic relics and useful items — These cards can be collected or used to heal or increase troop power.',
              heigth: '600',
            },
          ],
        },
        {
          title: 'In memorial collectibles',
          desc:
            '<br>Rare tokens of history that can be earn by the brave that will be hodled by the visionaries and sold by the greedy.<br>See below some NFTs of the Relic Grimorium:',
          img: [
            {
              link: MemorableVictory,
              desc: 'Memorable Victory - Everyone who won the battle for supremacy',
              heigth: '300',
            },
            {
              link: TheOrcLegend,
              desc:
                'The legend - Degen - For one person that lost the war but had an unit that survive',
              heigth: '300',
            },
            {
              link: DragonSlayer,
              desc: 'Dragon Slayer - Everyone who fought and won the dragon',
              heigth: '300',
            },
            {
              link: DeathByGold,
              desc: 'Death by Gold - If more than 50% of the troops are lost to the dragon',
              heigth: '300',
            },
            {
              link: BlooodyBattle,
              desc:
                'Bloody Battle - If more than 90% of the team is eliminated in the battle for supremacy',
              heigth: '300',
            },
            {
              link: TheHumanLegend,
              desc:
                'The legend - Corp - For one person that lost the war but had an unit that survive',
              heigth: '300',
            },
          ],
        },

        {
          title: 'Items',
          desc: '<br>Itens have direct impact in the battle for the bearer:',
          img: [
            {
              link: Elixir,
              desc: 'Lessen Elixir - Recover 10% of lost troops after a war.',
              heigth: '300',
            },
            {
              link: Elixir20,
              desc: 'Elixir - Recover 20% of lost troops after a war.',
              heigth: '300',
            },
            {
              link: Goldsaver10,
              desc: 'Gold Saver 10% - Saves 10% of your wGOLD when staking to farm units.',
              heigth: '300',
            },
            {
              link: Goldsaver15,
              desc: 'Gold Saver 15% - Saves 15% of your wGOLD when staking to farm units.',
              heigth: '300',
            },
            {
              link: Goldsaver20,
              desc: 'Gold Saver 20% - Saves 20% of your wGOLD when staking to farm units.',
              heigth: '300',
            },
            {
              link: TheSocietySaver,
              desc:
                'The Society Gold Saver 20% - Saves 20% of your wGOLD when staking to farm units.',
              heigth: '300',
            },
            {
              link: PioneerSaver,
              desc:
                'The Society Gold Saver 20% - Saves 20% of your wGOLD when staking to farm units.',
              heigth: '300',
            },
            {
              link: Arcane,
              desc:
                'The Arcane Book 20% - Saves 20% of your magical units from dying after the war.',
              heigth: '300',
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
  font-size: 16px;
}
.description {
  font-size: 14px;
}

.titleImg {
  font-size: 20px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
</style>
