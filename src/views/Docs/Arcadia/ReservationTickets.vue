<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Reservation Tickets
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <h4 v-if="topics[i].img[j].title">{{ topics[i].img[j].title }}</h4>
              <v-img
                :src="topics[i].img[j].link"
                :max-width="topics[i].img[j].heigth"
                class="img mb-4 mt-4"
              ></v-img>
              <span class="description" v-html="topics[i].img[j].desc"></span>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import CardWorld from 'Assets/docs/cardworld.png';
import CardClan from 'Assets/docs/cardclan.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: 'Tickets that represents game roles',
        },
        {
          desc:
            '<br>Reservation Tickets are used to guarantee the purchase of worlds and clans creation.<br>You can use (burn) a tickets to instantiate to instantiate a world or clan in the Arcadia expansion.',
          img: [
            {
              link: CardWorld,
              heigth: '300',
            },
            {
              link: CardClan,
              heigth: '300',
            },
          ],
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
.span {
  font-size: 14px;
}
.description p {
  font-size: 14px;
}

.titleImg {
  font-size: 12px;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: darkgray;
}
ul li {
  font-size: 14px;
}
</style>
