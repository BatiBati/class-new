import Navbar from "../component/Navbar";
import About from "../component/About";
import Skill from "../component/skillComponent/Skill";
import Experience from "../component/experienceComponent/Experience";
import Work from "../component/workComponent/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Experience />
      <Work />
    </div>
  );
}
