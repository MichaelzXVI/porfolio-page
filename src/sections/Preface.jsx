import Icons from '../ui services/Icons';
import Stickers from '../ui services/Stickers';
import CV from '../assets/CV.pdf';

export default function Preface() {
  return (
    <section className=" mt-[7rem] space-y-8 sm:mt-60" id="/">
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

        <span>Full-Stack Web Developer</span>
      </div>
      <div className="flex items-center justify-center gap-20 text-[3rem] sm:py-4">
        <a href={CV} target="_blank">
          <Stickers className="w-14" type="CV" />
        </a>

        <a
          href="https://www.linkedin.com/in/michael-kadimov-455907271/"
          target="_blank"
        >
          <Icons type="linkedIn" />
        </a>
        <a href="https://github.com/MichaelzXVI" target="_blank">
          <Icons type="github" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-3 pb-10">
        <Icons className="text-2xl" type="mouse" />
        <p className="text-[1.1em]">Scroll down to get to know me better</p>
      </div>
    </section>
  );
}
