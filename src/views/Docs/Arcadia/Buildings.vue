<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Buildings
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold" v-html="topics[i].title"></span>
            <span class="description" v-html="topics[i].desc" />
            <div v-for="(item, j) in topics[i].img" :key="j">
              <div class="d-flex justify-center align-center">
                <v-img :src="topics[i].img[j].link" :max-width="topics[i].img[j].heigth"></v-img>
                <div class="ml-10">
                  <span v-html="topics[i].img[j].desc" />
                  <span v-html="lvl" />
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import I0 from 'Assets/docs/buildings/0.png';
import I1 from 'Assets/docs/buildings/1.png';
import I2 from 'Assets/docs/buildings/2.png';
import I3 from 'Assets/docs/buildings/3.png';
import I4 from 'Assets/docs/buildings/4.png';
import I5 from 'Assets/docs/buildings/5.png';
import I6 from 'Assets/docs/buildings/6.png';
import I7 from 'Assets/docs/buildings/7.png';
import I8 from 'Assets/docs/buildings/8.png';
import I9 from 'Assets/docs/buildings/9.png';
import I10 from 'Assets/docs/buildings/10.png';
import I11 from 'Assets/docs/buildings/11.png';
import I12 from 'Assets/docs/buildings/12.png';
import I13 from 'Assets/docs/buildings/13.png';
import I14 from 'Assets/docs/buildings/14.png';
import I15 from 'Assets/docs/buildings/15.png';
import I16 from 'Assets/docs/buildings/16.png';
import I17 from 'Assets/docs/buildings/17.png';
import I18 from 'Assets/docs/buildings/18.png';
import I19 from 'Assets/docs/buildings/19.png';
import I20 from 'Assets/docs/buildings/20.png';
import I21 from 'Assets/docs/buildings/21.png';
import I22 from 'Assets/docs/buildings/22.png';
import I23 from 'Assets/docs/buildings/23.png';
import I24 from 'Assets/docs/buildings/24.png';
import I25 from 'Assets/docs/buildings/25.png';
import I26 from 'Assets/docs/buildings/26.png';
import I27 from 'Assets/docs/buildings/27.png';
import I28 from 'Assets/docs/buildings/28.png';
import I29 from 'Assets/docs/buildings/29.png';
import I30 from 'Assets/docs/buildings/30.png';
import I31 from 'Assets/docs/buildings/31.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      lvl: '<h6>Level 1</h6><h6>Level 2</h6><h6>Level 3</h6>',
      topics: [
        {
          desc: 'Village Emblems',
        },
        {
          desc:
            'In the Village Environment buildings are constructions made with different objectives. There are military, resources and research oriented buildings with different levels of advancement.',
        },
        {
          title: 'Human Buildings',
          img: [
            {
              link: I0,
              heigth: '300',
              desc: '<h6>Stone Wall</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I1,
              heigth: '300',
              desc: '<h6>Logging</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I2,
              heigth: '300',
              desc: '<h6>Marksmen Academy</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I3,
              heigth: '300',
              desc: '<h6>Warrior Academy</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I4,
              heigth: '300',
              desc: '<h6>Cavalry Academy</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I5,
              heigth: '300',
              desc: '<h6>Armory and Forge</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I6,
              heigth: '300',
              desc: '<h6>House</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I7,
              heigth: '300',
              desc: '<h6>Tavern</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I8,
              heigth: '300',
              desc: '<h6>Town Center</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I9,
              heigth: '300',
              desc: '<h6>Farm</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I10,
              heigth: '300',
              desc: '<h6>Hospital</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I11,
              heigth: '300',
              desc: '<h6>Mine</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I12,
              heigth: '300',
              desc: '<h6>Magical Temple</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I13,
              heigth: '300',
              desc: '<h6>Food Warehouse</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I14,
              heigth: '300',
              desc: '<h6>Resources Warehouse</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I15,
              heigth: '300',
              desc: '<h6>Watch-tower</h6>',
            },
          ],
        },
        {
          title: 'Orc Buildings',
          img: [
            {
              link: I16,
              heigth: '300',
              desc: '<h6>Pikewall</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I17,
              heigth: '300',
              desc: '<h6>Orc Logging</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I18,
              heigth: '300',
              desc: '<h6>Orc Marksman Academy</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I19,
              heigth: '300',
              desc: '<h6>Grunt Academy/h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I20,
              heigth: '300',
              desc: '<h6>Warg Training Ground</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I21,
              heigth: '300',
              desc: '<h6>Orc Forge</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I22,
              heigth: '300',
              desc: '<h6>Orc Pit</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I23,
              heigth: '300',
              desc: '<h6>Orc Tavern</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I24,
              heigth: '300',
              desc: '<h6>Orc Town Center</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I25,
              heigth: '300',
              desc: '<h6>Farm</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I26,
              heigth: '300',
              desc: '<h6>Orc Hospital</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I27,
              heigth: '300',
              desc: '<h6>Mine</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I28,
              heigth: '300',
              desc: '<h6>Orc Magical Temple</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I29,
              heigth: '300',
              desc: '<h6>Orc Food Warehouse</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I30,
              heigth: '300',
              desc: '<h6>Orc Resources Warehouse</h6>',
            },
          ],
        },
        {
          img: [
            {
              link: I31,
              heigth: '300',
              desc: '<h6>Orc Watch Tower</h6>',
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
