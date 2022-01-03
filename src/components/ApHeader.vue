<template>
  <div color="primary">
    <v-navigation-drawer v-model="drawer" app temporary color="#32211B">
      <v-list class="d-flex flex-column justify-center align-center" dense nav>
        <v-img :src="LogoAP" height="35" contain></v-img>
        <!-- <v-list-item v-for="(item, i) in links" :key="i" link>
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
        </v-list-item> -->
        <a href="https://app.apwars.farm/" class="mt-3">
          <button>
            <v-img
              class="align-center"
              :src="GoToApp"
              max-width="200"
              style="font-size: 22px; font-family: PT Serif; color: white"
            >
              Go To App
            </v-img>
          </button>
        </a>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#3D2D27" flat elevation="4" elevate-on-scroll height="60" app>
      <v-container
        :fluid="$vuetify.breakpoint.mdAndDown"
        class="d-flex align-center py-0 px-5 px-sm-0 fill-height"
      >
        <v-app-bar-nav-icon
          class="d-block d-md-none"
          style="background-color: #3d2d27; margin-right: 10px"
          @click="drawer = !drawer"
        />
        <router-link
          v-if="$vuetify.breakpoint.mdAndUp"
          to="/"
          class="d-flex text-decoration-none mr-2 align-center"
        >
          <v-img class="d-block hidden-md-and-up" :src="LogoAP" height="35" contain></v-img>
        </router-link>
        <div class="d-none d-md-block">
          <span v-for="(item, i) in links" :key="i">
            <a v-if="!links[i].isDocs" :href="links[i].route">
              <v-btn
                text
                class="text-size-3 mx-1 text-capitalize"
                style="font-family: PT Serif"
                color="primary-0"
              >
                {{ links[i].title }}
                <v-divider></v-divider>
              </v-btn>
            </a>
          </span>
        </div>
        <v-spacer></v-spacer>
        <a href="https://app.apwars.farm/">
          <button class="d-none d-md-block">
            <v-img
              class="align-center"
              :src="GoToApp"
              :max-width="$vuetify.breakpoint.mdAndDown ? '143' : '160'"
              style="font-family: PT Serif; color: white"
              :style="$vuetify.breakpoint.mdAndDown ? 'font-size: 19px;' : 'font-size: 22px;'"
            >
              Go To App
            </v-img>
          </button>
        </a>
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
          title: this.$t('Farms'),
          route: 'https://farms.apwars.farm/?showFarms=true',
        },
        {
          title: this.$t('Buy wGOLD'),
          route: 'https://exchange.apwars.farm/#/swap',
        },
        {
          title: this.$t('market'),
          route: 'https://app.apwars.farm/black-market',
        },
        {
          title: this.$t('wars'),
          route: 'https://app.apwars.farm/wars',
        },
        {
          title: 'Docs',
          route: 'https://apwars.farm/docs',
          isDocs: this.$route.path === '/docs' ? true : false,
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

a {
  text-decoration: none;
}
</style>
