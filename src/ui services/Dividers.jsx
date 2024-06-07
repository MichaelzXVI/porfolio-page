import navBg from './../assets/navBg.svg';
import hr from './../assets/hr.svg';
import hr2 from './../assets/hr2.svg';
import hr3 from './../assets/hr3.svg';
import hr4 from './../assets/hr4.svg';
import hr5 from './../assets/hr5.svg';

const divider = {
  nav: navBg,
  hr: hr,
  knowledge: hr2,
  projects: hr3,
  contactme: hr4,
  contactmeBottom: hr5,
};

export default function Stickers({ type, className }) {
  return <img className={className} src={divider[type]} alt={type} />;
}
