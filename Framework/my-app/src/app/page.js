import Navbar from "../component/Navbar";
import About from "../component/About";
import Skill from "../skillComponent/Skill";
import Experience from "../experienceComponent/Experience";
import Work from "../component/Work";

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
