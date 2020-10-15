import React from 'react';
import styled from 'styled-components';

// import ImgDeathKnight from '../../public/Death-Knight.jpg';

const StyledWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.media.tablet`
    padding: 15px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 15px;
  `}
`;
const StyledWowClassIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const classList = [
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
        name: 'frost',
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
        name: 'marksmanship',
        position: 'dealer'
      },
      {
        name: 'survival',
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
        name: 'frost',
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
        name: 'protection',
        position: 'tanker'
      },
      {
        name: 'holy',
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
        name: 'holy',
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
        name: 'assassination',
        position: 'dealer'
      },
      {
        name: 'outlaw',
        position: 'dealer'
      },
      {
        name: 'subtlety',
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
        name: 'restoration',
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
        name: 'protection',
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

export const Class: React.FC = () => {
  // const [processIndex, setProcessIndex] = useState<number>(0)
  // const [valueList, setValueList] = useState<number[]>([])
  // const MAX_SCORE = 5

  // useEffect(() => {
  //   setValueList(testList.map(() => -1))
  // }, [])

  return (
    <StyledWrapper style={{ width: '100%' }}>
      {classList.map((item, index) => (
        <div key={index} style={{ color: item.color }}>
          {item.name}
          {item.image && <StyledWowClassIcon src={`/${item.image}.jpg`} />}
          {item.talents &&
            item.talents.map((subItem, subIndex) => (
              <span key={subIndex}>{subItem.name}</span>
            ))}
        </div>
      ))}
    </StyledWrapper>
  );
};

export default Class;
