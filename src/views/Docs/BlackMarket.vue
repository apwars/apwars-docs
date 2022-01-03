<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Black Market
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <span class="font-weight-bold" v-if="topics[i].img[j].title">{{
                topics[i].img[j].title
              }}</span>
              <v-img
                :src="topics[i].img[j].link"
                :max-width="topics[i].img[j].heigth"
                class="img mb-4 "
              ></v-img>
              <span class="description" v-html="topics[i].img[j].desc"></span>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import Pioneer from 'Assets/docs/pioneer.png';
import Society from 'Assets/docs/society.png';
import Haters from 'Assets/docs/haters.png';
import Arcane from 'Assets/docs/Arcane.png';
import Elixir from 'Assets/docs/elixir10.png';
import Elixir15 from 'Assets/docs/elixir15.png';
import Elixir20 from 'Assets/docs/elixir20.png';
import Gold from 'Assets/docs/goldsaver10.png';
import Gold15 from 'Assets/docs/goldsaver15.png';
import Gold20 from 'Assets/docs/goldsaver20.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc:
            '<br>The Black Market is a shady marketplace for unusual items, forgotten manuscripts and powerful relics. At this moment you can acquire items for your army that generates practical effects for battle, and, for the moment, there are items for permanent and disposable use items.',
        },
        {
          title: 'Unique Items',
          img: [
            {
              link: Pioneer,
              heigth: '300',
              desc:
                '<br>The Pioneer ring is a mark for the early adopters of APWars. No practical effects are known until this moment but tales about this souvenir states that it is a sleeping ring of power',
            },
            {
              link: Society,
              heigth: '300',
              desc:
                'The Society ring is a potential invitation for a future possible board of advisors to rule the destiny of APWars. Ticket for participating in a possible DAO.',
            },
            {
              link: Haters,
              heigth: '300',
              desc:
                'There is no better remedy for tragedy than comedy. So hate in APWars is treated with humor. This furious item has a positive effect on attack power of your troops in 1%.',
            },
            {
              link: Arcane,
              heigth: '300',
              desc:
                'The Arcane Book is an item that protect magical units from death. It can save 25% of all your magical units from perishing in a battle.',
            },
            {
              title: 'Compounding Items',
              desc:
                'Compounding items can be combined to provide greater effects. These will not stake with copies of the same type, but different modifiers will add up. For exemple lets measure the effect of troop saving by combining elixirs: <br>Elixir 10% + Elixir 10% = 10% <br>Elixir 10% + Elixir 15% = 25%  <br>The Elixir saves a % of your troops from death in a combat. There are three levels of modifiers 10%, 15% and 20%. ',
            },
            {
              link: Elixir,
              heigth: '300',
            },
            {
              link: Elixir15,
              heigth: '300',
            },
            {
              link: Elixir20,
              heigth: '300',
            },
            {
              desc:
                'The Gold Saver is an item that makes you save a % of wGOLD whenever staking to produce units. (Or in other words buying unit producing buildings). So imagine that the burn rate of the Barracks level is 99%. Whenever you have a Gold Saver NFT of 10% the burn rate becomes 90%. There are three levels of modifiers: 10%, 15% and 20%. ',
            },
            {
              link: Gold,
              heigth: '300',
              desc: '',
            },
            {
              link: Gold15,
              heigth: '300',
              desc: '',
            },
            {
              link: Gold20,
              heigth: '300',
              desc: '',
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
ul li {
  font-size: 14px;
}
</style>
