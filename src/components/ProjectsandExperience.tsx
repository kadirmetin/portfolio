import ExperienceCard from "./components/ExperienceCard";
import Slider from "./components/Slider";

const ProjectsandExperience = () => {
  return (
    <div className="bg-[#161513] pb-8 md:py-24">
      <div id="Projects" className="flex flex-col justify-center items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF8660] to-[#D5491D] font-poppinsEB text-4xl uppercase">
          Projects
        </p>
        <Slider />
      </div>
      <div
        id="Experience"
        className="flex flex-col mt-24 justify-center items-center"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#5BADFF] to-[#1373D1] font-poppinsEB text-4xl uppercase">
          Experience
        </p>
        <ExperienceCard
          img={"/images/mindbuddy.png"}
          title={"Software Developer at Mindbuddy"}
          date={"Nov 2023 - Feb 2024"}
          description={
            "At Mindbuddy, our commitment to leveraging cutting-edge technologies is exemplified in the development of our mobile application. Aligned with our company's strategic goals, I spearheaded the creation of a dynamic application that offers seamless multi-platform support through the use of React Native. With a strong focus on modernization and speed, I implemented Bun to create a robust and efficient backend service. This strategic integration not only improves the overall performance of our application, but also aligns with our vision of delivering a state-of-the-art user experience. The synthesis of React Native and Bun reflects our commitment to staying at the forefront of technological advancements and ensuring that our users benefit from a sophisticated and responsive mobile solution."
          }
        />
        <ExperienceCard
          img={"/images/p-solid.svg"}
          title={"Intern at PadmaApps"}
          date={"Sep 2023 - Oct 2023"}
          description={
            "My short-term software internship at PadmaApps enriched me by providing valuable experience in a dynamic startup environment. During this time, I honed my skills in mobile application development, with a particular focus on the React Native framework. The collaboration within the team and the need to learn quickly empowered me to take responsibility and adapt to an agile work environment. My internship experience at PadmaApps allowed me to gain a deeper understanding of software development processes and to rapidly expand my industry skills."
          }
        />
      </div>
    </div>
  );
};

export default ProjectsandExperience;
