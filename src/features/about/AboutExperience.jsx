import { AnimatePresence, motion } from 'framer-motion';
import BorderAbout from '../../ui/BorderAbout';

const fakeExperience = [
  {
    time: '2019-2023',
    place: 'Freelance',
    address: 'Indonesia, Bogor',
    job: 'help with student assignments or help others with their projects',
  },
  {
    time: '2022',
    place: 'Pelindo',
    address: 'Indonesia, Bogor',
    job: 'internship and tasked with archiving data, preparing meeting rooms in audio settings, wifi routers ',
  },
];
const fakeEducation = [
  {
    time: '2023',
    place: 'Udemy -Jhonas schedmant',
    address: 'Udemy',
    job: 'Learn  React JS to be expert',
  },
  {
    time: '2019-2023',
    place: 'Amaliah HighSchool',
    address: 'Indonesia, Bogor',
    job: 'Learn the basics/fundamentals of programming.',
  },
];

function AboutExperience() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="py-10">
        <AnimatePresence>
          <motion.h2
            className="text-center text-2xl font-semibold underline"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -150 }}
            key="experience"
          >
            Experience
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          {fakeExperience.map((data, i) => (
            <BorderAbout
              key={i}
              time={data.time}
              place={data.place}
              address={data.address}
              job={data.job}
              animationFrom={true}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="py-10">
        <AnimatePresence>
          <motion.h2
            className="text-center text-2xl font-semibold underline"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -150 }}
            key="Education"
          >
            Education
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          {fakeEducation.map((data, i) => (
            <BorderAbout
              key={i}
              time={data.time}
              place={data.place}
              address={data.address}
              job={data.job}
              animationFrom={false}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutExperience;
