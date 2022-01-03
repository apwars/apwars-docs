<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-banner class="justify-center font-weight-bold" sticky> Guardians </v-banner>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card-text>
              <h2 class="mb-4">The Guardians</h2>
            </v-card-text>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" v-for="(item, i) in topics" :key="i" class="d-flex justify-center mb-6">
            <v-row>
              <v-col cols="12" md="4">
                <v-img :src="topics[i].img" max-width="200" class="img"></v-img>
              </v-col>

              <v-col cols="12" md="8">
                <v-card-text>
                  <h2 class="font-weight-bold mb-3">{{ topics[i].title }}</h2>
                  <p v-html="topics[i].desc" class="description" />
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'Public/css/global.css';
import Lilith from 'Assets/docs/guardians/Lilith.png';
import Raskel from 'Assets/docs/guardians/Raskel.png';
import Arimedes from 'Assets/docs/guardians/Arimedes.png';
import Dora from 'Assets/docs/guardians/Dora.png';
import Otto from 'Assets/docs/guardians/Otto.png';
export default {
  data() {
    return {
      topics: [
        {
          title: 'Otto Dalgor - Inventory Manager ',
          desc:
            'Otto Dalgor is a dwarf. Despite only being 132cm, he also knows how to honor his duties very well!. He is a widower (that is what everyone thinks). His wife, Frigg Dalgor, was thrown off a cliff by the undead in an ancient war and, since his wife´s disappearance or death, he´s been in stock complaining and keeping everything in order. You need to approve your contracts with Otto and once the contract for a (specific) token is approved, you don´t need to approve for each move. But, don´t worry! After approval, you have the option to Revoke later. Be careful with your game moves because Otto Dalgor is a complainer and knows the inventory thoroughly. He is the one who owns all the files and notes.',
          img: Otto,
        },
        {
          title: 'Raskel - The black market transaction´s master',
          desc:
            'Raskel comes from a traditional large family of travelers. He learned his family’s business in trade dealings, which ultimately influenced his desire to continue working in the commerce of a variety of products. Because of his constant travels, he gained vital connections with all types of people from different backgrounds during his years of working in this field and a well informed merchant he became. Raskel is in charge of the black market’s transactions and when a player wishes to place either a sell or a buy order, will need to sign a contract for this service to be approved and a symbolic fee to be charged. He is a hard taskmaster and the artifact is on the watch!',
          img: Raskel,
        },
        {
          title: 'Lilith - The transporter',
          desc:
            'The origin of Lilith is a mystery. She lives in the dangerous Far Territories, where she owns a land. Lilith is strong and independent, someone that has never cared of what people know or think about her. Nowadays she managed to establish herself as a trustful trader, a person recognized for her impeccable work standards, and fast delivery. Lilith is an active transporter. She will carry commodities all over Arcadia including people and goods for a regular price but if players acquire her spendable, the price is much more affordable.',
          img: Lilith,
        },
        {
          title: 'Arimedes - The Weapons Research',
          desc:
            'Arimedes grew up on the outskirts of Vanadium island. His father was a carpenter and he designed his first dagger when he´s very young. One day, he was taken hostage by the witch Hala. She is the black sorceress, the mistress of dark magic, and the Dark Beings were once humans that are now under her spell working for her making customized potions and strong weapons to be sold to her specific clientele. She induced him to be her novice in dark magic and weapons designer. After years of learning, he not just excelled at her desires but also learned all he could from her, transforming him into a powerful Master of Weapons and of Dark Magic. Arimedes is found at the Weapons Research workshop making spendables and weapons. Don´t forget to have lots of (w)courage when meeting him.',
          img: Arimedes,
        },
        {
          title: 'Dora Noble - The Training Center',
          desc:
            'Dora Noble was born in the Vast Lands of the East and since very young she dreamed of become a horse trainer. At times, it was difficult for her to be taken seriously in a business dominated by men - but that didn’t stop her! She has impressed a lot of people by her skills and knowledge that after years of hard work, she became a master trainer and an expert on training horses for battle. In her stables, all she asks for is a bit of (w)courage and some units to work her magic in no time. Both Corps and Degens trust her expansive abilities and are faithful to her, never allowing no one else to perform this type of task!',
          img: Dora,
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
