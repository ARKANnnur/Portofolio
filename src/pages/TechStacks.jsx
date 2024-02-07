import { motion } from 'framer-motion';
import TechStackList from '../features/tech-stacks/TechStackList';
import animations from '../utils/Animation';

function TechStacks() {
  return (
    <div className="bg-primary" id="TechStacks">
      <motion.h1
        className="py-5 text-center text-[4rem] font-extrabold text-white md:text-[5rem]"
        initial="initialBasic"
        whileInView="animateBasic"
        variants={animations}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-5 py-24 lg:p-24"
        initial="initialMinX"
        whileInView="animateX"
        variants={animations}
        transition={{
          staggerChildren: 0.2,
          staggerDirection: 1,
          when: 'beforeChildren',
        }}
        viewport={{ once: true }}
      >
        <TechStackList />
      </motion.div>
    </div>
  );
}

export default TechStacks;
