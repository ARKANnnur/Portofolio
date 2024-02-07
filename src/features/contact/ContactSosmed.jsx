import { motion } from 'framer-motion';
import BasicBox from '../../ui/BasicBox';
import ContactForm from './ContactForm';
import animations from '../../utils/Animation';
import Platform from './Platform';

const socialMedia = [
  { name: 'linkedIn' },
  { name: 'facebook' },
  { name: 'instagram' },
  { name: 'pinterest' },
  { name: 'pixiv' },
];

const busines = [{ name: 'fiver' }, { name: 'upWork' }];

function ContactSosmed() {
  return (
    <div className="mt-12 w-full px-5 md:w-1/2">
      <div className="social-media text-lg font-semibold">
        <h2 className="tracking-wide text-border-white text-border-size-4">
          Social Media
        </h2>
        <motion.div
          className="mt-5 flex flex-wrap gap-5"
          initial="initialMinX"
          whileInView="animateX"
          variants={animations}
          transition={{
            staggerChildren: 0.5,
            staggerDirection: 1,
            when: 'beforeChildren',
          }}
          viewport={{ once: true }}
        >
          {socialMedia.map((data) => (
            <BasicBox
              custom="w-20 h-20 contents-center flex-col group hover:shadow-lg hover:shadow-white"
              key={data.name}
              type="animation"
              shadow='0px 0px 16px 2px rgba(255,255,255,0.29)'
            >
              <Platform name={data.name} />
            </BasicBox>
          ))}
        </motion.div>
        <h2 className="mt-5 text-border-white text-border-size-4">Busines</h2>
        <motion.div
          className="mt-5 flex flex-wrap gap-5"
          initial="initialMinX"
          whileInView="animateX"
          variants={animations}
          transition={{
            staggerChildren: 0.1,
            staggerDirection: 1,
            when: 'beforeChildren',
          }}
          viewport={{ once: true }}
        >
          {busines.map((data) => (
            <BasicBox
              custom="w-20 h-20 contents-center flex-col group hover:shadow-lg hover:shadow-white"
              key={data.name}
              type="animation"
              shadow='inset 0px 0px 8px 1px rgba(255,255,255,0.29)'
            >
              <Platform name={data.name} />
            </BasicBox>
          ))}
        </motion.div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSosmed;
