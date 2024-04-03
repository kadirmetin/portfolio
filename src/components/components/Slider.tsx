import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    id: 1,
    title: "Softforware",
    img: "/images/projects/softforware.jpg",
    url: "https://softforware.com/",
  },
  {
    id: 2,
    title: "Mindbuddy",
    img: "/images/projects/mindbuddy.jpg",
    url: "https://mindbuddy.io/",
  },
  {
    id: 3,
    title: "Twitter Clone",
    img: "/images/projects/twitter.jpg",
    url: "https://kadirmetin-twitter-clone.vercel.app/",
  },
  {
    id: 4,
    title: "Hopi Clone",
    img: "/images/projects/copy.jpg",
    url: "https://play.google.com/store/apps/details?id=com.kaida.copy",
  },
  {
    id: 5,
    title: "E-Commerce",
    img: "/images/projects/e-commerce.jpg",
    url: "https://github.com/kadirmetin/e-commerce",
  },
  {
    id: 5,
    title: "Real Estate",
    img: "/images/projects/real-estate.png",
    url: "https://github.com/kadirmetin/real-estate",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mt-6 w-full"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex bg-[#2A2A2A] rounded-2xl items-center justify-center cursor-pointer"
            onClick={() => window.open(project.url, "_blank")}
          >
            <img
              src={project.img}
              alt="thumbnail"
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-poppinsEB text-lg text-[#C5C5C5]">
                  CLICK HERE TO VISIT
                </p>
                <p className="text-white font-poppinsEB text-lg text-left uppercase">
                  {project.title}
                </p>
              </div>
              <img
                src="/images/arrow-right-solid.svg"
                alt="arrow"
                className="w-10 h-10 -rotate-45"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
