import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import AboutProfile from '../features/about/AboutProfile';
import AboutSkills from '../features/about/AboutSkills';
import AboutExperience from '../features/about/AboutExperience';
import animations from '../utils/Animation';

function About() {
  const [isSwitch, setIsSwitch] = useState(true);

  return (
    <div
      className="flex flex-wrap border border-white bg-secondary text-white"
      id="About"
    >
      <AboutProfile />
      <div className="w-full md:w-1/2">
        <motion.h1
          className="py-5 text-center text-[2rem] font-bold"
          initial="initialBasic"
          whileInView="animateBasic"
          variants={animations}
          viewport={{ once: true }}
        >
          About
        </motion.h1>
        <motion.button
          className="ml-5 mt-2 cursor-pointer border-2 border-white p-2 outline outline-offset-2 outline-white"
          onClick={() => setIsSwitch((change) => !change)}
          initial="initialBasic"
          whileInView="animateBasic"
          whileTap={{
            rotateY: -350,
            transition: { duration: 0.5 },
          }}
          variants={animations}
          viewport={{ once: true }}
        >
          Switch Me
        </motion.button>
        <AnimatePresence>{isSwitch && <AboutSkills />}</AnimatePresence>
        <AnimatePresence>{!isSwitch && <AboutExperience />}</AnimatePresence>
      </div>
    </div>
  );
}

export default About;
