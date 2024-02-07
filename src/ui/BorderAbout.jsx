import { AnimatePresence, motion } from 'framer-motion';
import animations from '../utils/Animation';

/* eslint-disable react/prop-types */
function BorderAbout({ time, place, address, job, animationFrom = false }) {
  return (
    <motion.div
      className="mt-5 space-y-5"
      initial={animationFrom ? 'initialMinX' : 'initialX'}
      animate="animateX"
      variants={animations}
      exit={animationFrom ? 'initialMinX' : 'initialX'}
    >
      <div className="border border-white p-5">
        <AnimatePresence>
          <motion.div
            className="w-24 border border-white px-1 text-center"
            initial={animationFrom ? 'initialMinX' : 'initialX'}
            animate="animateX"
            variants={animations}
            exit={animationFrom ? 'initialMinX' : 'initialX'}
            transition={{ delay: 0.5 }}
          >
            <time>{time}</time>
          </motion.div>
          <motion.div
            className="mt-2 leading-4"
            initial={animationFrom ? 'initialMinX' : 'initialX'}
            animate="animateX"
            variants={animations}
            exit={animationFrom ? 'initialMinX' : 'initialX'}
            transition={{ delay: 0.8 }}
          >
            <h1 className="font-semibold">{place}</h1>
            <h2 className="text-slate-600">{address}</h2>
          </motion.div>
          <motion.div
            className=" mt-5 leading-tight text-slate-300"
            initial={animationFrom ? 'initialMinX' : 'initialX'}
            animate="animateX"
            variants={animations}
            exit={animationFrom ? 'initialMinX' : 'initialX'}
            transition={{ delay: 1 }}
          >
            <p>{job}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BorderAbout;
