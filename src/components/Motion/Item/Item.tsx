import React from 'react'
import { motion } from 'framer-motion'

interface ItemProps {
  children: any
  isSelected: boolean
}

export const Item: React.FC<ItemProps> = ({ children, isSelected }) => {
  return <motion.div>{children}</motion.div>
}
