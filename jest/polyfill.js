/* eslint-disable arrow-parens */

const requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.requestAnimationFrame = requestAnimationFrame;
