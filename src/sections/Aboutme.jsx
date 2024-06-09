import Dividers from '../ui services/Dividers';
import profilePic from '../assets/profilePic.jpg';
import Card from '../ui/Card';
import Stickers from '../ui services/Stickers';

export default function Aboutme() {
  const cardItems = [
    {
      title: 'Web',
      sticker: 'frontend',
    },
    {
      title: 'Backend',
      sticker: 'backend',
    },
    {
      title: 'React',
      sticker: 'react',
    },
    {
      name: 'Michael Kadimov',
      data: 'a dedicated web developer based in Sderot, Israel. My background includes studying industrial engineering at Sapir College, which provided me with a strong foundation in analytical thinking and problem-solving. During the COVID-19 pandemic, I transitioned to web development, discovering passion and aptitude for the field. I specialize in JavaScript, with extensive experience in React, Node.js and MongoDB from side-projects. My skill set includes both front-end and back-end development, enabling me to build comprehensive and user-friendly web applications. I am committed to continuous learning and enjoy collaborating with fellow developers to create innovative solutions.',
    },
    {
      titleA: 'Experience',
      stickerA: 'experience',
      dataA: 'Personal Projects',
    },
    {
      titleA: 'Education',
      stickerA: 'education',
      dataA: 'TESI',
    },
  ];
  return (
    <section className="bg-aboutBg" id="about">
      <Dividers className="w-full" type="hr" />

      <div className="sm:flex sm:justify-evenly">
        <div className="flex flex-col items-start gap-2 px-4 pt-20 sm:flex sm:w-[40%] sm:items-start sm:gap-0">
          <span className=" text-sm uppercase tracking-widest text-gray-200">
            about me
          </span>
          <span className="font-logofont text-3xl font-bold uppercase tracking-widest text-gray-50">
            Introduction.
          </span>
          <div className="p-2 py-10 sm:h-full">
            <p className="font-aboutfont text-justify text-xl text-gray-950 sm:w-[100%]">
              I'm&nbsp;
              <span className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-300 bg-clip-text font-bold text-transparent">
                {cardItems.map((item) => item.name)}&nbsp;
              </span>
              {cardItems.map((item) => item.data)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 p-4 sm:mt-40 sm:flex sm:hidden sm:h-2 sm:flex-wrap sm:gap-4 sm:space-y-5 sm:p-0">
          {cardItems.map(
            (item) =>
              item.titleA && (
                <Card type="aboutme">
                  <Stickers className="w-8" type={item.stickerA} />
                  <span className="text-md font-logofont font-bold">
                    {item.titleA}
                  </span>
                  <span className="font-logofont text-center text-[0.8em]">
                    {item.dataA}
                  </span>
                </Card>
              ),
          )}
        </div>
        <div className="flex justify-evenly p-4 pt-0 sm:flex-wrap sm:space-x-5 sm:space-y-5 sm:p-7 ">
          <img
            src={profilePic}
            className="w-60 rounded-lg object-cover shadow-lg"
            alt=""
          />

          <div className="ml-2 flex flex-wrap items-center justify-center gap-4 sm:pb-3">
            <div className="hidden sm:flex sm:grow sm:flex-row sm:space-x-3">
              {cardItems.map(
                (item) =>
                  item.titleA && (
                    <Card type="aboutme">
                      <Stickers className="w-6" type={item.stickerA} />
                      <span className="text-md font-logofont font-bold">
                        {item.titleA}
                      </span>
                      <span className="font-logofont text-center text-[0.8em]">
                        {item.dataA}
                      </span>
                    </Card>
                  ),
              )}
            </div>
            {cardItems.map(
              (item) =>
                item.title && (
                  <Card type="aboutme">
                    <Stickers type={item.sticker} className="h-6" />
                    <span className="font-logofont bg-gradient-to-br from-blue-900 via-purple-950 to-blue-800 bg-clip-text text-lg font-bold text-transparent">
                      {item.title}
                    </span>
                    <span className="font-logofont bg-gradient-to-br from-blue-500 via-purple-600 to-blue-300 bg-clip-text font-bold text-transparent">
                      Developer
                    </span>
                  </Card>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
