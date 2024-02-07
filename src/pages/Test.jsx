/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export function Test({ animates }) {
  return (
    <motion.div
      className="grid h-64 w-64 place-content-center bg-white"
      initial={{ scaleX: 0 }}
      animate="fill"
      variants={animates}
      exit="exit"
    >
      <p className="m-16 overflow-y-scroll">
        Testing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        corporis a harum quo ex expedita doloribus labore exercitationem?
        Repellendus, saepe itaque tempore rerum accusamus est! Iusto laborum
        illum possimus nemo?
      </p>
    </motion.div>
  );
}
