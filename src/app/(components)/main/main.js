"use client";

import { useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-movingcards";
import { motion } from "framer-motion";
import { BackgroundLines } from "../ui/background-lines";

export default function Main() {
  const [height, setHeight] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // setHeight(document.querySelector(".dd")?.clientHeight);
    console.log("scroll", window.scrollY);
    let element = document.getElementById("window");
    const handleScroll = () => {
      console.log(window.scrollY, "scroll event");
      setScroll(parseInt(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="mains"
        className="flex w-full dd antialiased  flex-col items-center justify-center  "
      >
        <div
          className={`w-full bg-col_green_light antialiased shadow-lg text-col_3 rounded-b-[66px]  flex text-7xl overflow-hidden min-h-lvh z-10  sticky bottom-0  items-center justify-center `}
        >
          <div
            className={`w-full h-full items-center justify-center relative merienda`}
          >
            <Image
              alt="mark"
              src={require("../../../../public/assets/images/illus1.jpg")}
              fill
              objectFit="cover"
            />
            <div className="flex flex-1  gap-4 flex-col items-center h-full justify-center w-full">
              <motion.p
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className=" text-5xl z-50 text-center"
              >
                Hi,I am Rahul
              </motion.p>
              <motion.p
                initial={{ y: -40, opacity: 0 }}
                transition={{ delay: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="z-50 font-bold text-center"
              >
                Welcome to my portfolio
              </motion.p>
              <motion.p
                initial={{ y: -40, opacity: 0 }}
                transition={{ delay: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="z-50 text-2xl  text-center"
              >
                A dedicated frontend developer
              </motion.p>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                transition={{ delay: 1.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex z-50 flex-col gap-10 items-center"
              >
                {/* <FlipWords words={['React JS','React Native','Next JS']} className={'font-bold text-4xl'} /> */}
                <div className="hover:bg-col_3 text-2xl group border-col_3 bg-transparent transition-all cursor-pointer border-2 rounded-full px-5 py-3">
                  <p className="group-hover:text-white text-col_3"> Linkedin</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <div className="flex flex-1 h-full flex-col items-center w-full "></div> */}
        </div>
        <div className="flex flex-col merienda antialiased  items-center justify-center gap-9 w-full h-[800px] sticky bottom-0">
          <div className="w-full h-full relative">
            <BackgroundLines />
          </div>
          <div className="flex antialiased  flex-col items-center gap-4 absolute ">
            <p className="text-5xl font-bold text-center">
              Frontend Development Expertise
            </p>
            <p className="text-xl  text-center">
              Leveraging the Latest Technologies for Modern Web Applications
            </p>
            <FlipWords
              words={["React JS", "React Native", "Next JS"]}
              className={"font-bold text-5xl text-center"}
            />
          </div>
          {/* <div className="flex w-full items-center">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div> */}
        </div>
        <div
          id="overlap"
          className="flex items-center  justify-center -mt-80  lg:-mt-60  pb-36 w-full gap-8 z-50 lg:flex-row flex-col"
        >
          {overLapCards?.map((data, i) => {
            return (
              <motion.div
              key={i}
                className={`flex flex-col lg:h-[379px] p-4 gap-3 merienda rounded-xl group relative overflow-hidden items-center transition-all ${data?.bgColor} lg:w-[455px] w-[90%] lg:max-w-[455px]  overlapCard lg:min-h-[350px] shadow-xl `}
                style={{
                  zIndex: -i,
                  transform:
                    i === 0
                      ? "translateX(432px) translateY(32px) "
                      : i === 2
                      ? "translateX(-432px) translateY(-32px)"
                      : "",
                }}
              >
                <div className="flex h-lvh w-8 bg-white absolute  shadow-xl translate-y-[-1030px] lg:translate-y-[-630px] group-hover:translate-y-[670px] duration-1000 transition-all  z-50  rotate-45 opacity-45"></div>
                <div className="w-full lg:h-40 md:h-72 h-72 relative rounded-xl overflow-hidden">
                  <Image src={data?.src} fill objectFit="cover" alt='mark' />
                </div>

                <div className={`w-full text-sm relative ${data?.color} flex flex-col gap-2`}>
                <p className={`${data?.color} w-full text-start font-bold`}>{data.name}</p>
                  <p>{data.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center w-full ">
        <motion.div
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center gap-3"
        >
          {shuffleCards?.map((data, i) => {
            return (
              <div
                className={`flex w-[90%] lg:flex-row merienda ${data?.bgColor} ${data?.color} top-0 flex-col-reverse rounded-[40px] items-center lg:p-20 pb-12 px-12 pt-4 sm:gap-10 lg:gap-32 gap-0 sticky `}
                key={i}
              >
                <div className="flex flex-col flex-1 gap-5 items-start">
                  <p className="text-5xl">{data?.heading}</p>
                  <p className="text-sm">{data?.subHeading}</p>
                  <div
                    className={`px-5 py-3 mt-2 ${data?.border} border-2 rounded-full`}
                  >
                    <p>Contact </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-1 w-full  rounded-md overflow-hidden  lg:min-h-[300px] min-h-[200px] relative">
                  <Image
                    src={data?.src}
                    alt="mark"
                    fill
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              </div>
            );
          })}
          <div className="flex w-[98%] items-center flex-col pt-28 bg-white rounded-t-[66px] mt-10 shadow-[0px_-25px_163px_-31px_#a3a3a3] z-50">
            <div className="sticky bottom-0 flex w-[70%] z-50 bg-white lg:min-w-[1000px] md:min-w-[500px] min-w-[300px] lg:pl-64 pl-32 flex-col border-l-2 border-black  gap-10 ">
              {dummyContent?.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full flex-col relative merienda gap-2"
                  >
                    <div className="flex items-center gap-3 lg:gap-10 sticky top-36 left-0 z-50 ml-[-113px] md:ml-[-141px] lg:ml-[-269px]">
                      <div className="w-6 h-6 bg-black border-4 border-white rounded-full"></div>
                      <p>2024</p>
                    </div>

                    <div className="flex  flex-col items-start relative -mt-8 ">
                      <p className="text-md  bg-black text-white px-4 py-2 rounded-full">
                        {data?.badge}
                      </p>
                    </div>
                    <motion.div
                      initial={{ x: -100, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="w-full flex flex-col gap-4"
                    >
                      <div className="flex w-[100%]  lg:h-96 md:h-72  max-[775px]:h-40 flex-col items-start relative">
                        <Image
                          alt="mark"
                          src={data?.image}
                          fill
                          className={`lg:object-cover md:object-cover rounded-lg  ${
                            i !== 2
                              ? "max-[462px]:object-contain"
                              : "max-[462px]:object-cover"
                          } `}
                        />
                      </div>
                      <p className="text-sm ">{data?.description}</p>
                    </motion.div>
                  </div>
                );
              })}
              {/* <div className="flex w-full flex-col relative">
      <div className="w-6 h-6 bg-black sticky top-0 -left-12"></div>

<div className="flex  flex-col ">
    
  <p>qadsc</p>
   </div>
<div className="flex w-[100%] bg-red-300 h-56 flex-col items-center"> </div>
</div> */}
            </div>
            <div className="w-full h-44   flex sticky bottom-0    justify-center items-center">
              <div className="hover:bg-col_3 text-2xl group border-col_3 bg-transparent transition-all cursor-pointer border-2 rounded-full px-5 py-3">
                <p className="group-hover:text-white text-col_3"> Contact</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    
    </>
  );
}

const overLapCards = [
  {
    description: `Developed a mental health mobile app that analyzes users' mental states and behaviors using integrated techniques like meditation and breathing exercises. The app suggests personalized podcasts from its course section and incorporates RESTful API integration for seamless functionality`,

    name: "React Native Developer",
    src: require("../../../../public/assets/images/tech-scroll/react-native.avif"),
    heading: "",
    subHeading: "",
    bgColor: "bg-col_8",
    color: "typography.primary.main",
  },
  {
    name: "Next.js Advocate",
    src: require("../../../../public/assets/images/tech-scroll/next1.webp"),
    description:
      "Developed a carer system for individuals needing care, featuring five roles: Loved One, Family Admin, Family Member, Carer, and Sponsor. The app includes services like story creation, mood tracking, chat, media uploads, health info management, and scheduling. A robust access management system and a comprehensive dashboard streamline functionality and content control",
    heading: "",
    subHeading: "",
    bgColor: "bg-col_5",
    color: "text-col_7",
  },
  {
    name: "React Developer",
    heading: "",
    subHeading: "",
    src: require("../../../../public/assets/images/tech-scroll/react.avif"),
    description:
    "Developed a fully functional license management system for a test automation tool, enabling license key generation, user registration, and license purchases. The system supports allocating licenses to multiple users, features a customizable purchasing interface, and integrates RESTful APIs for efficient functionality",
    bgColor: "bg-col_6",
    color: "text-col_3",
  },
];
const dummyContent = [
  {
    title:
      "Developed frontend for a mental health app for Android/IOS (React Native)",
    description: `Developed a mental health mobile app that analyzes users' mental states and behaviors using integrated techniques like meditation and breathing exercises. The app suggests personalized podcasts from its course section and incorporates RESTful API integration for seamless functionality`,
    badge: "React Native",
    image: require("../../../../public/assets/images/tracing-images/ai.png"),
  },
  {
    title:
      "Comprehensive Carer System with Multi-Role Access and Service Management (Next JS)",
    description:
      "Developed a carer system for individuals needing care, featuring five roles: Loved One, Family Admin, Family Member, Carer, and Sponsor. The app includes services like story creation, mood tracking, chat, media uploads, health info management, and scheduling. A robust access management system and a comprehensive dashboard streamline functionality and content control",
    badge: "Next JS",
    image: require("../../../../public/assets/images/tracing-images/carerog.jpg"),
  },
  {
    title: "License management system for test automation tool (ReactJS)",
    description:
      "Developed a fully functional license management system for a test automation tool, enabling license key generation, user registration, and license purchases. The system supports allocating licenses to multiple users, features a customizable purchasing interface, and integrates RESTful APIs for efficient functionality",
    badge: "React JS",
    image: require("../../../../public/assets/images/tracing-images/licenseTA.jpg"),
  },
  {
    title:
      "Employee management system to manage mental health organizations (ReactJS)",
    description:
      "Developed a comprehensive interface for a mental health application, allowing organizations to bulk-register employees and manage licenses with ease. Features include detailed license stats, a robust CRUD system for employee management (single or bulk via CSV upload), and Stripe integration for subscription purchases",
    badge: "React JS",
    image: require("../../../../public/assets/images/tracing-images/licenseMA.jpg"),
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    src: require("../../../../public/assets/images/tech-scroll/next1.webp"),
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    src: require("../../../../public/assets/images/tech-scroll/react.jpg"),
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    src: require("../../../../public/assets/images/tech-scroll/tailwind.webp"),
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    src: require("../../../../public/assets/images/tech-scroll/next1.webp"),
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: require("../../../../public/assets/images/tech-scroll/next1.webp"),
  },
];

const shuffleCards = [
  {
    heading: "Responsive Design Expertise",
    subHeading:
      "I create visually stunning designs that adapt seamlessly across all devices, ensuring every user enjoys a consistent experience.",
    src: "https://cdn.ucraft.com/fs/user_files/15696/media/images/seo-homepage-image-1.webp",
    bgColor: "bg-col_3",
    color: "text-col_6",
    border: "border-col_6",
  },
  {
    heading: "Interactive UI Engineering",
    subHeading:
      "Building intuitive and dynamic user interfaces is my passion, leveraging React and cutting-edge technologies to bring ideas to life.",
    src: "https://cdn.ucraft.com/fs/user_files/15696/media/images/team-option-visual4.webp",
    bgColor: "bg-col_4",
    color: "typography.primary.main",
    border: "border-black",
  },
  {
    heading: "Performance-Driven Development",
    subHeading:
      "I focus on optimizing every detail—from load times to smooth transitions—ensuring fast and efficient web applications.",
    src: "https://cdn.ucraft.com/fs/user_files/15696/media/images/spend-time-on-your-business-1-1.webp",
    bgColor: "bg-col_5",
    color: "text-col_7",
    border: "border-col_7",
  },
];
