import Icons from '../ui services/Icons';
import Stickers from '../ui services/Stickers';

export default function Preface() {
  return (
    <section className=" mt-40 space-y-8 sm:mt-60" id="/">
      <div className="flex flex-wrap items-center justify-center">
        <span className="font-shalomfont mt-10 h-5 text-7xl text-blue-700 drop-shadow-2xl">
          Shalom
        </span>
        <Stickers className="w-60" type="welcome" />
      </div>
      <div className="flex flex-col items-center text-xl">
        <p className="font-semibold text-gray-400">I'm</p>
        <span className="font-logofont whitespace-nowrap bg-gradient-to-br from-blue-500 via-purple-600 to-blue-300 bg-clip-text py-4 text-[2.1em] text-transparent">
          Michael Kadimov
        </span>

        <span>MERN Stack Web Developer</span>
      </div>
      <div className="flex items-center justify-center gap-20 py-4 text-[3rem]">
        <button>
          <Stickers className=" w-14" type="CV" />
        </button>
        <Icons type="linkedIn" />
        <Icons type="github" />
      </div>
      <div className="flex items-center justify-center gap-3 py-2">
        <Icons className="text-2xl" type="mouse" />
        <p className="text-[1.1em]">Scroll down to get to know me better</p>
      </div>
    </section>
  );
}
