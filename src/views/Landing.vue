<template>
  <v-app>
    <ap-header></ap-header>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <landing></landing>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <choose-faction></choose-faction>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <farming></farming>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <supremacy></supremacy>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <strengthen></strengthen>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <war-collectibles></war-collectibles>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <deflationary-emission></deflationary-emission>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <troops></troops>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <black-market></black-market>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    />
    <!-- <weekly-rollups></weekly-rollups>
    <v-divider
      class="color: secondary"
      style="max-height: 2.5px; height: 2.5px; flex: 10 10 10px"
    /> -->
    <ap-footer></ap-footer>
  </v-app>
</template>

<script>
import ApHeader from '../components/ApHeader.vue';
import ApFooter from '../components/ApFooter.vue';
import Landing from 'Components/landing/Landing';
import ChooseFaction from 'Components/landing/ChooseFaction';
import Farming from 'Components/landing/Farming';
import Supremacy from 'Components/landing/Supremacy';
import Strengthen from 'Components/landing/Strengthen';
import WarCollectibles from 'Components/landing/WarCollectibles';
import DeflationaryEmission from 'Components/landing/DeflationaryEmission.vue';
import Troops from 'Components/landing/Troops.vue';
import BlackMarket from 'Components/landing/BlackMarket.vue';
// import WeeklyRollups from 'Components/landing/WeeklyRollups.vue';
import 'Public/css/global.css';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {
    ApHeader,
    ApFooter,
    Landing,
    ChooseFaction,
    Farming,
    Supremacy,
    Strengthen,
    WarCollectibles,
    DeflationaryEmission,
    Troops,
    BlackMarket,
    // WeeklyRollups,
  },

  methods: {},
};
</script>

<style></style>
