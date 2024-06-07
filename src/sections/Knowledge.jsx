import Stickers from '../ui services/Stickers';
import Dividers from '../ui services/Dividers';
import Icons from '../ui services/Icons';
import Card from '../ui/Card';
export default function Knowledge() {
  const technologies = [
    {
      sticker: 'html',
      title: 'HTML 5',
      style:
        'font-logofont bg-gradient-to-br from-orange-700 via-orange-500 to-yellow-900 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'css',
      title: 'CSS 3',
      style:
        'font-logofont bg-gradient-to-br from-blue-400 via-blue-600 to-yellow-700 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'js',
      title: 'JavaScript',
      style:
        'font-logofont bg-gradient-to-br from-yellow-600 via-yellow-800 to-orange-500 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'reacts',
      title: 'React.js',
      style:
        'font-logofont bg-gradient-to-br from-orange-800 via-blue-500 to-blue-500 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'reactquery',
      title: 'React Query',
      style:
        'font-logofont bg-gradient-to-br from-yellow-600 via-red-600 to-yellow-700 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'tailwind',
      title: 'Tailwind CSS',
      style:
        'font-logofont bg-gradient-to-br from-blue-700 via-blue-500 to-yellow-700 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'nextjs',
      title: 'Next.js',
      style:
        'font-logofont bg-gradient-to-br from-stone-500 via-gray-600 to-stone-900 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'nodejs',
      title: 'Node.js',
      style:
        'font-logofont bg-gradient-to-br from-green-900 via-green-500 to-green-700 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'reactrouter',
      title: 'React Router',
      style:
        'font-logofont bg-gradient-to-br from-slate-800 via-red-600 to-orange-400 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'mongo',
      title: 'MongoDB',
      style:
        'font-logofont bg-gradient-to-br from-green-500 via-green-600 to-orange-400 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
    {
      sticker: 'express',
      title: 'Express.js',
      style:
        'font-logofont bg-gradient-to-br from-orange-700 via-slate-900 to-yellow-700 bg-clip-text font-bold text-transparent sm:text-3xl',
    },
  ];

  return (
    <section className="bg-knowledgeBg">
      <div className="bg-aboutBg">
        <Dividers type="knowledge" className="w-full" />
      </div>
      <div className="ml-3 flex flex-col pb-14 pt-28 sm:ml-10">
        <span className=" text-sm uppercase tracking-widest text-orange-50">
          my knowledge of
        </span>
        <span className="font-logofont text-3xl font-bold uppercase tracking-widest text-orange-200 sm:text-4xl">
          Technologies.
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-20 ">
        {technologies.map((item) => (
          <Card type="knowledge">
            <Stickers
              className="w-20 object-contain sm:w-28"
              type={item.sticker}
            />
            <span className={item.style}>{item.title}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
