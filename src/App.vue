<template>
  <v-app>
    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import 'Public/css/global.css';
import 'Public/css/fonts.css';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
span,
p,
li {
  font-size: 18px;
}
</style>
