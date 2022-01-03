<template>
  <div>
    <v-col>
      <v-banner class="justify-center  font-weight-bold" sticky>
        Factions, Races and Units
      </v-banner>

      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>

            <span class="description" v-html="topics[i].name"></span>
          </div>
        </v-card-text>
        <span class="font-weight-bold mt-4">Humans</span>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Icon
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Ticker
                </th>
                <th class="text-left">
                  Tier
                </th>
                <th class="text-center">
                  Strength
                </th>
                <th class="text-center">
                  Defense
                </th>
                <th class="text-left">
                  Improvement factor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in humans" :key="item.name">
                <td>
                  <v-img :src="item.link" :max-width="item.heigth" class="img"></v-img>
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <v-address
                    :address="item.contract"
                    :titleTicker="item.ticker"
                    link
                    tooltip
                  ></v-address>
                </td>
                <td>{{ item.title }}</td>
                <td class="text-center">{{ item.strength }}</td>
                <td class="text-center">{{ item.defense }}</td>
                <td>{{ item.improvement }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="mt-4">
          <span class="font-weight-bold mt-4">Elves</span>
        </div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Icon
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Ticker
                </th>
                <th class="text-left">
                  Tier
                </th>
                <th class="text-center">
                  Strength
                </th>
                <th class="text-center">
                  Defense
                </th>
                <th class="text-left">
                  Improvement factor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in elves" :key="item.name">
                <td>
                  <v-img :src="item.link" :max-width="item.heigth" class="img"></v-img>
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <v-address
                    :address="item.contract"
                    :titleTicker="item.ticker"
                    link
                    tooltip
                  ></v-address>
                </td>
                <td>{{ item.title }}</td>
                <td class="text-center">{{ item.strength }}</td>
                <td class="text-center">{{ item.defense }}</td>
                <td>{{ item.improvement }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="mt-4">
          <span class="font-weight-bold mt-4">Orcs</span>
        </div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Icon
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Ticker
                </th>
                <th class="text-left">
                  Tier
                </th>
                <th class="text-center">
                  Strength
                </th>
                <th class="text-center">
                  Defense
                </th>
                <th class="text-left">
                  Improvement factor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orcs" :key="item.name">
                <td>
                  <v-img :src="item.link" :max-width="item.heigth" class="img"></v-img>
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <v-address
                    :address="item.contract"
                    :titleTicker="item.ticker"
                    link
                    tooltip
                  ></v-address>
                </td>
                <td>{{ item.title }}</td>
                <td class="text-center">{{ item.strength }}</td>
                <td class="text-center">{{ item.defense }}</td>
                <td>{{ item.improvement }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="mt-4">
          <span class="font-weight-bold mt-4">Undead</span>
        </div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Icon
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Ticker
                </th>
                <th class="text-left">
                  Tier
                </th>
                <th class="text-center">
                  Strength
                </th>
                <th class="text-center">
                  Defense
                </th>
                <th class="text-left">
                  Improvement factor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in undead" :key="item.name">
                <td>
                  <v-img :src="item.link" :max-width="item.heigth" class="img"></v-img>
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <v-address
                    :address="item.contract"
                    :titleTicker="item.ticker"
                    link
                    tooltip
                  ></v-address>
                </td>
                <td>{{ item.title }}</td>
                <td class="text-center">{{ item.strength }}</td>
                <td class="text-center">{{ item.defense }}</td>
                <td>{{ item.improvement }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import VAddress from 'Components/VAddress';

import Warrior from 'Assets/troops/currency/HumansTier-1_2.png';
import Archer from 'Assets/troops/currency/HumansTier-1_1.png';
import ArmouredWarrior from 'Assets/troops/currency/HumansTier-2_1.png';
import Crossbow from 'Assets/troops/currency/HumansTier-2_2.png';
import Wizard from 'Assets/troops/currency/HumansTier-3.png';
import Horse from 'Assets/troops/currency/HumansTier-4.png';

import wPikeElf from 'Assets/troops/currency/ElvesTier-1_1.png';
import wElvenArcher from 'Assets/troops/currency/ElvesTier-1_2.png';
import wArmoredElf from 'Assets/troops/currency/ElvesTier-2_1.png';
import wBlademaster from 'Assets/troops/currency/ElvesTier-2_2.png';
import wFeralSpirit from 'Assets/troops/currency/ElvesTier-3.png';
import wElkRider from 'Assets/troops/currency/ElvesTier-4.png';

import Grunt from 'Assets/troops/currency/OrcsTier-1_1.png';
import OrcArcher from 'Assets/troops/currency/OrcsTier-1_2.png';
import Pike from 'Assets/troops/currency/OrcsTier-2_1.png';
import ArmouredGrunt from 'Assets/troops/currency/OrcsTier-2_2.png';
import Shaman from 'Assets/troops/currency/OrcsTier-3.png';
import Warg from 'Assets/troops/currency/OrcsTier-4.png';

import SkeletonWarrior from 'Assets/troops/currency/UndeadsTier-1_2.png';
import Hound from 'Assets/troops/currency/UndeadsTier-1_1.png';
import UndeadArcher from 'Assets/troops/currency/UndeadsTier-2_1.png';
import UndeadPikeMan from 'Assets/troops/currency/UndeadsTier-2_2.png';
import Witch from 'Assets/troops/currency/UndeadsTier-3.png';
import DeathKnight from 'Assets/troops/currency/UndeadsTier-4.png';

import 'Public/css/global.css';

export default {
  data() {
    return {
      topics: [
        {
          title: 'Factions',
          name:
            '<br>The combat is divided into two factions: The Corporation and The Degenerate. The Corporation is composed by sophisticated and organized races that form an alliance. The Degenerate are a horde of powerful and reckless races that seek to dominate all other races.',
        },
        {
          title: 'Races',
          name:
            '<br>Each of these factions have three difference races, to be introduced as the game progresses. Whenever a faction loses a war, another allied race joins the game as reinforcements. Each race has its different units, divided in Tiers.<br>Besides the Celebration Festival that will be enjoyed by everybody with wCOURAGE, the faction that lost the war will receive a new allied race a reinforcement.',
        },
      ],
      humans: [
        {
          title: 'Barracks',
          ticker: 'wWARRIOR',
          link: Warrior,
          heigth: '80',
          name: 'Warrior',
          strength: 2,
          defense: 4,
          contract: '0x54f653f539a78d3db0e0d3b166cf32c4f6cc5fb6',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Barracks',
          ticker: 'wARCHER',
          link: Archer,
          heigth: '80',
          name: 'Archer',
          strength: 5,
          defense: 1,
          contract: '0xaa2e03e7838148ce9fad6ce4c00275d89127a03e',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wARMOURED-WARRIOR',
          link: ArmouredWarrior,
          heigth: '80',
          name: 'Armoured Warrior',
          strength: 15,
          defense: 15,
          contract: '0xd67761df2b76ee251d48816691f5ff7728d94daa',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wCROSSBOWMAN',
          link: Crossbow,
          heigth: '80',
          name: 'Crossbow man',
          strength: 25,
          defense: 5,
          contract: '0xa0ecf9c7114effb43440b95d54e09a2a67331236',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Arcane Library',
          ticker: 'wWIZARD',
          link: Wizard,
          heigth: '80',
          name: 'Wizard',
          strength: 70,
          defense: 20,
          contract: '0x1225c7999483544c7859fe5a23c9be70d14d5378',
          improvement: 'Troop improvement factor of 0.1%.',
        },
        {
          title: 'Stables',
          ticker: 'wHORSEMAN',
          link: Horse,
          heigth: '80',
          name: 'Horse Man',
          strength: 150,
          defense: 50,
          contract: '0x5898d096dec52527a2900f7482492c71107b7520',
          improvement: 'Troop improvement factor of 0%.',
        },
      ],
      elves: [
        {
          title: 'Barracks',
          ticker: 'wPIKE-ELF',
          link: wPikeElf,
          heigth: '80',
          name: 'Pike Elf',
          strength: 6,
          defense: 10,
          contract: '0xa248284fb4e3e58400644dc4cd37410f8ab31266',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Barracks',
          ticker: 'wELVEN-ARCHER',
          link: wElvenArcher,
          heigth: '80',
          name: 'Elven Archer',
          strength: 12,
          defense: 6,
          contract: '0x804e7030f932ca06dee7bc08051f1123898cef5d',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wARMORED-ELF',
          link: wArmoredElf,
          heigth: '80',
          name: 'Armored Elf',
          strength: 25,
          defense: 25,
          contract: '0xf35e1bd15e49651ad76ab0a4b9ce93f6e9850f7f',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          link: wBlademaster,
          ticker: 'wBLADEMASTER',
          heigth: '80',
          name: 'Blademaster',
          strength: 40,
          defense: 10,
          contract: '0xe7cb07032a9b9150a25249709c50b9bd923e445e',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Arcane Library',
          ticker: 'wFERAL-SPIRIT',
          link: wFeralSpirit,
          heigth: '80',
          name: 'Feral Spirit',
          strength: 70,
          defense: 20,
          contract: '0xA7439A291251F4Dd250fE3B3f65FbE537fE633bb',
          improvement: 'Troop improvement factor of 0.1%.',
        },
        {
          title: 'Stables',
          ticker: 'wELK-RIDER',
          link: wElkRider,
          heigth: '80',
          name: 'Elk Rider',
          strength: 250,
          defense: 90,
          contract: '',
          improvement: 'Troop improvement factor of 0%.',
        },
      ],
      orcs: [
        {
          title: 'Barracks',
          ticker: 'wGRUNT',
          link: Grunt,
          heigth: '80',
          name: 'Grunt',
          strength: 2,
          defense: 4,
          contract: '0xd7544fe7668f3dfb7ad21f9e02d7a51e116b6d75',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Barracks',
          ticker: 'wORC-ARCHER',
          link: OrcArcher,
          heigth: '80',
          name: 'Orc Archer',
          strength: 5,
          defense: 1,
          contract: '0x934e11a44b2e817fe9bd6f337ef21bd35e46080e',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wPIKE-ORC',
          link: Pike,
          heigth: '80',
          name: 'Pike Orc',
          strength: 15,
          defense: 15,
          contract: '0x491c739efd076655f7d8d0db545b7fb09ddf517f',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wARMOURED-GRUNT',
          link: ArmouredGrunt,
          heigth: '80',
          name: 'Armoured Grunt',
          strength: 25,
          defense: 5,
          contract: '0x56c09e954690d80c5728194f7eaf473737dc2180',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Arcane Library',
          ticker: 'wSHAMAN',
          link: Shaman,
          heigth: '80',
          name: 'Shaman',
          strength: 70,
          defense: 20,
          contract: '0x10eaac888b70abe542a50b787abe7f94b8989cb7',
          improvement: 'Troop improvement factor of 0.1%.',
        },
        {
          title: 'Stables',
          ticker: 'wWARG',
          link: Warg,
          heigth: '80',
          name: 'Warg',
          strength: 150,
          defense: 50,
          contract: '0xc15be042471ebac1908d7bd93648161a1b82ee3d',
          improvement: 'Troop improvement factor of 0%.',
        },
      ],
      undead: [
        {
          title: 'Barracks',
          ticker: 'wSKELETON-WARRIOR',
          link: SkeletonWarrior,
          heigth: '80',
          name: 'Skeleton Warrior',
          strength: 3,
          defense: 5,
          contract: '0xb5d488dc4DE64A6a968D8f317DB8DE2cDBF52828',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Barracks',
          ticker: 'wHOUND',
          link: Hound,
          heigth: '80',
          name: 'Hound',
          strength: 8,
          defense: 2,
          contract: '0x4D21177Bf8a0F9cfAca6d0f568Ff3e79a121B106',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wUNDEAD-ARCHER',
          link: UndeadArcher,
          heigth: '80',
          name: 'Undead Archer',
          strength: 35,
          defense: 8,
          contract: '0xd048cDf2e870E60D46527463a14aEFC0377D754c',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Armory',
          ticker: 'wUNDEAD-PIKEMAN',
          link: UndeadPikeMan,
          heigth: '80',
          name: 'Undead PikeMan',
          strength: 22,
          defense: 22,
          contract: '0x8b394cfAeBA9812801C92388570C95208Ad1300D',
          improvement: 'Troop improvement factor of 0%.',
        },
        {
          title: 'Arcane Library',
          ticker: 'wWITCH',
          link: Witch,
          heigth: '80',
          name: 'Witch',
          strength: 70,
          defense: 20,
          contract: '0x2a63DDDD2c0ba10F465080a06563aF3acb5d1d3c',
          improvement: 'Troop improvement factor of 0.1%.',
        },
        {
          title: 'Stables',
          ticker: 'wDEATH-KNIGHT',
          link: DeathKnight,
          name: 'Death Knight',
          heigth: '80',
          strength: 200,
          defense: 60,
          contract: '0x62876880fd6fe05285ea758aac09d68a90337f51',
          improvement: 'Troop improvement factor of 0%.',
        },
      ],
    };
  },
  components: {
    VAddress,
  },

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
.description {
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
