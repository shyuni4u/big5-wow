export const GameClassList = [
  {
    name: 'Death-Knight',
    image: 'Death-Knight',
    color: '#c41f3b',
    talents: [
      {
        name: 'blood',
        position: 'tanker',
        image: 'spell_deathknight_bloodpresence.jpg',
        desc: 'bloodDesc'
      },
      {
        name: 'frost-d',
        position: 'dealer',
        image: 'spell_deathknight_frostpresence.jpg',
        desc: 'frost-dDesc'
      },
      {
        name: 'unholy',
        position: 'dealer',
        image: 'spell_deathknight_unholypresence.jpg',
        desc: 'unholyDesc'
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
        position: 'dealer',
        image: 'ability_demonhunter_specdps.jpg',
        desc: 'havocDesc'
      },
      {
        name: 'vengeance',
        position: 'tanker',
        image: 'ability_demonhunter_spectank.jpg',
        desc: 'vengeanceDesc'
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
        position: 'tanker',
        image: 'ability_racial_bearform.jpg',
        desc: 'guardianDesc'
      },
      {
        name: 'feral',
        position: 'dealer',
        image: 'ability_druid_catform.jpg',
        desc: 'feralDesc'
      },
      {
        name: 'balance',
        position: 'dealer',
        image: 'spell_nature_starfall.jpg',
        desc: 'balanceDesc'
      },
      {
        name: 'restoration',
        position: 'healer',
        image: 'spell_nature_healingtouch.jpg',
        desc: 'restorationDesc'
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
        position: 'dealer',
        image: 'ability_hunter_bestialdiscipline.jpg',
        desc: 'beast-masteryDesc'
      },
      {
        name: 'survival',
        position: 'dealer',
        image: 'ability_hunter_camouflage.jpg',
        desc: 'marksmanshipDesc'
      },
      {
        name: 'marksmanship',
        position: 'dealer',
        image: 'ability_hunter_focusedaim.jpg',
        desc: 'survivalDesc'
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
        position: 'dealer',
        image: 'spell_holy_magicalsentry.jpg',
        desc: 'arcaneDesc'
      },
      {
        name: 'fire',
        position: 'dealer',
        image: 'spell_fire_firebolt02.jpg',
        desc: 'fireDesc'
      },
      {
        name: 'frost-m',
        position: 'dealer',
        image: 'spell_frost_frostbolt02.jpg',
        desc: 'frost-mDesc'
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
        position: 'tanker',
        image: 'spell_monk_brewmaster_spec.jpg',
        desc: 'brewmasterDesc'
      },
      {
        name: 'mistweaver',
        position: 'healer',
        image: 'spell_monk_mistweaver_spec.jpg',
        desc: 'mistweaverDesc'
      },
      {
        name: 'windwalker',
        position: 'dealer',
        image: 'spell_monk_windwalker_spec.jpg',
        desc: 'windwalkerDesc'
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
        position: 'tanker',
        image: 'ability_paladin_shieldofthetemplar.jpg',
        desc: 'protection-pDesc'
      },
      {
        name: 'holy-p',
        position: 'healer',
        image: 'spell_holy_holybolt.jpg',
        desc: 'holy-pDesc'
      },
      {
        name: 'retribution',
        position: 'dealer',
        image: 'spell_holy_auraoflight.jpg',
        desc: 'retributionDesc'
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
        position: 'healer',
        image: 'spell_holy_powerwordshield.jpg',
        desc: 'disciplineDesc'
      },
      {
        name: 'holy-pr',
        position: 'healer',
        image: 'spell_holy_guardianspirit.jpg',
        desc: 'holy-prDesc'
      },
      {
        name: 'shadow',
        position: 'dealer',
        image: 'spell_shadow_shadowwordpain.jpg',
        desc: 'shadowDesc'
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
        position: 'dealer',
        image: 'ability_rogue_waylay.jpg',
        desc: 'outlawDesc'
      },
      {
        name: 'subtlety',
        position: 'dealer',
        image: 'ability_stealth.jpg',
        desc: 'subtletyDesc'
      },
      {
        name: 'assassination',
        position: 'dealer',
        image: 'ability_rogue_deadlybrew.jpg',
        desc: 'assassinationDesc'
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
        position: 'dealer',
        image: 'spell_nature_lightning.jpg',
        desc: 'elementalDesc'
      },
      {
        name: 'enhancement',
        position: 'dealer',
        image: 'spell_shaman_improvedstormstrike.jpg',
        desc: 'enhancementDesc'
      },
      {
        name: 'restoration-s',
        position: 'healer',
        image: 'spell_nature_magicimmunity.jpg',
        desc: 'restoration-sDesc'
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
        position: 'dealer',
        image: 'spell_shadow_deathcoil.jpg',
        desc: 'afflictionDesc'
      },
      {
        name: 'demonology',
        position: 'dealer',
        image: 'spell_shadow_metamorphosis.jpg',
        desc: 'demonologyDesc'
      },
      {
        name: 'destruction',
        position: 'dealer',
        image: 'spell_shadow_rainoffire.jpg',
        desc: 'destructionDesc'
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
        position: 'tanker',
        image: 'ability_warrior_defensivestance.jpg',
        desc: 'protection-wDesc'
      },
      {
        name: 'arms',
        position: 'dealer',
        image: 'ability_warrior_savageblow.jpg',
        desc: 'armsDesc'
      },
      {
        name: 'fury',
        position: 'dealer',
        image: 'ability_warrior_innerrage.jpg',
        desc: 'furyDesc'
      }
    ]
  },
  {
    name: 'Evoker',
    image: 'Evoker',
    color: '#33937f',
    talents: [
      {
        name: 'devastation',
        position: 'dealer',
        image: 'ability_evoker_devastation.jpg',
        desc: 'devastationDesc'
      },
      {
        name: 'preservation',
        position: 'healer',
        image: 'ability_evoker_preservation.jpg',
        desc: 'preservationDesc'
      }
    ]
  }
]

export type GameClassInfo = typeof GameClassList
export type GameClassItemInfo = typeof GameClassList[0]
export type ParamGameClassInfo = {
  name: string
  image?: string
  color: string
  talent: string
  position: string
  isMain?: boolean
}

export default GameClassList
