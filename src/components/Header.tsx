import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (section: string) => () => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center py-2 bg-[#222222] h-15 md:h-20">
      <div className="flex w-full flex-wrap items-center justify-between px-8 md:justify-around md:px-0">
        <img src="/images/logo.png" alt="logo" height={48} width={48} />

        <div className="items-center hidden md:flex flex-row gap-10">
          <p
            onClick={scrollToSection("Home")}
            className="font-jakarta text-white text-base text-center tracking-wide cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={scrollToSection("Projects")}
            className="font-jakarta text-white text-base text-center tracking-wide cursor-pointer"
          >
            Projects
          </p>
          <p
            onClick={scrollToSection("Experience")}
            className="font-jakarta text-white text-base text-center tracking-wide cursor-pointer"
          >
            Experience
          </p>
          <p
            onClick={scrollToSection("Contact")}
            className="font-jakarta text-white text-base text-center tracking-wide cursor-pointer"
          >
            Contact
          </p>
        </div>

        <div className="items-center flex flex-col md:hidden">
          <p
            className="text-center text-4xl text-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ☰
          </p>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full h-full fixed top-0 left-0 bg-black bg-opacity-90 z-50">
          <div className="flex flex-col items-center justify-center h-full gap-14">
            <p
              className="text-4xl text-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              X
            </p>
            <p
              onClick={scrollToSection("Home")}
              className="font-jakarta text-white text-lg text-center tracking-wide"
            >
              Home
            </p>
            <p
              onClick={scrollToSection("Projects")}
              className="font-jakarta text-white text-lg text-center tracking-wide"
            >
              Projects
            </p>
            <p
              onClick={scrollToSection("Experience")}
              className="font-jakarta text-white text-lg text-center tracking-wide"
            >
              Experience
            </p>
            <p
              onClick={scrollToSection("Contact")}
              className="font-jakarta text-white text-lg text-center tracking-wide"
            >
              Contact
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
