import Landing from 'Views/Landing';
import Docs from 'Views/Docs/Docs';
import BlackMarket from 'Views/Docs/BlackMarket';
import GlobalEvents from 'Views/Docs/GlobalEvents';
import WgoldDEC from 'Views/Docs/WgoldDEC';
import Pumpamentals from 'Views/Docs/Pumpamentals';
import MultipleBurning from 'Views/Docs/MultipleBurning';
import General from 'Views/Docs/General';
import Wars from 'Views/Docs/Wars';
import MigratorCode from 'Views/Docs/MigratorCode';
import Audits from 'Views/Docs/Audits';
import EmergencyWithdrawals from 'Views/Docs/EmergencyWithdrawals';
import Intro from 'Views/Docs/Arcadia/Intro';
import Worlds from 'Views/Docs/Arcadia/Worlds';
import Clans from 'Views/Docs/Arcadia/Clans';
import Villages from 'Views/Docs/Arcadia/Villages';
import wLAND from 'Views/Docs/Arcadia/wLAND';
import wWISDOM from 'Views/Docs/Arcadia/wWISDOM';
import ReservationTickets from 'Views/Docs/Arcadia/ReservationTickets';
import RegionalBattles from 'Views/Docs/Arcadia/RegionalBattles';
import Weapons from 'Views/Docs/Arcadia/Weapons';
import Resources from 'Views/Docs/Arcadia/Resources';
import MaterialTransformations from 'Views/Docs/Arcadia/MaterialTransformations';
import MysticProtectors from 'Views/Docs/Arcadia/MysticProtectors';
import Emblems from 'Views/Docs/Arcadia/Emblems';
import Buildings from 'Views/Docs/Arcadia/Buildings';
import Heroes from 'Views/Docs/Arcadia/Heroes';
import Home from 'Views/Docs/Home';

// Imports to War tab
import CombatDynamics from 'Views/Docs/War/CombatDynamics';
import ForcesExtremeDarkness from 'Views/Docs/War/ForcesExtremeDarkness';
import CelebrationFestival from 'Views/Docs/War/CelebrationFestival';
import LegendaryRelics from 'Views/Docs/War/LegendaryRelics';
import Factions from 'Views/Docs/War/Factions';

import MagicalItemsSpendables from 'Views/Docs/War/MagicalItemsSpendables';
import WeaponsResearch from 'Views/Docs/War/WeaponsResearch';
import TrainingCenter from 'Views/Docs/War/TrainingCenter';

// Imports to Arcadia tab
import Worker from 'Views/Docs/Arcadia/Worker';
import Foundations from 'Views/Docs/Arcadia/Foundations';

import Guardians from 'Views/Docs/Guardians';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/home',
    name: 'Home',
    component: Landing,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'war/combat-dynamics',
        name: 'CombatDynamics',
        component: CombatDynamics,
      },
      {
        path: 'war/forces-of-extreme-darkness',
        name: 'Forces of Extreme Darkness',
        component: ForcesExtremeDarkness,
      },
      {
        path: 'war/celebration-festival',
        name: 'Celebration Festival',
        component: CelebrationFestival,
      },
      {
        path: 'war/legendary-relics-nfts',
        name: 'Legendary Relics (NFTs)',
        component: LegendaryRelics,
      },
      {
        path: 'war/magical-items-spendables',
        name: 'Magical Items Spendables',
        component: MagicalItemsSpendables,
      },
      {
        path: 'war/weapons-research',
        name: 'Weapons Research',
        component: WeaponsResearch,
      },
      {
        path: 'war/training-center',
        name: 'Training Center',
        component: TrainingCenter,
      },

      {
        path: 'factions',
        name: 'Factions, Races and Units',
        component: Factions,
      },
      {
        path: 'guardians',
        name: 'Guardians ',
        component: Guardians,
      },
      {
        path: 'black-market',
        name: 'Black Market',
        component: BlackMarket,
      },
      {
        path: 'the-global-events',
        name: 'GlobalEvents',
        component: GlobalEvents,
      },
      {
        path: 'deflationary-emission-curve',
        name: 'WgoldDEC',
        component: WgoldDEC,
      },
      {
        path: 'pumpamentals',
        name: 'Pumpamentals',
        component: Pumpamentals,
      },
      {
        path: 'burning-mechanims',
        name: 'MultipleBurning',
        component: MultipleBurning,
      },

      {
        path: 'faq/general',
        name: 'General',
        component: General,
      },
      {
        path: 'faq/wars',
        name: 'Wars',
        component: Wars,
      },

      {
        path: 'security/migrator-code',
        name: 'Migrator code',
        component: MigratorCode,
      },
      {
        path: 'security/audits',
        name: 'Audits',
        component: Audits,
      },
      {
        path: 'security/emergency-withdrawals',
        name: 'Emergency Withdrawals',
        component: EmergencyWithdrawals,
      },

      {
        path: 'arcadia/intro',
        name: 'Intro',
        component: Intro,
      },
      {
        path: 'arcadia/worlds',
        name: 'Worlds',
        component: Worlds,
      },
      {
        path: 'arcadia/clans',
        name: 'Clans',
        component: Clans,
      },
      {
        path: 'arcadia/villages',
        name: 'Villages',
        component: Villages,
      },
      {
        path: 'arcadia/wland',
        name: 'wLAND',
        component: wLAND,
      },
      {
        path: 'arcadia/wwisdom',
        name: 'wWISDOM',
        component: wWISDOM,
      },
      {
        path: 'arcadia/reservation-tickets',
        name: 'ReservationTickets',
        component: ReservationTickets,
      },
      {
        path: 'arcadia/worker',
        name: 'Worker',
        component: Worker,
      },
      {
        path: 'arcadia/foundations',
        name: 'Foundations',
        component: Foundations,
      },
      {
        path: 'arcadia/regional-battles',
        name: 'RegionalBattles',
        component: RegionalBattles,
      },
      {
        path: 'arcadia/weapons',
        name: 'Weapons',
        component: Weapons,
      },
      {
        path: 'arcadia/resources',
        name: 'Resources',
        component: Resources,
      },
      {
        path: 'arcadia/material-transformations',
        name: 'MaterialTransformations',
        component: MaterialTransformations,
      },
      {
        path: 'arcadia/mystic-protectors',
        name: 'MysticProtectors',
        component: MysticProtectors,
      },
      {
        path: 'arcadia/emblems',
        name: 'Emblems',
        component: Emblems,
      },
      {
        path: 'arcadia/buildings',
        name: 'Buildings',
        component: Buildings,
      },
      {
        path: 'arcadia/heroes',
        name: 'Heroes',
        component: Heroes,
      },
    ],
  },
];

export default routes;
