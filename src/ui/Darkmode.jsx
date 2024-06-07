import { useToggle } from '../context/ToggleContext';
import Icons from '../ui services/Icons';

export default function Darkmode() {
  const { toggleMode, onToggleMode } = useToggle();

  return (
    <div className="">
      <button onClick={onToggleMode} className="mt-3 sm:mt-1">
        {!toggleMode ? (
          <Icons
            type="moon"
            className=" sm:duration-600 text-2xl text-stone-800 hover:text-blue-500 sm:transition-all"
          />
        ) : (
          <Icons
            type="sun"
            className=" sm:duration-600 text-3xl text-yellow-300 sm:transition-all
          "
          />
        )}
      </button>
    </div>
  );
}
