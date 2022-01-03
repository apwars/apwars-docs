<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Wars
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'Can I withdraw my tokens from the Battle for Supremacy?',
          desc:
            '<br>No, once you sent your troops to the War Contract, those troops cannot be drawn out.',
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
