export const wowClassList = [
  {
    name: 'Death-Knight',
    image: 'Death-Knight',
    color: '#c41f3b',
    talents: [
      {
        name: 'blood',
        position: 'tanker'
      },
      {
        name: 'frost-d',
        position: 'dealer'
      },
      {
        name: 'unholy',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Demon-Hunter',
    image: 'Demon-Hunter',
    color: '#a330c9',
    talents: [
      {
        name: 'havoc',
        position: 'tanker'
      },
      {
        name: 'vengeance',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Druid',
    image: 'Druid',
    color: '#ff7d0a',
    talents: [
      {
        name: 'guardian',
        position: 'tanker'
      },
      {
        name: 'feral',
        position: 'dealer'
      },
      {
        name: 'balance',
        position: 'dealer'
      },
      {
        name: 'restoration',
        position: 'healer'
      }
    ]
  },
  {
    name: 'Hunter',
    image: 'Hunter',
    color: '#abd473',
    talents: [
      {
        name: 'beast-mastery',
        position: 'dealer'
      },
      {
        name: 'survival',
        position: 'dealer'
      },
      {
        name: 'marksmanship',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Mage',
    image: 'Mage',
    color: '#69ccf0',
    talents: [
      {
        name: 'arcane',
        position: 'dealer'
      },
      {
        name: 'fire',
        position: 'dealer'
      },
      {
        name: 'frost-m',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Monk',
    image: 'Monk',
    color: '#00ff96',
    talents: [
      {
        name: 'brewmaster',
        position: 'tanker'
      },
      {
        name: 'mistweaver',
        position: 'healer'
      },
      {
        name: 'windwalker',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Paladin',
    image: 'Paladin',
    color: '#f58cba',
    talents: [
      {
        name: 'protection-p',
        position: 'tanker'
      },
      {
        name: 'holy-p',
        position: 'healer'
      },
      {
        name: 'retribution',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Priest',
    image: 'Priest',
    color: '#ffffff',
    talents: [
      {
        name: 'discipline',
        position: 'healer'
      },
      {
        name: 'holy-pr',
        position: 'healer'
      },
      {
        name: 'shadow',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Rogue',
    image: 'Rogue',
    color: '#fff569',
    talents: [
      {
        name: 'outlaw',
        position: 'dealer'
      },
      {
        name: 'subtlety',
        position: 'dealer'
      },
      {
        name: 'assassination',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Shaman',
    image: 'Shaman',
    color: '#0070de',
    talents: [
      {
        name: 'elemental',
        position: 'dealer'
      },
      {
        name: 'enhancement',
        position: 'dealer'
      },
      {
        name: 'restoration-s',
        position: 'healer'
      }
    ]
  },
  {
    name: 'Warlock',
    image: 'Warlock',
    color: '#9482c9',
    talents: [
      {
        name: 'affliction',
        position: 'dealer'
      },
      {
        name: 'demonology',
        position: 'dealer'
      },
      {
        name: 'destruction',
        position: 'dealer'
      }
    ]
  },
  {
    name: 'Warrior',
    image: 'Warrior',
    color: '#c79c6e',
    talents: [
      {
        name: 'protection-w',
        position: 'tanker'
      },
      {
        name: 'arms',
        position: 'dealer'
      },
      {
        name: 'fury',
        position: 'dealer'
      }
    ]
  }
];

export type WowClassInfo = typeof wowClassList;
export type ParamWowClassInfo = {
  name: string;
  image: string;
  color: string;
  talent: string;
  position: string;
  isMain: boolean;
};

export default wowClassList;
