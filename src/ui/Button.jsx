/* eslint-disable react/prop-types */
import { RiArrowRightDoubleFill } from 'react-icons/ri';

function Button({ children, custom }) {
  return (
    <button className={`flex items-center border-b border-white font-semibold transition-all hover:translate-x-4 ${custom}`}>
      {children} <RiArrowRightDoubleFill />
    </button>
  );
}

export default Button;
