<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        General
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].ul" :key="j" class="justify-center mb-6">
              <p>{{ topics[i].ul[j].li }}</p>
              <ul v-for="(item, k) in item.ul" :key="k">
                <li>{{ topics[i].ul[j].ul[k] }}</li>
              </ul>
            </div>
            <span v-html="topics[i].desc2" class="description"></span>
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
          title: 'What is the conservative strategy?',
          desc:
            "<br>Instead simply buying the wGOLD, you can use a conservative yield gathering conservative strategy: farming wGOLD using LP tokens gained on LP pools against BUSD and wUNITS. Doing this you can still gain exposition to wGOLD's tokenomics, enjoying some passive income from the liquidity mining.",
        },
        {
          title: 'What is the intermediary risk-taking strategy?',
          desc:
            '<br>If you want to be a little bolder, you can try the wGOLD / strong-tokens pools, such as wUNITS/wGOLD and BUSD/wGOLD and get more wGOLD rewards',
        },
        {
          title: 'What is the adventurous strategy?',
          desc:
            '<br>The adventurous strategy is the one we encourage the bold to enjoy. It consists of following through each layer of farming in order to farm the creatures and battle in the Wars. The war against the Forces of Extreme Darkness could reward all the risks involved in the lower layers of the farm.',
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
