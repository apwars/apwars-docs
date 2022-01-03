<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Emergency Withdrawals
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div>
              <a v-html="topics[i].link" :href="topics[i].link" class="link"></a>
            </div>
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
          desc:
            "<br>If something happens to the front-end (DDOS), we somehow get censored by the establishment for providing you the tools to trade freely. Rest assured that your funds will be claimable by you. But you'll need to interact with the BSC blockchain yourself.<br>To do this you should:",
        },
        {
          desc: '<br>1) Click on our Masterchef address using the following link:',
          link: 'https://bscscan.com/address/0x334b679ec7ed94fd03342ab842ff3190395ac53b',
        },
        {
          desc: '<br>2) Find the poolID of the pool you have staked. Full list: ',
          link:
            'https://github.com/apwars/apwars-frontend/blob/develop/src/config/constants/farms.ts',
        },
        {
          desc: '<br>3) Click onto the LP Address',
        },
        {
          desc: '<br>4) Click onto the APWars LP (wGOLD-LP) link',
        },
        {
          desc: '<br>5) Do an emergency withdrawal (Connect to Web3)',
        },
        {
          desc: '<br>Go to 4. -> enter the pool ID that you want to withdraw',
        },
      ],
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
.description p {
  font-size: 14px;
}

.link {
  color: rgba(207, 160, 4, 0.836);
}
</style>
