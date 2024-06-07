import Stickers from '../ui services/Stickers';
import Background from '../ui/ProjectCardBackground';

export default function ProjectItems({ project }) {
  return (
    <div className="flex flex-col flex-wrap space-y-1 bg-slate-800 bg-opacity-10">
      <Background />
      <span className="">
        <Stickers
          type={project.img}
          className="w-full rounded-lg object-cover"
        />
      </span>
      <span className="pl-2 text-3xl font-semibold">{project.header}</span>
      <p className="px-3 py-6 text-justify text-xl">{project.description}</p>
      <div className="flex items-center justify-center gap-4 bg-transparent py-6 font-semibold">
        <button className="rounded-xl border border-slate-100  px-5 py-6">
          Live Demo
        </button>
        <button className="rounded-xl border border-slate-100 px-5 py-6">
          Github
        </button>
      </div>
      <span className="w-full bg-transparent px-2 py-2 text-xl">
        {project.technologies}
      </span>
    </div>
  );
}
