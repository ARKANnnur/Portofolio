/* eslint-disable react/prop-types */
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

function TechStackItem({ name }) {
  const basicStyle = 'text-[5rem] text-border-size-8';
  return (
    <>
      {name === 'Javascript' && (
        <IoLogoJavascript
          className={`${basicStyle} text-javascript text-border-javascript`}
        />
      )}
      {name === 'React Js' && (
        <FaReact className={`${basicStyle} text-reactjs text-border-reactjs`} />
      )}
      {name === 'Tailwind Css' && (
        <SiTailwindcss
          className={`${basicStyle} text-tailwindcss text-border-tailwindcss`}
        />
      )}
      {name === 'Supabase' && (
        <RiSupabaseFill
          className={`${basicStyle} text-supabase text-border-supabase`}
        />
      )}
      {name === 'Github' && (
        <FaGithub className={`${basicStyle} text-white text-border-white`} />
      )}
      {name === 'Figma' && (
        <FaFigma className={`${basicStyle} text-white text-border-white`} />
      )}
      {name === 'Bootstrap' && (
        <FaBootstrap className={`${basicStyle} text-white text-border-white`} />
      )}
    </>
  );
}

export default TechStackItem;
