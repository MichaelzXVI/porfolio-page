import Stickers from '../ui services/Stickers';
import Dividers from '../ui services/Dividers';
import Card from '../ui/Card';
import ProjectItems from '../ui/ProjectItems';
// import ProjectsCarousal from '../ui/ProjectsCarousal';

export default function Projects() {
  let index = 0;
  const projects = [
    {
      id: index++,
      img: 'projectImg',
      header: `Project #${index}`,
      description:
        '%Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro cum odio ad in officiis facere. Enim molestias, vitae est sapiente ipsa esse suscipit officiis nostrum illo id delectus. Omnis.%',
      technologies: '%technologies%',
    },
  ];

  return (
    <section id="projects" className="bg-projectsBg  font-aboutfont">
      <div className="">
        <Dividers className="h-full w-full" type="projects" />
      </div>
      <div className="relative bottom-[7.5rem]">
        <Stickers
          type="creation"
          className="relative left-48 top-16 z-[99] w-[8rem] sm:left-64"
        />
        <div className="bg-projectsBg ml-3 flex flex-col pt-2 sm:ml-10">
          <span className=" text-sm uppercase tracking-widest text-slate-800">
            my creations
          </span>
          <span className="font-logofont text-3xl font-bold uppercase tracking-widest text-slate-950 sm:text-4xl">
            Projects.
          </span>
        </div>
      </div>
      {/* <div className="z-9999 relative bottom-10 flex items-center justify-center pb-10 text-slate-100">
        <div className="z-9999 flex flex-col items-center justify-center gap-10 sm:flex sm:flex-row sm:flex-wrap sm:p-5">
          {projects.map((project) => (
            <Card type="projects" key={project}>
              <ProjectItems project={project} />
            </Card>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center pb-20 ">
        <span className="text-sm sm:px-5">Work In Progress...</span>
        <span className="text-4xl italic text-gray-400">TO BE ADDED SOON</span>
      </div>
    </section>
  );
}
