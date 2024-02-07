import { motion } from 'framer-motion';
import animations from '../../utils/Animation';

function AboutSkills() {
  return (
    <>
      <GeneralItem />
      <motion.div className="flex flex-wrap" variants={animations} exit="close">
        <div className="w-full border border-white sm:w-1/2">
          <Skills />
        </div>
        <div className="w-full border border-white sm:w-1/2">
          <Hobby />
        </div>
      </motion.div>
    </>
  );
}

function GeneralItem() {
  return (
    <motion.div
      className="mt-5 grid grid-cols-1 sm:grid-cols-2"
      variants={animations}
      exit="close"
    >
      <motion.h2
        className="border border-white p-2 font-semibold"
        initial="initialMinX"
        whileInView="animateX"
        viewport={{ once: true }}
        variants={animations}
      >
        Age --- 18
      </motion.h2>
      <motion.h2
        className="border border-white p-2 font-semibold"
        initial="initialMinX"
        whileInView="animateX"
        viewport={{ once: true }}
        variants={animations}
      >
        Freelance --- Available
      </motion.h2>
      <motion.h2
        className="border border-white p-2 font-semibold"
        initial="initialX"
        whileInView="animateX"
        viewport={{ once: true }}
        variants={animations}
      >
        Residance --- Bogor
      </motion.h2>
      <motion.h2
        className="border border-white p-2 font-semibold"
        initial="initialX"
        whileInView="animateX"
        viewport={{ once: true }}
        variants={animations}
      >
        Adress --- Indonesia, Bogor
      </motion.h2>
    </motion.div>
  );
}

function Skills() {
  return (
    <>
      <motion.h2
        className="pt-5 text-center text-2xl font-semibold underline underline-offset-4"
        initial="initialBasic"
        whileInView="animateBasic"
        viewport={{ once: true }}
        variants={animations}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 gap-5 pt-20">
        <motion.p
          className="col-start-2 row-start-1 border border-white p-2"
          initial="initialR"
          whileInView="animateR"
          viewport={{ once: true }}
          variants={animations}
        >
          Team Work
        </motion.p>
        <motion.p
          className="col-start-1 row-start-2 border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          Responsive Design
        </motion.p>
        <motion.p
          className="col-start-2 row-start-3 border border-white p-2"
          initial="initialR"
          whileInView="animateR"
          viewport={{ once: true }}
          variants={animations}
        >
          Animation
        </motion.p>
      </div>
      <div className="w-full pt-12">
        <motion.p
          className="border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          Language
        </motion.p>
        <motion.p
          className="border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          English
        </motion.p>
        <motion.p
          className="border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          Indonesia
        </motion.p>
      </div>
    </>
  );
}

function Hobby() {
  return (
    <>
      <motion.h2
        className="pt-5 text-center text-2xl font-semibold underline underline-offset-4"
        initial="initialBasic"
        whileInView="animateBasic"
        viewport={{ once: true }}
        variants={animations}
      >
        Hobby
      </motion.h2>
      <div className="grid grid-cols-2 gap-5 pt-20">
        <motion.p
          className="col-start-1 row-start-1 border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          Drawing
        </motion.p>
        <motion.p
          className="col-start-2 row-start-2 border border-white p-2"
          initial="initialR"
          whileInView="animateR"
          viewport={{ once: true }}
          variants={animations}
        >
          Read Comic
        </motion.p>
        <motion.p
          className="col-start-1 row-start-3 border border-white p-2"
          initial="initialL"
          whileInView="animateL"
          viewport={{ once: true }}
          variants={animations}
        >
          Learning World History
        </motion.p>
        <motion.p
          className="col-start-2 row-start-4 border border-white p-2"
          initial="initialR"
          whileInView="animateR"
          viewport={{ once: true }}
          variants={animations}
        >
          Watch Movie
        </motion.p>
      </div>
      <div className="w-full pt-5 text-center">
        <motion.p
          className="p-5 font-semibold"
          initial="initialBasic"
          whileInView="animateBasic"
          viewport={{ once: true }}
          variants={animations}
        >
          “Trust the process, if you are not talented, work harder until you
          become talented”
        </motion.p>
      </div>
    </>
  );
}

export default AboutSkills;
