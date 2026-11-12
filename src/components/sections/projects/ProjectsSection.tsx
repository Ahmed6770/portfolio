import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";

import MainCard from "./MainCard";
import { projectsData } from "./projectsData";

import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(1);
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section
      id="projects"
      className="page-section relative flex flex-col justify-start md:justify-center overflow-x-hidden pt-20 pb-12 md:py-12"
    >
      <div className="relative flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-1 bg-primaryClass rounded-full" />
              <span className="text-xs md:text-sm font-medium text-subtextClass">
                My Projects
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-textClass">
              Things I've <span className="text-primaryClass">Built</span>
            </h2>
            <p className="text-xs md:text-sm text-subtextClass max-w-xl mt-2 leading-relaxed">
              Featured projects I've built using React, TypeScript, and modern CSS.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous"
              className="projects-prev w-10 h-10 rounded-xl flex items-center justify-center bg-cardClass border border-borderClass text-subtextClass hover:border-primaryClass hover:text-primaryClass active:scale-95 cursor-pointer transition-all"
            >
              <MoveLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="projects-next w-10 h-10 rounded-xl flex items-center justify-center bg-primaryClass text-black font-bold hover:bg-hoverClass active:scale-95 cursor-pointer transition-all"
            >
              <MoveRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          speed={600}
          loop
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor
          breakpoints={{
            1024: { slidesPerView: 1.08, spaceBetween: 24 },
          }}
          onSlideChange={(s) => setCurrent(s.realIndex + 1)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full !overflow-visible"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={project.title} className="!h-auto">
              <MainCard
                project={project}
                index={index}
                total={projectsData.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Controls */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="w-full flex items-center justify-between gap-4">
            <span
              aria-live="polite"
              className="text-primaryClass font-mono text-xs md:text-sm font-bold"
            >
              {current} / {projectsData.length}
            </span>

            <div className="flex-1 max-w-md flex items-center gap-3">
              <div className="flex-1 h-1 bg-borderClass rounded-full overflow-hidden">
                <div
                  className="h-full bg-primaryClass rounded-full transition-all duration-300"
                  style={{ width: `${(current / projectsData.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                {projectsData.map((project, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                    aria-label={`Go to project ${idx + 1}: ${project.title}`}
                    className={`rounded-full transition-all cursor-pointer ${
                      idx === current - 1
                        ? "w-2.5 h-2.5 bg-primaryClass"
                        : "w-2 h-2 bg-borderClass hover:bg-subtextClass"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
