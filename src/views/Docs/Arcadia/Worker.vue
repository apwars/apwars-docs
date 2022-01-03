<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Worker
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <v-img :src="topics[i].img" max-width="80%" class="img"></v-img>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import IMG from 'Assets/docs/arcadia/worker.jpg';

export default {
  name: 'Worker',
  data() {
    return {
      topics: [
        {
          title: 'Free2Play Feature - Get Worker',
          desc: `<br>A brand new Free2Play component called Get Worker  was created by a bright team of developers. In this feature, players will  produce workers to be used in Arcadia or trade them if they  wish.
            <br><br> Anyone can join the adventure and the workers players are getting are FREE. Also, the production is constant, follows a sequence of tasks and it happens without interference even when players are logged off.  After production, players could send their team of workers to work in Arcadia or even choose to sell on the black market. All it's needed is to spend some time creating these workers.
            <br><br> Arcadia needs workers to build foundations for its citizens and their troops, to clean the lands and to do an array of necessary work that must be performed by these strong figures. Without workers, players might have a land but won’t be able to use it properly without buildings and foundations.
            <br><br> To activate the first worker, follow the link: https://app.apwars.farm/worker.
            <br><br> Click on: ‘Get Worker’ and ‘Confirm’
            <br><br> All players need to do now is to spend time producing Workers by overseeing the tasks they have to perform.
            <br><br> The worker will be collecting water and wheat for the next worker and when he finishes his job, players will click on ‘Get Worker’ for him to be sent to the basket. The time is then decreased by 10%, another worker will appear straight away and will follow the same sequence in a shorter time (10% less than the previous one). And so on. The maximum decrease in time is 96%.
            <br><br> If the production is stopped by the withdrawal of some workers,  the time will be increased and workers will be sent to the Inventory - game items (Spendable).
            <br><br> Keep producing to be able to have strong workers to work on lands in Arcadia. Or trade and earn money from other players by selling them for a good price. <br><br>`,
          img: IMG,
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
