<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Magical Items Spendables
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div class="d-flex justify-center mt-6">
              <v-img :src="topics[i].elixir10" max-width="20%" class="mr-7"></v-img>
              <v-img :src="topics[i].elixir15" max-width="20%" class="mr-7"></v-img>
              <v-img :src="topics[i].elixir20" max-width="20%" class="mr-7"></v-img>
              <v-img :src="topics[i].arcanes" max-width="20%"></v-img>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import ELIXIR10 from 'Assets/docs/war/elixir10.png';
import ELIXIR15 from 'Assets/docs/war/elixir15.png';
import ELIXIR20 from 'Assets/docs/war/elixir20.png';
import ARCANES from 'Assets/docs/war/arcanes-book.png';

export default {
  name: 'Magical Items Spendables',
  data() {
    return {
      topics: [
        {
          title: 'Magical Items Spendables',
          desc: `<br>The Magical perpetual items of APWars are extremely important items in the game and used to bring troops and tier 3 Magical units back from the dead after the war against the Forces of Extreme Darkness and the dragon Louis. With the The Elixirs, a % of the troops are saved (depending on the percentage of the The Elixir) and with the The Arcane's book, 25% of the magic units are saved from perishing.
            <br><br>Players who already have these items as perpetual, have the choice of producing them as spendables and sell them on the black market where buyers will only be able to use them once.
            <br><br>Arimedes, the War Engineer, researcher and creator of weapons, was surprisingly in the past also trained as a master of dark magic and is in charge of this experiment with both The Arcane and The Elixirs where he once again uses the well efficient Combinator Pattern.
            <br><br> wCOURAGE is one more time necessary in this experiment where Arimedes combines two different tokens in order to provide spendable items.  He will ask for wCOURAGE + one of the perpetual Magical Items and will take some time to deliver 10 identical copies of Magical Item as spendable items.
            <br><br> For the magic happen, follow the link: <a href="https://app.apwars.farm/war-preparation " style="text-decoration: underline;"> https://app.apwars.farm/war-preparation </a>
            <br><br> Click on 'Approve Research' and 'New Research' relevant to the desired Magical Item. It is possible to have all of the Magical Items being produced as spendables at the same time.
            <br><br> When the production ends, these items are ready to be collected and sent to the Inventory - game items (Spendable).`,
          elixir10: ELIXIR10,
          elixir15: ELIXIR15,
          elixir20: ELIXIR20,
          arcanes: ARCANES,
        },
      ],
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
.description p {
  font-size: 14px;
}
</style>
