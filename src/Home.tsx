import { Flex, Image, Text } from '@chakra-ui/react'
import { useUser } from './services/users'

function Home () {
  const { data: user } = useUser('dcmatheus')
  return (
    <Flex direction="column" alignItems="center" paddingTop="32px">
      <Image
        src={ user?.avatar_url }
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
        { user?.name }
      </Text>
      <Text
        fontWeight= "500"
        marginTop= "8px"
      >
        {user?.bio}
      </Text>
    </Flex>
  )
}

export default Home
