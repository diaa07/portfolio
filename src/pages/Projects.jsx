import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  const swiperRef = useRef();
  const projects = [
    {
      id: 1,
      name: "Movie app",
      Skills: ["React", "JS", "Responsive Design", "TMDB API", "Color themes"],
      img: "https://i.ibb.co/DHbWPygf/Screenshot-2025-07-09-015406.png",
      code: "https://github.com/diaa07/movie-app",
      demo: "https://diaa07.github.io/movie-app/",
    },
    {
      id: 2,
      name: "Prayer Times App",
      Skills: ["React", "JS", "Adhan API"],
      img: "https://i.ibb.co/dwj6jY15/Screenshot-2025-07-09-015913.png",
      code: "https://github.com/diaa07/prayer-times-app",
      demo: "https://diaa07.github.io/prayer-times-app/",
    },
    {
      id: 3,
      name: "Rock Paper Scissors",
      Skills: ["React", "JS"],
      img: "https://i.ibb.co/5xBW2cSg/Screenshot-2025-07-09-015727.png",
      code: "https://github.com/diaa07/rock-paper-scissors-game",
      demo: "https://diaa07.github.io/rock-paper-scissors-game/",
    },
    {
      id: 4,
      name: "AI image generator",
      skills: ["React", "Imagine API", "responsive design"],
      img: "https://i.ibb.co/JN800sT/Screenshot-2025-07-16-135320.png",
      code: "https://github.com/diaa07/AI-image-generator",
      demo: "https://diaa07.github.io/AI-image-generator/",
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="swiper-wrapper">
        <button
          className="swiper-button prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          ◀
        </button>

        <div className="swiper-content">
          <Swiper
            spaceBetween={24}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={false}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              600: { slidesPerView: 1.3 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.5 },
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="swiper-button next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
