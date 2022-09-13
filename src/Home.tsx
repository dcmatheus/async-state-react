import { Flex, Image, Text } from '@chakra-ui/react'

function Home () {
  return (
    <Flex direction="column" alignItems="center" paddingTop="32px">
      <Image
        src=""
        alt="Avatar"
        width="96px"
        height="96px"
        borderRadius="full"
      />
      <Text
        fontWeight="bold"
        fontSize="24px"
        marginTop="32px"
      >
        Matheus
      </Text>
    </Flex>
  )
}

export default Home
