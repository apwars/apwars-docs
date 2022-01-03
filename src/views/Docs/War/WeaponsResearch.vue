<template>
  <div>
    <v-col>
      <v-banner class="justify-center font-weight-bold" sticky>
        Weapons Research
      </v-banner>
      <v-container>
        <v-card-text>
          <div v-for="(item, i) in topics" :key="i" class="justify-center mb-6">
            <span class="font-weight-bold">{{ topics[i].title }}</span>
            <span v-html="topics[i].desc" class="description" />
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">
                      Weapon
                    </th>
                    <th class="text-left">
                      Name
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
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in weapons" :key="item.name">
                    <td>
                      <v-img :src="item.link" :max-width="item.heigth" class="img"></v-img>
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-center">{{ item.strength }}</td>
                    <td class="text-center">{{ item.defense }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card-text>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import arcane from 'Assets/docs/weapons/arcane.png';
import armory from 'Assets/docs/weapons/armory.png';
import barracks from 'Assets/docs/weapons/barracks.png';
import stables from 'Assets/docs/weapons/stables.png';

export default {
  name: 'WeaponsResearch',
  data() {
    return {
      topics: [
        {
          desc: `<br>The Combinator Pattern used in the Training center is back to create the new weapons.
            <br><br> Arimedes, the War Engineer, researcher and creator of weapons, owns the workshop Weapons Research where he creates armaments to be used in battles. Both Corps and Degens book his services in order to weaponize their army with imaginable success.
            <br><br> Arimedes' workshop is located at the War Preparation — ‘Weapons Research’ tab - <br><br> <a style="text-decoration: underline;"> https://app.apwars.farm/war-preparation </a> <br><br> Click on ‘Approve Research’ and ‘New Research’ related to the desired wUNITS.
            <br><br> A player can send different wUNITS at the same time to have weapons created — different wUNITS but only one wUNIT per race. (e.g. wWARRIOR and wGRUNT at the same time)
            <br><br> After 8 hours of hard work, weapons are ready to be claimed and will be sent straight to the Inventory — game items (Spendable).<br><br>`,
        },
      ],
      weapons: [
        {
          title: 'Barracks',
          link: barracks,
          heigth: '80',
          name: 'Simple Shield',
          strength: 0,
          defense: 15,
        },
        {
          title: 'Armory',
          link: armory,
          heigth: '80',
          name: 'Simple Bow',
          strength: 15,
          defense: 0,
        },
        {
          title: 'Arcane',
          link: arcane,
          heigth: '80',
          name: 'Simple Potion',
          strength: 20,
          defense: 5,
        },
        {
          title: 'Stables',
          link: stables,
          heigth: '80',
          name: 'Simple Spear',
          strength: 40,
          defense: 0,
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
