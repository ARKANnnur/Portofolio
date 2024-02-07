import Home from '../pages/Home';
import About from '../pages/About';
import TechStacks from '../pages/TechStacks';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

function MainLayout() {
  return (
    <div>
      <Home />
      <About />
      <TechStacks />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default MainLayout;
