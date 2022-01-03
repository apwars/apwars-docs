<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Migrator Code
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <v-img :src="topics[i].img" max-width="1000" class="img mt-4" />
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import Migratorcode from 'Assets/docs/migratorcode.png';
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc:
            "As rightfully pointed ou by the Goose Finance devs the fact is that Pancake swap team can transfer all their users' LP Tokens to themselves within 6 hours. Even though they haven't done it before doesn't mean that they won't do it in the future. The truth is that the code present in their contract states clearly that they can. This code has been the major vector of attack of dishonest dev teams and has already been used to rug pull unsuspecting users before.<br><br>We have removed the following problematic migrator code from our contract.",
          img: Migratorcode,
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
