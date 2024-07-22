export default function Card({ children, className, type, onClick }) {
  const projectsStyle =
    'h-full w-[20rem] rounded-2xl bg-projectCardBg px-2 py-3 shadow-xl  backdrop-blur-lg';
  const aboutmeStyle =
    'flex w-full flex-col items-center space-y-1 rounded-lg bg-gray-300 p-4 shadow-md';

  const knowledgeStyle =
    'card flex h-40 w-48 flex-col items-center justify-evenly space-y-1 rounded-lg bg-gray-300 bg-opacity-25 p-4 shadow-md  backdrop-blur-lg hover:bg-slate-600 hover:transition-colors hover:duration-300 sm:h-80 sm:w-[15rem] sm:justify-center sm:gap-5';

  const contactmeStyle =
    'flex w-full sm:w-80 py-8 z-[50] shadow-xl sm:px-20 justify-between items-center  tracking-wide px-10 sm:hover:cursor-pointer border border-slate-950 bg-gray-300 bg-opacity-25 rounded-lg ';

  if (type === 'aboutme') return <div className={aboutmeStyle}>{children}</div>;

  if (type === 'knowledge')
    return <div className={knowledgeStyle}>{children}</div>;
  if (type === 'projects')
    return <div className={projectsStyle}>{children}</div>;
  if (type === 'contactme')
    return (
      <div onClick={onClick} className={contactmeStyle}>
        {children}
      </div>
    );

  return <div className={className}>{children}</div>;
}
