import React from 'react'

import Logo from '../../../theme/Logo'
import Button from '../../commons/Button'
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
          <li key={link.url}>
            <a href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu