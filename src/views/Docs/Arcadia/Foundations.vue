<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Foundations
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <!-- <v-img :src="topics[i].image" max-width="20%"></v-img> -->
          </div>
        </v-card-text>
        <v-col cols="12" md="6">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Foundations
                  </th>
                  <th class="text-left">
                    Cost in wLAND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="foundation in foundations" :key="foundation.name">
                  <td>{{ foundation.name }}</td>
                  <td class="text-right">{{ foundation.wLandcost }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>

        <v-col cols="12">
          <span v-html="maintenanceCostsText" class="description"></span>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Foundations
                  </th>
                  <th class="text-right">
                    Maintenance Costs in workers
                  </th>
                  <th class="text-right">
                    Maintenance Costs in wGOLD
                  </th>
                  <th class="text-right">
                    Maintenance Costs in wLAND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="foundation in foundations" :key="foundation.name">
                  <td>{{ foundation.name }}</td>
                  <td class="text-right">{{ foundation.wLandcost }}</td>
                  <td class="text-right">{{ foundation.MaintenanceCostswGOLD }}</td>
                  <td class="text-right">{{ foundation.MaintenanceCostswLAND }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-container>
    </v-col>
  </div>
</template>

<script>
/* import IMG from 'Assets/docs/war/elixir10.png'; */

export default {
  name: 'Foundations',
  data() {
    return {
      topics: [
        {
          title: 'Foundations',
          desc: `<br> In Arcadia, players will be able to acquire lands using wLANDS and they can also ultimately build foundations for their clans and troops.
            <br><br> The Arcadia map is 100x100, with 10,000 lands and 100 regions. A special foundation helps players in a region, for example, and the market will help players to trade. The market’s owner will receive a percentage (%) of each transaction and if a player chooses to trade in a market nearby, he will spend less time travelling than if he goes to a market in another location.
            <br><br> When a player starts a village, world resources will be collected for free but, to build other village items, workers will be essential. Players can buy workers and world resources if they wish too.
            <br><br> A weekly maintenance cost is introduced for players to have a feeling of real ownership- paying a little amount of wLAND, wGOLD and workers as maintenance cost.
            <br><br> A player won’t need to build all foundations; they can choose to play like real estate dealers, acquiring lands to sell later, and also by building foundations to provide services to others. Or they can play as a regular game player building a village and fighting for the world's treasure. Another option is to clean the world with your own workers and sell resources collected at any time.
            <br><br> Lands - 10% of lands are reserved to be built as special places, like mountains, lakes and so on. 
            <br><br> There are different types of foundations in the Arcadia Expansion: Temple, Watchtower, Market, Hideout, Land and Village.
            <br><br>`,
        },
        {
          title: 'Foundations:',
          desc: `<br><br> <b>Temple</b>
            <br><br> When acquiring a Temple, a player will increase courage by 15%. The number of required workers to do this job is 50 and the building time is 30 days.
            <br> Max quantity available: 25 temples
            <br> Price: 125 wLAND each
            <br><br> <b>Watchtower</b>
            <br><br> When acquiring a Watchtower, a player will be able to receive notifications of attacks and troop movements. The number of required workers to do this job is 25 and the building time is 30 days.
            <br> Max quantity available: 25 watchtowers <br> Price: 125 wLAND each
            <br><br> <b>Market</b>
            <br><br> When acquiring a Market, a player will be able to facilitate exchanges between players. A (%) of trades will be possible when having a market and reduction of the operating radius over time. The number of required workers to do this job is 100 and the building time is 30 days.
            <br> Max quantity available: 15 markets <br> Price: 400 wLAND each
            <br><br> <b>Hideout</b>
            <br><br> When acquiring a Hideout, a player will be able to store resources to avoid looting. A (%) of stocked resources will be in the hiding place. The number of required workers to do this job is 15 and the building time is 30 days.
            <br> Max quantity available: 40 hiding places <br> Price: 75 wLAND each
            <br><br> <b>Village</b>
            <br><br> When acquiring a Village, a player will be able to manage it. The number of required workers to do this job is 10 and the building time is 21 days.
            <br> Max quantity available: 8,895 <br> Price: 10 wLAND each
            <br><br> There are building and maintenance costs for each one of the foundations.
            <br><br> <div style="text-decoration: underline;">Building Costs: </div>
            <br> When building using Workers, there are building costs to be payable in wLAND aiming to the construction.These costs represent the initial resources that must be spent to build a foundation. They are as follow:`,
        },
      ],

      foundations: [
        {
          name: 'Temple',
          wLandcost: 125,
          MaintenanceCostsWorkers: 125,
          MaintenanceCostswGOLD: 3000,
          MaintenanceCostswLAND: 10,
        },
        {
          name: 'Watchtower',
          wLandcost: 125,
          MaintenanceCostsWorkers: 125,
          MaintenanceCostswGOLD: 1500,
          MaintenanceCostswLAND: 10,
        },
        {
          name: 'Market',
          wLandcost: 400,
          MaintenanceCostsWorkers: 400,
          MaintenanceCostswGOLD: 4000,
          MaintenanceCostswLAND: 10,
        },
        {
          name: 'Hideout',
          wLandcost: 75,
          MaintenanceCostsWorkers: 75,
          MaintenanceCostswGOLD: 1500,
          MaintenanceCostswLAND: 10,
        },
        {
          name: 'Land',
          wLandcost: 10,
          MaintenanceCostsWorkers: 10,
          MaintenanceCostswGOLD: 1000,
          MaintenanceCostswLAND: 1,
        },
        {
          name: 'Village',
          wLandcost: 10,
          MaintenanceCostsWorkers: 10,
          MaintenanceCostswGOLD: 1000,
          MaintenanceCostswLAND: 1,
        },
      ],
      maintenanceCostsText: `<br> <div style="text-decoration: underline;">Maintenance Costs: </div>
        <br>There are also maintenance costs  that are divided in wGOLD and wLAND. These costs represent recurrent resources that need to be spent weekly to maintain the proper functioning of the built structure.
        <br><br>`,
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
</style>
