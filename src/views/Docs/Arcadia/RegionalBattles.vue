<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Regional Battles
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-3">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span class="description" v-html="topics[i].desc" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="justify-center d-block">
              <div class="text-center">
                <v-img
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                  class="img mb-4"
                ></v-img>
                <span v-html="topics[i].img[j].imgdesc" class="titleImg" />
              </div>
              <span class="description" v-html="topics[i].img[j].desc"></span>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import Attack from 'Assets/docs/Attack.png';
import AttackConfirmation from 'Assets/docs/AttackConfirmation.png';
import AttackResult from 'Assets/docs/AttackResult.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          desc: '<br>Village vs Village',
        },
        {
          desc:
            '<br>Regional Battles are composed by attacking another Village and defending from a foreign attack.<br>You can chose a Village to attack in order to pillage and incorporate your enemies resources. To do this you will have to chose your target and send units that will head to war.',
          img: [
            {
              link: Attack,
              heigth: '900',
              imgdesc: 'Attack Interface',
              desc:
                'Within the battle period you will notice that your troops will take time to reach the enemy. If you think this time is acceptable you can confirm your order. Just remember to guard your own Village from external attackers during campaign time.',
            },
          ],
        },
        {
          img: [
            {
              link: AttackConfirmation,
              heigth: '900',
              imgdesc: 'Attack confirmation',
              desc:
                'Whenever the battle is resolved you will have a complete understanding about the war statistics with death toll and causalities from both sides while also seeing the resources you were able to pillage from your enemy.',
            },
          ],
        },
        {
          img: [
            {
              link: AttackResult,
              heigth: '900',
              imgdesc: 'Results of the Battle',
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
