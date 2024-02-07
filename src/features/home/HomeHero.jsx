import { useRef } from 'react';
import { motion } from 'framer-motion';

function HomeHero() {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="hero-clip h-full w-full p-2 text-border-white text-border-size-8 md:h-1/2"
      ref={constraintsRef}
      initial={{ backgroundSize: '0% 100%' }}
      whileInView={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 2 }}
      style={{
        background: 'transparent',
        backgroundImage: 'linear-gradient(to right, white, white)',
        backgroundRepeat: 'no-repeat',
      }}
      viewport={{ once: true }}
    >
      <div className="hero-clip flex h-full w-full bg-primary">
        <motion.img
          src="./img/Hero.png"
          alt="Hero.png"
          className="h-64 w-64"
          drag
          dragConstraints={constraintsRef}
        />
        <div className="hidden items-center text-[3rem] font-extrabold text-white md:flex">
          <motion.div drag dragConstraints={constraintsRef}>
            <h1>Front End Developer</h1>
            <h1>Ilustrator</h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeHero;
