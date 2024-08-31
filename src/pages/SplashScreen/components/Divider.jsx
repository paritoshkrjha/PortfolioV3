import { motion } from 'framer-motion'
function Divider() {
  return (
    <motion.div
      initial={{ width: 2 }}
      animate={{ width: '100%' }}
      transition={{
        duration: 1,
        delay: 0.6,
        ease: 'easeInOut',

      }}
      className="h-[2px] w-[2px] mt-2 bg-white"
    />
  )
}

export default Divider
