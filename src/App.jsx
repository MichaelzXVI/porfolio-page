// Components
import { ToggleProvider } from './context/ToggleContext';
import Aboutme from './sections/Aboutme';
import Contactme from './sections/Contactme';
import Projects from './sections/Projects';
import Preface from './sections/Preface';
import Knowledge from './sections/Knowledge';
import Nav from './ui/Nav';
import Dividers from './ui services/Dividers';
import Footer from './sections/Footer';
// import ProjectsCarousal from './ui/ProjectsCarousal';

export default function App() {
  return (
    <ToggleProvider>
      <div className="absolute left-0 right-0 top-[5rem] sm:top-[0rem]">
        <Dividers
          className="h-[150px] w-full object-cover opacity-40 sm:h-[400px]"
          type="nav"
        />
      </div>
      <div className="font-globalfont ">
        <Nav />
        <div>
          <Preface />
        </div>
        <div className="pt-0 sm:pt-0">
          <Aboutme />
        </div>
        <div>
          <Knowledge />
        </div>
        <div className="">
          <Projects />
        </div>
        <div className="">
          <Contactme />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ToggleProvider>

    // <ProjectsCarousal />
  );
}

// b9c8dd
// 666ad5
