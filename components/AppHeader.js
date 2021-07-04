import { Heading, Text } from '@chakra-ui/react'

export const AppHeader = () => {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
      >
        Hiring: New Developer <br />
        <Text as={'span'} color={'blue.400'}>
          Could It Be You?
        </Text>
      </Heading>
      <Text color={'gray.500'}>
        This is some copy that probably says something to highlight the awesome
        opportunities that could come from someone submitting their resume. This
        should probably be about remote work and pay. Not ping-pong tables.
      </Text>
    </>
  )
}
