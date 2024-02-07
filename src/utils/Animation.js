const animations = {
  initialBasic: { opacity: 0 },
  animateBasic: { opacity: 1, transition: { delay: 0.2 } },
  initialMinX: { opacity: 0, x: -100 },
  initialX: { opacity: 0, x: 100 },
  animateX: {
    opacity: 1,
    x: 0,
  },
  initialL: { opacity: 0, x: -20 },
  animateL: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  initialR: { opacity: 0, x: 20 },
  animateR: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  initialRotate: {
    opacity: 0,
    rotate: [12, -12, 12, -12],
  },
  animateRotate: {
    opacity: 1,
    rotate: 0,
  },
  initialScale: {
    opacity: 0,
    scale: 0,
  },
  animateScale: {
    opacity: 1,
    scale: 1,
  },
  close: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

export default animations;
