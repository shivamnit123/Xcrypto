import { VStack } from '@chakra-ui/react'
import React from 'react'
import { FadeLoader } from 'react-spinners'
const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"} bgSize={20}> <FadeLoader color="#36d7b7" /></VStack>
  )
}

export default Loader