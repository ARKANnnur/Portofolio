/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BasicBox from '../../ui/BasicBox';
import { useState } from 'react';

function HomeBox() {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <motion.div
        className="items-center text-2xl font-extrabold text-white underline md:hidden"
        whileInView={{ opacity: [0, 100, 0, 100] }}
        viewport={{ once: true }}
      >
        <h1>Front End Developer</h1>
        <h1>Ilustrator</h1>
      </motion.div>
      <div className="flex h-full w-full flex-col space-y-2 md:h-1/2 md:flex-row md:space-x-2 md:space-y-0">
        <motion.div
          className="contents-center h-full w-full rotate-3 text-white md:w-1/2 lg:z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 100, 0, 100] }}
          viewport={{ once: true }}
        >
          <BasicBox custom="p-5 text-2xl text-center">
            create interactive website displays with unique animations and
            designs
          </BasicBox>
        </motion.div>
        <Boxvbar isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </>
  );
}

function Boxvbar({ isActive, setIsActive }) {
  const navItems = ['Projects', 'Blog', 'TechStacks', 'Contact'];

  return (
    <motion.nav
      className="grid h-[10rem] w-full -rotate-3 grid-cols-2 gap-2 text-xl font-bold text-white sm:text-2xl md:h-full md:w-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {navItems.map((item) => (
        <BasicBox
          key={item}
          type="focus"
          custom={`${
            isActive === `#${item}` && 'text-border-size-8 text-border-white'
          } hover:text-border-size-8 hover:text-border-white`}
          onClick={() => setIsActive(`#${item}`)}
        >
          <NavLink to={`#${item}`}>{item}</NavLink>
        </BasicBox>
      ))}
    </motion.nav>
  );
}

export default HomeBox;
