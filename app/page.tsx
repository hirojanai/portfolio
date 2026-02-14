import NavBarFloating from "./components/navigation/NavBarFloating";
import AboutMe from "./components/sections/AboutMe";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />

      <NavBarFloating />
    </>
  );
}
