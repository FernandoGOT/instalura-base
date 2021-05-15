import React from 'react'

import Box from '../src/components/layout/Box'
import Grid from '../src/components/layout/Grid'
import Menu from '../src/components/commons/Menu'
import Text from '../src/components/foundation/Text'
import Button from '../src/components/commons/Button'
import Footer from '../src/components/commons/Footer'
import Modal from '../src/components/commons/Modal'
import FormCadastro from '../src/components/patterns/FormCadastro'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      backgroundRepeat="no-repeat"
      justifyContent="space-between"
      backgroundPosition="bottom right"
      backgroundImage="url(/images/bubbles.svg)"
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {(propsDoModal) => <FormCadastro propsDoModal={propsDoModal} />}
      </Modal>
      <Menu onRegisterClick={() => setIsModalOpen(!isModalOpen)} />
      <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left'
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
              text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial'
              }}
              display="block"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  )
}
