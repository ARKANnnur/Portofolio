/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Test } from './Test';

const animate = {
  fill: { scaleX: 1, originX: 0, variants: { duration: 2 } },
  exit: { y: -100, opacity: 0, backgroundColor: 'blue' },
};

const a = [1, 2, 3, 45, 45, 4, 5, 4];

function PlayGroundAnimations() {
  const [test, setTest] = useState(null);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primary">
      <h1 className="text-2xl font-bold text-white">
        {test ? 'true' : 'false'}
      </h1>
      <div className="flex flex-wrap">
        <button
          className="font-xl m-2 border border-white bg-secondary px-5 text-white"
          onClick={() => setTest((e) => !e)}
        >
          Test
        </button>
      </div>
      <AnimatePresence initial={false}>
        {test && <Test animates={animate} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!test && (
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{type: ""}}
            style={{ fontSize: '4rem', color: 'white' }}
          >
            <span>
              <div>
                <span>HI</span>
              </div>
            </span>
            <span>
              <div>
                {a.map((a) => (
                  <Uhuy key={a} caca={a} />
                ))}
              </div>
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Uhuy({ caca }) {
  return <span>{caca}</span>
}

export default PlayGroundAnimations;
