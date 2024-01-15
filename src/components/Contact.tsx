const Links = [
  {
    name: "github",
    link: "https://github.com/kadirmetin",
    icon: "/images/github.svg",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/kadirmetin/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "x",
    link: "https://twitter.com/_kadirmetin",
    icon: "/images/x.svg",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/_kadirmetin/",
    icon: "/images/instagram.svg",
  },
];

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-[#191919] flex justify-center items-center h-[50vh] px-5 md:px-0"
    >
      <div className="w-full md:w-1/2">
        <p className="font-poppinsB text-2xl text-white text-left">Contact</p>
        <p className="font-poppinsL text-sm text-[#C5C5C5] pt-8">
          As a dedicated web developer, I am passionate about building <br />
          user-friendly, high-performance, secure applications. <br /> As a good
          team player, I am proficient in project management, design, and user
          experience. <br /> I also share my experiences on my blog Softforware.
        </p>
        <div className="flex flex-row items-center mt-5">
          <img src="/images/mail.svg" alt="mail" className="w-5 h-5 mr-2" />
          <a href="mailto:hello@kadirmetin.dev">
            <p className="font-poppinsSB text-[#C5C5C5]">
              hello@kadirmetin.dev
            </p>
          </a>
        </div>
        <div className="flex flex-row items-center mt-10 gap-7">
          {Links.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer">
              <img
                src={link.icon}
                alt={link.name}
                className="w-7 h-7 cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
