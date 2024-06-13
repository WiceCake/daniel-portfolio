'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {SiTailwindcss, SiBootstrap, SiNextdotjs} from 'react-icons/si';

// about data
const about = {
  title: 'About Me',
  description:
    'I started learning programming when I joined STI College - General Santos in my Senior High School Days. After I graduated in highschool, I enroll to the same school again and there I was noticed by our teachers and made me join to competitions such as programming skills and startups. Unexpectedly, I won in different levels of skills competition held by the TESDA and able to join the Worldskills Competition Asean Singapore 2023. Last year, I was able to train at Incheon, South Korea in HRDK Gifts. There I was able to improve my skills and learned many things that level up my programming skills.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Daniel Alburoto',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+63) 951 5030 122 / (+63) 994 7648 791',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Filipino',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Filipino',
    },
    {
      fieldName: 'Email',
      fieldValue: 'daniel.alburoto20@gmail.com',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience, seminars & trainings',
  description: 'These are the lists of experiences I made in the past year',
  items: [
    {
      event: 'STARTUP 101 Design Thinking Workshop',
      description:
        'A workshop encouraging youths to create innovation that can help the community.',
      duration: '2022',
    },
    {
      event: 'STARTUP 102 Workshop',
      description:
        'A continuation of previous startup 101 in preparation for Regional startup competition.',
      duration: '2022',
    },
    {
      event: 'HRDK Gifts K-Star program',
      description:
        'Training for skilled competitors to improve skills in preparation of Worldskills ASEAN Singapore.',
      duration: '2023',
    },
    {
      event: 'Worldskills ASEAN Singapore',
      description:
        'Skills competition for skilled youth for specific trade areas (Web Technologies).',
      duration: '2022 - 2023',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'These are the lists of experiences I made in the past year',
  items: [
    {
      instution: 'Thames International School Senior High School',
      description: 'Graphic and Web Design Bootcamp',
      duration: '2020',
    },
    {
      instution: 'STI College - General Santos',
      description:
        'Senior High School - Mobile Application and Web Development',
      duration: '2021',
    },
    {
      instution: 'STI College - General Santos',
      description: 'Bachelor of Science in Computer Science',
      duration: 'Ongoing',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description: 'These are the skills gathered in the past years',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaPhp />,
      name: 'php',
    },
    {
      icon: <FaLaravel />,
      name: 'laravel',
    },
    {
      icon: <FaVuejs />,
      name: 'vue.js',
    },
    {
      icon: <FaWordpress />,
      name: 'wordpress',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiBootstrap />,
      name: 'bootstrap',
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {ScrollArea} from '@/components/ui/scroll-area';
import {motion} from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-3">Why hire me?</h1>
              <p>These are the list of information about me.</p>
            </div>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="mb-3 text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.event}
                          </h3>
                          <p>{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="mb-3 text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.instution}
                          </h3>
                          <div>
                            {/* dot */}
                            <span></span>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
