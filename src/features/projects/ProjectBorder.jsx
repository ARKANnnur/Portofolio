import { motion } from 'framer-motion';

/* eslint-disable react/prop-types */
function ProjectBorder({ children, custom, rotate, size, bg }) {
  return (
    <motion.div
      className={`${custom} ${size} ${rotate} text-left shadow-inner`}
      style={{ backgroundImage: bg }}
      initial={{ backgroundImage: 'none', border: '4px solid #0B0F17' }}
      whileInView={{ backgroundImage: bg, border: '4px solid #fff' }}
      transition={{ ease: 'easeIn' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default ProjectBorder;
