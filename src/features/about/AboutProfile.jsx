import { motion } from 'framer-motion';
import animations from '../../utils/Animation';

function AboutProfile() {
  return (
    <div className="md:y-12 relative w-full border-b border-white md:w-1/2 md:border-none">
      <div className="md:block absolute hidden right-0 h-full w-[90%] border-x border-white" />
      <div className="flex border-b border-white md:pl-20 px-5">
        <img src="/img/Hero.png" alt="hero.png" className="h-56 w-56" />
        <div className="contents-center items-center">
          <motion.button
            className="relative cursor-pointer border border-white p-2 outline outline-offset-2 outline-white hover:border-[3px] hover:outline-1 transition-all duration-500 hover:scale-125"
            initial="initialBasic"
            whileInView="animateBasic"
            variants={animations}
            viewport={{ once: true }}
          >
            Download CV
          </motion.button>
        </div>
      </div>
      <motion.div
        className="border-b border-white py-2 md:pl-20 px-5 text-lg font-semibold"
        initial="initialMinX"
        whileInView="animateX"
        variants={animations}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Dzikri Muhammad Arkannur
      </motion.div>
      <motion.div
        className="my-2 flex items-center md:pl-20 px-5 font-semibold lg:text-2xl"
        initial="initialMinX"
        whileInView="animateX"
        variants={animations}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Introducing myself, I am a web developer. Although I don&apos;t consider
        myself exceptionally smart, I am a hard worker who never gives up. I
        enjoy facing challenges as I see them as opportunities to grow and
        learn. At times, I feel anxious about the rapid pace of technological
        advancements, but my curiosity is immense, and I hope to contribute to
        technological development in the future.
      </motion.div>
    </div>
  );
}

export default AboutProfile;
