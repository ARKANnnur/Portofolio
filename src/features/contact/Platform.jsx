import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

import { SiPixiv } from 'react-icons/si';
import { SiFiverr } from 'react-icons/si';
import { SiUpwork } from 'react-icons/si';

/* eslint-disable react/prop-types */
function Platform({ name }) {
  const basicStyle =
    'text-[2.5rem] text-border-size-8 group-hover:scale-150 group-hover:-translate-y-6 transition';

  return (
    <>
      {name === 'linkedIn' && (
        <FaLinkedin
          className={`${basicStyle} text-[#0178B5]  text-border-white`}
        />
      )}
      {name === 'facebook' && (
        <FaFacebookF
          className={`${basicStyle} text-[#0866FF] text-border-white`}
        />
      )}
      {name === 'instagram' && (
        <FaInstagram
          className={`${basicStyle} text-[#fff] text-border-white`}
        />
      )}
      {name === 'pinterest' && (
        <FaPinterest
          className={`${basicStyle} text-[#BD081C]  text-border-white`}
        />
      )}
      {name === 'pixiv' && (
        <SiPixiv
          className={`${basicStyle} text-[#0096fa]  text-border-white`}
        />
      )}
      {name === 'fiver' && (
        <SiFiverr
          className={`${basicStyle} text-[#1dbf73] text-border-white`}
        />
      )}
      {name === 'upWork' && (
        <SiUpwork
          className={`${basicStyle} text-[#6fda44] text-border-white`}
        />
      )}
    </>
  );
}

export default Platform;
