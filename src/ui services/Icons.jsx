import { FaGithub } from 'react-icons/fa'; // github icon
import { FaLinkedin } from 'react-icons/fa6'; // linkedin icon
import { SlMouse } from 'react-icons/sl'; // pc mouse icon
import { FaRegMoon } from 'react-icons/fa'; // moon icon
import { BsSunFill } from 'react-icons/bs'; // sun icon
import { IoMdClose } from 'react-icons/io'; // close icon
import { SiRedux } from 'react-icons/si'; // redux icon
import { MdEmail } from 'react-icons/md'; // email icon

const icon = {
  github: <FaGithub />,
  linkedIn: <FaLinkedin />,
  mouse: <SlMouse />,
  moon: <FaRegMoon />,
  sun: <BsSunFill />,
  closeMenu: <IoMdClose />,
  redux: <SiRedux />,
  email: <MdEmail />,
};

export default function Icons({ type, className }) {
  return <button className={className}>{icon[type]}</button>;
}
