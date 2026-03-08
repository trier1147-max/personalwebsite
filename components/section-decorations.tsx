'use client'

import { motion } from 'framer-motion'

/** 区块两侧的轻微装饰，填充宽屏两侧留白 */
export function SectionDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* 左侧边缘 */}
      <motion.div
        className="absolute top-[15%] left-[2%] text-xl opacity-20"
        animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-[50%] left-[1%] text-lg opacity-15"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] left-[3%] w-10 h-10 rounded-full bg-amber-200/15"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* 右侧边缘 */}
      <motion.div
        className="absolute top-[25%] right-[2%] text-xl opacity-20"
        animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-[60%] right-[1%] text-lg opacity-15"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] right-[2%] w-8 h-8 rounded-2xl bg-blue-200/15 rotate-12"
        animate={{ rotate: [12, 24, 12], y: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
