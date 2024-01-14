const skills = [
  { name: "JavaScript", img: "/javascript.svg" },
  { name: "TypeScript", img: "/typescript.svg" },
  { name: "NodeJS", img: "/nodejs.svg" },
  { name: "HTML", img: "/html.svg" },
  { name: "CSS", img: "/css.svg" },
  { name: "React", img: "/reactjs.svg" },
  { name: "React Native", img: "/reactnative.svg" },
  { name: "NextJS", img: "/nextjs.svg  " },
];

const Home = () => {
  return (
    <div
      id="Home"
      className="bg-[#161513] pt-0 md:pt-16 flex flex-col h-screen justify-center items-center"
    >
      <div className="color-change-animation rounded-full">
        <div className="rounded-full overflow-hidden">
          <img
            src="/memoji.png"
            alt="memoji"
            className="rounded-full object-cover w-40 h-40 md:w-64 md:h-64"
          />
        </div>
      </div>
      <div className=" justify-center">
        <h1 className="font-poppinsEB text-center text-white text-3xl md:text-6xl mt-10">
          I'm coding and <br />
          create content{" "}
          <span className="bg-[linear-gradient(to_right,_#4a90e2,_#8a2be2)] bg-clip-text text-transparent">
            about it!
          </span>
        </h1>
      </div>
      <div className="justify-center text-center mt-10">
        <p className="text-[#C5C5C5] font-poppinsL text-xs md:text-base tracking-wide">
          As a dedicated web developer, I am passionate about building <br />
          user-friendly, high-performance, secure applications. <br /> As a good
          team player, I am proficient in project management, design, and user
          experience. <br /> I also share my experiences on my blog Softforware.
        </p>
      </div>
      <div className="flex flex-row mt-12 gap-4">
        <button
          className="bg-white px-4 py-4 rounded-full font-poppinsSB text-base md:text-lg"
          onClick={() => {
            const element = document.getElementById("Contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get In Touch
        </button>
        <button
          className="bg-transparent border-2 border-white px-4 py-4 rounded-full font-poppinsSB text-base md:text-lg text-white"
          onClick={() => {
            window.open("./files/kadir_metin_cv_en.pdf", "_blank");
          }}
        >
          Download CV
        </button>
      </div>
      <div>
        <p className="text-[#C5C5C5] font-poppinsSB text-sm md:text-base mt-10 tracking-widest">
          EXPERIENCE WITH
        </p>
      </div>
      <div className="grid grid-cols-4 justify-center items-center mt-6 gap-7 md:gap-14 md:grid-cols-8">
        {skills.map((skill) => (
          <img
            src={skill.img}
            alt={skill.name}
            className="h-8 w-8 md:h-12 md:w-12"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
