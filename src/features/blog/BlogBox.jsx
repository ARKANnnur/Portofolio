import { motion } from 'framer-motion';
import { filteringNumber } from '../../utils/filtering';

/* eslint-disable react/prop-types */
function BlogBox({ img, num, children }) {
  const blogStyle = filteringNumber(num, [
    'blog-clip',
    'blog-clip-second lg:row-start-2',
    'blog-clip-end lg:row-start-3',
  ]);

  return (
    <motion.div
      className={`${blogStyle} contents-center my-5 h-64 w-60 text-white cursor-pointer`}
      initial={{ backgroundSize: '0% 100%' }}
      whileInView={{ backgroundSize: '100% 100%' }}
      transition={{
        duration: 2,
        when: 'afterChildren',
      }}
      style={{
        background: 'transparent',
        backgroundImage: 'linear-gradient(to left, white, white)',
        backgroundRepeat: 'no-repeat',
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`${blogStyle} flex h-60 w-56 items-center justify-end`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ backgroundImage: img }}
      >
        {children}
        <motion.div
          className="h-1/2 w-1/12 flex-none bg-white"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
}

export default BlogBox;
