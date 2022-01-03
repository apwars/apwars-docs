<template>
  <div color="primary">
    <v-navigation-drawer v-model="drawer" app temporary color="#32211B">
      <v-list dense nav>
        <v-img :src="LogoAP" height="35" contain></v-img>
        <v-list-item v-for="(item, i) in links" :key="i" link>
          <v-list-item-content style="margin-top: 10px;">
            <button
              @click="links[i].newTab ? openNewTab(links[i].route) : $router.push(links[i].route)"
            >
              <v-list-item-title
                click
                style="color: white; font-size: 15px; height: 20px; font-family: PF Serif; text-align: left"
                >{{ links[i].title }}</v-list-item-title
              >
            </button>
          </v-list-item-content>
        </v-list-item>
        <button style="justify-content: center" @click="openNewTab('https://app.apwars.farm/')">
          <v-img
            class="align-center"
            :src="GoToApp"
            max-width="200"
            @click="openNewTab('https://app.apwars.farm/')"
            style="font-size: 22px; font-family: PT Serif; color: white;"
          >
            Go To App
          </v-img>
        </button>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app height="60" style="background-color: #32211B">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link to="/" class="d-flex text-decoration-none mr-2 align-center">
          <v-app-bar-nav-icon
            class="d-block d-md-none"
            style="background-color: #3D2D27; margin-right: 10px"
            @click="drawer = !drawer"
          />
          <v-img class="d-block hidden-md-and-up" :src="LogoAP" height="35" contain></v-img>
        </router-link>
        <div class="d-none d-md-block">
          <v-btn
            v-for="(item, i) in links"
            :key="i"
            text
            class="text-size-3 mx-1 text-capitalize"
            style="font-family: PT Serif"
            color="primary-0"
            @click="links[i].newTab ? openNewTab(links[i].route) : $router.push(links[i].route)"
          >
            {{ links[i].title }}
            <v-divider></v-divider>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <button class="d-none d-md-block">
          <v-img
            class="align-center"
            :src="GoToApp"
            max-width="200"
            @click="openNewTab('https://app.apwars.farm/')"
            style="font-size: 22px; font-family: PT Serif; color: white;"
          >
            Go To App
          </v-img>
        </button>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import LogoAP from 'Assets/game-ui/logo-small.png';
import GoToApp from 'Assets/game-ui/buttons/bt_03_1.png';
export default {
  name: 'ApHeader',
  data() {
    return {
      drawer: null,
      LogoAP,
      GoToApp,
      links: [
        {
          title: this.$t('home'),
          route: 'https://apwars.farm/',
          newTab: false,
        },
        {
          title: this.$t('Farms'),
          route: 'https://farms.apwars.farm/?showFarms=true',
          newTab: true,
        },
        {
          title: this.$t('Buy wGOLD'),
          route: 'https://exchange.apwars.farm/#/swap',
          newTab: true,
        },
        {
          title: this.$t('market'),
          route: 'https://app.apwars.farm/black-market',
          newTab: true,
        },
        {
          title: this.$t('wars'),
          route: 'https://app.apwars.farm/wars',
          newTab: true,
        },
        {
          title: 'Docs',
          route: 'https://apwars.farm/docs',
          newTab: true,
        },
      ],
    };
  },
  methods: {
    openNewTab(obj) {
      window.open(obj);
    },
  },
};
</script>

<style scoped>
.drawer-button {
  position: fixed;
  top: 64px;
  left: -22px;
  z-index: 6;
}
</style>
