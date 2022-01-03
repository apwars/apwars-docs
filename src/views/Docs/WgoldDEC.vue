<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        wGOLD - Deflationary Emission Curve
      </v-banner>

      <v-container>
        <v-card-text>
          <div class="justify-center mb-6">
            <span class="description">
              Emission's exponential decay for every month in block time, designed for scarcity of
              long term supply.
            </span>
            <div>
              <span class="font-weight-bold">Resource Tokens</span>
            </div>
            <div>
              <ul>
                <li>wGOLD</li>
                <li>wCOURAGE</li>
              </ul>
            </div>
          </div>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <div v-for="(item, j) in topics[i].img" :key="j" class="mb-4">
              <div class="text-center">
                <v-img
                  class="img"
                  :src="topics[i].img[j].link"
                  :max-width="topics[i].img[j].heigth"
                ></v-img>
                <span v-html="topics[i].img[j].desc" class="titleImg text-center" />
              </div>
              <div v-if="topics[i].img[j].name" class="d-flex mt-5">
                <span class="font-weight-bold">Name: </span>
                <span class="description ml-2" v-html="topics[i].img[j].name"></span>
              </div>
              <div v-if="topics[i].img[j].type" class="d-flex mt-5">
                <span class="font-weight-bold">Type: </span>
                <span class="description ml-2" v-html="topics[i].img[j].type"></span>
              </div>
              <div v-if="topics[i].img[j].ticker" class="d-flex mt-5">
                <span class="font-weight-bold">Ticker: </span>
                <span class="description ml-2" v-html="topics[i].img[j].ticker"></span>
              </div>
              <div v-else class="d-flex mt-5">
                <span class="font-weight-bold" v-html="topics[i].img[j].tier"></span>
              </div>
              <div v-if="topics[i].img[j].address" class="d-flex mt-5">
                <span class="font-weight-bold">Contract address: </span>
                <span class="description ml-2" v-html="topics[i].img[j].address"></span>
              </div>
              <div v-else class="mt-5">
                <span class="font-weight-bold">Units: </span>
                <div v-for="(item, k) in topics[i].img[j].units" :key="k">
                  <li class="ml-4">
                    <span class="description" v-html="topics[i].img[j].units[k].ticker"></span>
                    <span class="description" v-html="topics[i].img[j].units[k].address"></span>
                  </li>
                </div>
              </div>
              <div v-if="topics[i].img[j].chain" class="d-flex mt-5">
                <span class="font-weight-bold">Chain: </span>
                <span class="description ml-2" v-html="topics[i].img[j].chain"></span>
              </div>
              <div v-if="topics[i].img[j].asymptotic" class="mt-5">
                <span class="font-weight-bold">Asymptotic Limited Supply: </span>
                <span class="description ml-2" v-html="topics[i].img[j].asymptotic"></span>
              </div>
              <div v-if="topics[i].img[j].deflation" class="mt-5">
                <span class="font-weight-bold">Exponential deflation rate: </span>
                <span class="description ml-2" v-html="topics[i].img[j].deflation"></span>
                <v-img class="img mt-5 mb-5" :src="topics[i].img[j].img" max-width="800"></v-img>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import wGOLD from 'Assets/docs/wGOLD.png';
