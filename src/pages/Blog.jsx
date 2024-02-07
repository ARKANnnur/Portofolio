import { motion } from 'framer-motion';
import BlogList from '../features/blog/BlogList';
import animations from '../utils/Animation';
function Blog() {
  return (
    <div
      className="grid grid-flow-dense grid-cols-1 place-items-center gap-4 bg-primary py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      id="Blog"
    >
      <BlogList />
      <motion.div
        className="contents-center col-start-1 row-start-1 text-[5rem] text-white sm:col-start-2 sm:row-start-1 sm:flex-col sm:text-[8rem] font-extrabold lg:col-start-4 lg:row-span-3"
        initial="initialX"
        whileInView="animateX"
        variants={animations}
        transition={{
          duration: 0.5,
          staggerChildren: 0.3,
          staggerDirection: 1,
          when: 'beforeChildren',
        }}
        viewport={{ once: true }}
      >
        <motion.div variants={animations}>B</motion.div>
        <motion.div variants={animations}>L</motion.div>
        <motion.div variants={animations}>O</motion.div>
        <motion.div variants={animations}>G</motion.div>
      </motion.div>
    </div>
  );
}

export default Blog;
