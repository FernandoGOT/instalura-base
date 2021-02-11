import React from 'react'

import Logo from '../../../theme/Logo'
import { MenuWrapper } from './styles/MenuWrapper'

const Menu = () => {

  const links = [
    {
      text: "Home",
      url: '/'
    },
    {
      text: "Perguntas frequentes",
      url: '/faq'
    },
    {
      text: "Sobre",
      url: '/sobre'
    }
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => (
          <li>
            <a href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu