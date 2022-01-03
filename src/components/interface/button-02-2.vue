<template>
  <button>
    <v-img
      :src="Button"
      :height="`${$vuetify.breakpoint.mdAndUp ? 80 : 50}`"
      contain
      class="align-center"
      @click="openNewTab(link)"
    >
      <h3
        v-if="$vuetify.breakpoint.mdAndUp"
        :style="$vuetify.breakpoint.mdAndUp ? yellowText : yellowTextH4"
        class="text-uppercase"
      >
        {{ text }}
      </h3>
      <h4 v-else :style="yellowTextH4" class="text-uppercase">
        {{ text }}
      </h4>
    </v-img>
  </button>
</template>

<script>
import Button from 'Assets/game-ui/buttons/bt_02_2.png';
import { yellowText, yellowTextH4 } from 'style/text';

export default {
  name: 'Button-02-2',
  props: {
    text: String,
    link: String,
  },
  data() {
    return {
      Button,
      yellowText,
      yellowTextH4,
    };
  },
  methods: {
    openNewTab(obj) {
      window.open(obj);
    },
  },
};
</script>

<style></style>
