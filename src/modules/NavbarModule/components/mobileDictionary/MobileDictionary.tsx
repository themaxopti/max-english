import React from 'react'
import { Flex } from '../../../../components/Flex/Flex'
import { motion } from 'framer-motion'

export const MobileDictionary = () => {
  return (
    <>
      <Flex direction='column' rowGap='20px'>
        <div>Groups</div>
        <Flex direction='column' rowGap='13px'>
          <motion.div whileTap={{ scale: 1.1 }}>Group title</motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>Group title</motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>Group title</motion.div>
          <motion.div whileTap={{ scale: 1.1 }}>Group title</motion.div>
        </Flex>
      </Flex>
    </>
  )
}
