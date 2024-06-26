'use client';

import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Hydrophonics SNC Pampanga',
    description:
      'Created front-end design for thesis project from students of pampanga',
    stack: [
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'Tailwind Css'},
      {name: 'Javascript'},
      {name: 'Firebase'},
    ],
    image: '/assets/work/hydro-snc.jpg',
    live: '',
    github: 'https://wicecake.github.io/HYDROPHONICS-SNC/',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Philosophicalness',
    description:
      'Philosphicalness project for senior high school project exposition back from grade 12',
    stack: [
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'Javascript'},
      {name: 'PHP'},
    ],
    image: '/assets/work/philosophicalness.jpg',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Sweeney Tours',
    description:
      'Sweeney Tours is our school project from our final project in Information Management Subject',
    stack: [
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'Javascript'},
      {name: 'PHP'},
      {name: 'Laravel'},
    ],
    image: '/assets/work/sweeneytours.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Janine Magbanua Portfolio',
    description:
      'This is a portfolio from an visual artist showcasing her artworks and experiences',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/work/janine-portfolio.png',
    live: '',
    github: 'https://wicecake.github.io/janinemae-portfolio/',
  },
  {
    num: '05',
    category: 'design',
    title: 'Collected Output From Worldskills Pratice',
    description:
      'This is a designs and screenshots during the practice before World Skills Asean Singapore',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/work/wsc-practice-design.png',
    live: 'https://drive.google.com/drive/folders/1d7DmE3X0789Ow3Gu7r6NIflNHg6njyu_?usp=drive_link',
    github: '',
  },
  {
    num: '05',
    category: 'design',
    title: 'Ordy and TapMeTapYou',
    description:
      'Created a mobile prototype/design for a friend in his business',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/work/other-prototype.png',
    live: 'https://drive.google.com/drive/folders/1IHpNJMmrSxt0uJNDjqXqOrWjyRbx7Y1k?usp=drive_link',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github repository button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
