<template>
  <v-footer style="background-color: #3A2720">
    <v-container fluid class="py-5">
      <v-row>
        <v-col cols="12" md="2" lg="3" xl="4">
          <div class="mb-2">
            <router-link to="/" class="d-flex align-center text-decoration-none mr-2">
              <v-img :src="APWars" max-height="80" contain></v-img>
            </router-link>
          </div>
        </v-col>
        <v-col>
          <span class="mb-3 font-weight-bold" style="color: white">{{ $t('footer.menu') }}</span>

          <div v-for="item in menu" :key="item.label" class="my-1 body-1">
            <span @click="openNewTab(item.to)" style="color: white; cursor: pointer">
              {{ item.label }}
            </span>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="5" xl="4">
          <div class="text-center text-md-right mt-4 mt-lg-2">
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://twitter.com/apwars')"
            >
              <v-icon>{{ mdiTwitter }}</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://t.me/apwars')"
            >
              <v-icon>{{ mdiTelegram }}</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://discord.gg/QwGFm2ZMhS')"
            >
              <v-icon>{{ mdiDiscord }}</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://www.youtube.com/channel/UCyOXhEunVlQMxKRJcwsF_5w')"
            >
              <v-icon>{{ mdiYoutube }}</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://github.com/apwars')"
            >
              <v-icon>{{ mdiGithub }}</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://vm.tiktok.com/ZM8WWwQSC/')"
            >
              <i class="fab fa-tiktok"></i>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://medium.com/apwars')"
            >
              <i class="fab fa-medium-m"></i>
            </v-btn>
            <v-btn
              fab
              small
              color="secondary"
              class="ml-2 mt-1"
              @click="openNewTab('https://instagram.com/apwars')"
            >
              <i class="fab fa-instagram"></i>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-3"></v-divider>
      <div class="d-flex align-center justify-space-between">
        <div class="my-1 secondary--text">
          APWars © 2021 - All rights reserved.
        </div>
        <div class="secondary--text">
          {{ PackageJson.version }}
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import APWars from 'Assets/game-ui/logo-name.png';
import PackageJson from '../../package.json';
import { mdiTwitter, mdiTelegram, mdiDiscord, mdiGithub, mdiYoutube } from '@mdi/js';

export default {
  data() {
    return {
      APWars,
      menu: [
        {
          label: this.$t('footer.documentation'),
          to: 'https://docs.apwars.farm/',
        },
        {
          label: this.$t('market'),
          to: 'https://app.apwars.farm/',
        },
        {
          label: this.$t('footer.contact'),
          to: 'https://t.me/apwars',
        },
      ],
      PackageJson,
      mdiTwitter,
      mdiTelegram,
      mdiDiscord,
      mdiGithub,
      mdiYoutube,
    };
  },
  methods: {
    openNewTab(obj) {
      window.open(obj);
    },
  },
};
</script>