import wGOLDgraph from 'Assets/docs/wGOLDgraph.png';
import PiggyBank from 'Assets/docs/PiggyBank.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      wGOLDgraph,
      PiggyBank,
      topics: [
        {
          title: 'wGOLD:',
          img: [
            {
              img: wGOLDgraph,
              link: wGOLD,
              desc: 'wGOLD Icon',
              heigth: '200',
              name: 'War Gold',
              type: 'Resource',
              ticker: 'wGOLD',
              address: '0x7Ab6eedd9443e0e98E5Ea93667CA5B250b8ddA51',
              chain: 'Binance Smart Chain (BEP-20)',
              asymptotic:
                'A weekly decay emission rate will limit supply at less than 252.000.000 (Slightly higher than 10x the total supply of Bitcoin)<br>',
              deflation:
                '<p>8% less emissions per week. (Same compound effect of radioactive decay)</p><br>Emission rate at the 1st week: 100 wGOLD/block<br>Emission rate at the 20th week: 20.5 wGOLD/block<br>Emission rate at the 50th week: 1.68 wGOLD/block<br>Emission rate at the 60th week: 0,73 wGOLD/block<br><br><p>Weekly average emissions for the first year:</p>',
            },
          ],
        },
        {
          title: 'Unit Tokens',
          desc:
            '<br>Unit tokens of the same tier with equal emission will be treated in aggregation for the sake of simplicity and will be represented by the placeholder w-token.',
          img: [
            {
              type: 'Units',
              tier: 'Tier 1',
              units: [
                { ticker: 'wWARRIOR: ', address: '0x54f653f539a78d3db0e0d3b166cf32c4f6cc5fb6' },
                { ticker: 'wARCHER: ', address: '0xAA2E03E7838148ce9FAd6Ce4C00275D89127A03e' },
                { ticker: 'wGRUNT: ', address: '0xd7544fe7668f3dfb7ad21f9e02d7a51e116b6d75' },
                { ticker: 'wORC-ARCHER:', address: '0x934e11a44b2e817fe9bd6f337ef21bd35e46080e' },
                {
                  ticker: 'wSKELETON-WARRIOR: ',
                  address: '0xb5d488dc4DE64A6a968D8f317DB8DE2cDBF52828',
                },
                { ticker: 'wHOUND: ', address: '0x4D21177Bf8a0F9cfAca6d0f568Ff3e79a121B106' },
                { ticker: 'wPIKE-ELF: ', address: '0xa248284fb4e3e58400644dc4cd37410f8ab31266' },
                {
                  ticker: 'wPIKE-wELVEN-ARCHER: ',
                  address: '0x804e7030f932ca06dee7bc08051f1123898cef5d',
                },
              ],
            },
          ],
        },
        {
          img: [
            {
              tier: 'Tier 2',
              units: [
                {
                  ticker: 'wARMORED-WARRIOR: ',
                  address: '0xd67761df2b76ee251d48816691f5ff7728d94daa',
                },
                {
                  ticker: 'wCROSSBOW-MAN: ',
                  address: '0xa0ecf9c7114effb43440b95d54e09a2a67331236',
                },
                {
                  ticker: 'wARMORED-GRUNT: ',
                  address: '0x56c09e954690d80c5728194f7eaf473737dc2180',
                },
                { ticker: 'wPIKE-ORC:', address: '0x491c739efd076655f7d8d0db545b7fb09ddf517f' },
                {
                  ticker: 'wUNDEAD-ARCHER: ',
                  address: '0xd048cDf2e870E60D46527463a14aEFC0377D754c',
                },
                {
                  ticker: 'wUNDEAD-PIKEMAN: ',
                  address: '0x8b394cfAeBA9812801C92388570C95208Ad1300D',
                },
                { ticker: 'wARMORED-ELF: ', address: '0xf35e1bd15e49651ad76ab0a4b9ce93f6e9850f7f' },
                { ticker: 'wBLADEMASTER: ', address: '0xe7cb07032a9b9150a25249709c50b9bd923e445e' },
              ],
            },
          ],
        },
        {
          img: [
            {
              tier: 'Tier 3',
              units: [
                {
                  ticker: 'wWIZARD:  ',
                  address: '0x1225c7999483544c7859fe5a23c9be70d14d5378',
                },
                {
                  ticker: 'wSHAMAN: ',
                  address: '0x10eaac888b70abe542a50b787abe7f94b8989cb7',
                },
                {
                  ticker: 'wWITCH: ',
                  address: '0x2a63DDDD2c0ba10F465080a06563aF3acb5d1d3c',
                },
                {
                  ticker: 'wFERAL-SPIRIT: ',
                  address: '0xA7439A291251F4Dd250fE3B3f65FbE537fE633bb',
                },
              ],
            },
          ],
        },
        {
          img: [
            {
              tier: 'Tier 4',
              units: [
                {
                  ticker: 'wHORSEMAN:  ',
                  address: '0x5898d096dec52527a2900f7482492c71107b7520',
                },
                {
                  ticker: 'wSHAMAN: ',
                  address: '0xc15be042471ebac1908d7bd93648161a1b82ee3d',
                },
                {
                  ticker: 'wWARG: ',
                  address: '0x62876880fd6fe05285ea758aac09d68a90337f51',
                },
                {
                  ticker: 'wELK-RIDER: ',
                  address: '0x2e67bd04a28fad0d243d7f7cd436027d41a68a25',
                },
              ],
              chain: 'Binance Smart Chain (BEP-20)',
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
