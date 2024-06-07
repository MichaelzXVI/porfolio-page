import Stickers from '../ui services/Stickers';

export default function Footer() {
  return (
    <section className="bg-contactmeBg  overflow-hidden pt-[14rem]">
      <div className="font-logofont relative bottom-[9.2rem] z-[3]  flex flex-col items-center justify-center ">
        <div className="static inset-0 bottom-0 top-2 z-[-1]">
          <Stickers
            type="palm"
            className="absolute right-0 hidden h-[10rem] object-contain sm:bottom-[-160px] sm:right-[6rem]
        sm:z-[-1] sm:block sm:h-[20rem] sm:w-full"
          />
        </div>
        <span className="whitespace-nowrap text-xl font-bold drop-shadow-lg sm:text-2xl">
          Thank you for reviewing my porfolio
        </span>
        <span className="text-lg font-semibold drop-shadow-lg sm:text-xl">
          Hope to hear from you soon!
        </span>
        <span className="mt-2 text-[0.8em] text-slate-100  drop-shadow-lg ">
          &copy; {new Date().getFullYear().toString()} Michael Kadimov
        </span>
      </div>

      <div className="relative z-[5] h-[1.2rem] bg-[#39ac4b]">
        <div className="absolute inset-0  flex items-end justify-center shadow-xl">
          <div className="static inset-0 sm:right-[5rem]">
            <Stickers
              className="
               absolute
               bottom-0
               right-5 z-[1] flex w-[8.9rem] justify-center sm:right-9 sm:w-[13rem]"
              type="manchester"
            />

            <Stickers
              type="grassImg"
              className="absolute bottom-[18px] right-0 h-[3rem]  w-auto object-cover
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[18px] hidden h-[3rem] w-auto object-cover  sm:left-[40rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[15px] hidden h-[3rem] w-auto object-cover  sm:left-[35rem] sm:block
            sm:h-[3rem]"
            />
            <Stickers
              type="grassImg3"
              className="absolute bottom-[15px] hidden h-[3rem] w-auto object-cover  sm:right-[8rem] sm:block
            sm:h-[6rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[0px] hidden h-[3rem] w-auto object-cover  sm:right-[20rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[0px] hidden h-[3rem] w-auto object-cover  sm:right-[35rem] sm:block
            sm:h-[5rem]"
            />

            <Stickers
              type="grassImg"
              className="absolute bottom-[18px] hidden h-[3rem] w-auto  object-cover sm:block
            sm:h-[5rem]"
            />

            <Stickers
              type="grassImg"
              className="absolute bottom-[18px] right-8 z-[-1] h-[3rem] w-auto  object-cover sm:h-[6rem]
            "
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-10px] right-20 z-[1] h-[2.7rem] w-auto object-cover sm:h-[4rem]
            "
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-0px] right-[9rem] z-[-1] h-[4rem] w-auto object-cover sm:h-[8rem]
            "
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-10px] right-0 z-[1]  h-[2.5rem] w-auto
              object-cover
            sm:bottom-[-40px] sm:h-[7rem]"
            />
          </div>

          <div className="static inset-0 left-1 z-[1] sm:left-[14rem]">
            <Stickers
              type="grassImg"
              className="absolute bottom-0 left-0 z-[-1] h-[3rem] w-auto object-cover"
            />
            <Stickers
              type="gateImg"
              className=" absolute bottom-[-11px] left-0 h-[5rem] w-auto object-contain sm:h-[6rem]"
            />
            <Stickers
              type="grassImg2"
              className="absolute bottom-[-29px] hidden h-[3rem] w-auto object-cover  sm:left-[5rem] sm:block
            sm:h-[4rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-10px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[15rem] sm:block
            sm:h-[3rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-20px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[16rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg3"
              className="absolute bottom-[-29px] z-[1] hidden h-[3rem] w-auto object-cover  sm:left-[15.7rem] sm:block
            sm:h-[3.2rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-20px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[25rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg3"
              className="absolute bottom-[-29px] z-[1] hidden h-[3rem] w-auto object-cover  sm:left-[40rem] sm:block
            sm:h-[3.2rem]"
            />
            <Stickers
              type="grassImg2"
              className="absolute bottom-[-32px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[54rem] sm:block
            sm:h-[6rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[-20px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[25rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg3"
              className="absolute bottom-[-29px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[30rem] sm:block
            sm:h-[3.2rem]"
            />
            <Stickers
              type="grassImg3"
              className="absolute bottom-[-29px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[70rem] sm:block
            sm:h-[5rem]"
            />
            <Stickers
              type="grassImg"
              className="absolute bottom-[10px] z-[-1] hidden h-[3rem] w-auto object-cover  sm:left-[12rem] sm:block
            sm:h-[2rem]"
            />
            <Stickers
              type="grassImg2"
              className="absolute bottom-[-29px] hidden h-[3rem] w-auto object-cover  sm:left-[-7px] sm:block
            sm:h-[3rem]"
            />
            <Stickers type="ball" className="ball" />
          </div>
        </div>
      </div>
      <div
        className="z-[-1] flex h-[1.8rem]
        w-full items-center justify-start bg-[#836539] bg-gradient-to-b from-[#36bd4a] to-[#836539] "
      ></div>
    </section>
  );
}
