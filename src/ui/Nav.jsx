import Logo from './Logo';
import NavItems from './NavItems';

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-300 bg-transparent pt-8 backdrop-blur-lg">
      <div className="flex items-center justify-around sm:flex-wrap ">
        <div className="sm:py-2">
          <Logo />
        </div>
        <div>
          <NavItems />
        </div>
      </div>
      <div className="m-0 mt-10 w-full px-0"></div>
    </nav>
  );
}
