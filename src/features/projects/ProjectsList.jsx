import { motion } from 'framer-motion';
import { filePath } from '../../utils/filtering';
import ProjectBorder from './ProjectBorder';
import TechStackItem from '../tech-stacks/TechStackItem';
import animations from '../../utils/Animation';

function ProjectsList() {
  return (
    <div className="my-12 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
        <ProjectBorder
          bg={filePath('/img/projects/project', num)}
          custom={`bg-cover cursor-pointer ${
            num % 2 === 0 &&
            'xl:-translate-x-20 sm:translate-y-44 -translate-y-16'
          }`}
          rotate={num % 2 === 0 ? '-rotate-[7deg]' : 'rotate-[6deg]'}
          key={num}
          size={`h-72 w-72  ${num % 2 !== 0 && 'md:h-96 md:w-72'}`}
        >
          <motion.div
            className="p-5"
            initial="initialScale"
            whileInView="animateScale"
            variants={animations}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="box-content flex justify-center gap-2 rounded-lg bg-transparent bg-gradient-to-r from-slate-400 to-slate-50/95 py-1 drop-shadow-xl">
              <TechStackItem
                name="React Js"
                className="stroke-white stroke-2"
              />
              <TechStackItem
                name="Supabase"
                className="fill-transparent stroke-black stroke-2"
              />
              <TechStackItem
                name="Tailwind Css"
                className="fill-transparent stroke-black stroke-2"
              />
              <TechStackItem name="Github" />
            </div>
            <div className="text-white text-border-primary text-border-size-4">
              Name Project
            </div>
            <time className="text-center text-white">12/2/2022</time>
          </motion.div>
        </ProjectBorder>
      ))}
    </div>
  );
}

export default ProjectsList;
