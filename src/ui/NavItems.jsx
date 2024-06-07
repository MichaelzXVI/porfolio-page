import { useToggle } from '../context/ToggleContext'; // ContextAPI
import LanguageMode from './LanguageMode'; // Button
import Darkmode from './Darkmode';
import Stickers from '../ui services/Stickers';
import Icons from '../ui services/Icons';

export default function NavItems() {
  const links = ['#about', '#projects', '#contact'];

  const { toggleResponsive, onResponsive, toggleActive, onActive } =
    useToggle();

  return (
    <div className="font-navfont z-[9999] mr-10 ">
      <button className="text-3xl sm:hidden" onClick={onResponsive}>
        {toggleResponsive ? (
          <Icons
            className="transition-transform duration-200"
            type="closeMenu"
          />
        ) : (
          <Stickers className="w-10" type="hamburger" />
        )}
      </button>
      <div className="transition-opacity duration-200">
        {toggleResponsive ? (
          <Stickers
            className="pointer-events-none absolute bottom-[2.3rem] right-6 w-20 sm:hidden"
            type="patience"
          />
        ) : (
          <Stickers
            className="right-30 pointer-events-none absolute bottom-12 w-20 sm:hidden"
            type="sit"
          />
        )}
      </div>
      {toggleResponsive ? (
        <ul className="top-18 absolute  right-2 z-[9999] mr-7 space-y-3 rounded-xl bg-slate-300 px-5  py-4 text-center text-2xl backdrop-blur-sm  transition-all duration-200 sm:static sm:flex sm:flex-row sm:items-center sm:gap-9 md:text-lg  ">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                onClick={() => onActive(index)}
                className={toggleActive === index ? `active` : ''}
              >
                {link.charAt(1).toLocaleUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}

          {/* // !! Future features !! */}
          {/* <div className="flex items-center justify-around">
            <li>
              <Darkmode />
            </li>
            <li className="mb-2">
              <LanguageMode />
            </li>
          </div> */}
          {/* // !! Future features !! 
          -*/}
        </ul>
      ) : (
        <ul className=" sm: absolute right-5 top-6 hidden gap-8 text-center text-[1.2em] font-semibold  text-stone-950 backdrop-blur-sm transition-all duration-200 sm:static sm:flex sm:flex-row sm:items-center">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                onClick={() => onActive(index)}
                className={
                  toggleActive === index
                    ? ' duration-400 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-300 bg-clip-text text-2xl text-transparent transition-all  '
                    : ''
                }
              >
                {link.charAt(1).toLocaleUpperCase() + link.slice(2)}
              </a>
            </li>
          ))}
          {/* // !! Future features !! */}
          {/* <li>
            <Darkmode />
          </li>
          <li>
            <LanguageMode />
          </li> */}
          {/* // !! Future features !! */}
        </ul>
      )}
    </div>
  );
}
