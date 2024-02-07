import { motion } from 'framer-motion';
import animations from '../utils/Animation';

/* eslint-disable react/prop-types */
const style = {
  background: '#0C0C15',
  boxShadow:
    '0px 0px 8px 1px rgba(255, 255, 255, 0.50) inset, 0px 0px 0px 2px rgba(255, 255, 255, 0.50) inset, 0px 1px 4.5px 4px rgba(255, 255, 255, 0.10)',
  backdropFilter: 'blur(2px)',
  textAlign: 'justify',
};
function BasicBox({
  children,
  type = 'default',
  bg = style.background,
  shadow = style.boxShadow,
  custom,
  onClick = null,
}) {
  return (
    <>
      {type === 'animation' && (
        <motion.div
          style={{ background: bg, boxShadow: style.boxShadow }}
          className={custom}
          variants={animations}
          whileHover={{
            background: bg,
            boxShadow: shadow,
            transition: { ease: 'easeInOut' },
          }}
        >
          {children}
        </motion.div>
      )}
      {type === 'default' && (
        <motion.div
          style={{ background: bg, boxShadow: shadow }}
          className={custom}
        >
          {children}
        </motion.div>
      )}
      {type === 'focus' && (
        <div
          className="contents-center relative box-border"
          style={{ background: bg, boxShadow: shadow }}
          onClick={onClick}
        >
          <div className="absolute h-3/4 w-full scale-x-[1.04] bg-primary" />
          <div className="absolute h-full w-3/4 scale-y-[1.08] bg-primary" />
          <div className={`z-10 ${custom}`}>{children}</div>
        </div>
      )}
    </>
  );
}

export default BasicBox;
