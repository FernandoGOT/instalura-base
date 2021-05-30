import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../../theme/Logo'
import Button from '../Button'
import Text from '../../foundation/Text'
import MenuWrapper from './styles/MenuWrapper'

const Menu = ({ onRegisterClick }) => {
  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    }
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text href={link.url} variant="smallestException">
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onRegisterClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  onRegisterClick: PropTypes.func.isRequired
}

export default Menu
