'use client'
import { motion } from 'motion/react'
import { useState } from 'react'

const Loading = () => {
  const [isLoading, setLoading] = useState(true)

  if (!isLoading) return null  // remove from DOM after loading

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      onAnimationComplete={() => setLoading(false)}
    >
      <span className="text-gray-50 text-2xl tracking-widest font-serif">
        rishab.singh
      </span>
    </motion.div>
  )
}

export default Loading