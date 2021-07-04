import Head from 'next/head'
import { Box, Container, Stack } from '@chakra-ui/react'
import { ResumeModal } from '../components/ResumeModal'
import { AppHeader } from '../components/AppHeader'

export default function HomePage() {
  return (
    <>
      <AppContainer>
        <AppHeader />
        <ResumeModal />
      </AppContainer>
    </>
  )
}

const AppContainer = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          {children}
        </Stack>
      </Container>
    </>
  )
}
