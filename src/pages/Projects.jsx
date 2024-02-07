import { motion } from 'framer-motion';
import ProjectsList from '../features/projects/ProjectsList';
import animations from '../utils/Animation';

function Projects() {
  return (
    <div
      className="contents-center h-full flex-col flex-wrap bg-secondary py-12 sm:flex-row"
      id="Projects"
    >
      <motion.h1
        className="container flex justify-center text-[5rem] font-extrabold text-white text-border-blue-950 text-border-size-8"
        initial="initialRotate"
        whileInView="animateRotate"
        variants={animations}
        transition={{
          duration: 0.5,
          staggerChildren: 0.1,
          staggerDirection: 1,
          when: 'beforeChildren',
        }}
        viewport={{ once: true }}
      >
        <motion.div   className="rotate-12">
          P
        </motion.div>
        <motion.div variants={animations} className="-rotate-12">
          r
        </motion.div>
        <motion.div variants={animations} className="rotate-12">
          o
        </motion.div>
        <motion.div variants={animations} className="-rotate-12">
          j
        </motion.div>
        <motion.div variants={animations} className="rotate-12">
          e
        </motion.div>
        <motion.div variants={animations} className="-rotate-12">
          c
        </motion.div>
        <motion.div variants={animations} className="rotate-12">
          t
        </motion.div>
        <motion.div variants={animations} className="-rotate-12">
          s
        </motion.div>
      </motion.h1>
      <ProjectsList />
    </div>
  );
}

export default Projects;
