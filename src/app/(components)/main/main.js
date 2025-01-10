"use client";

import { useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-movingcards";
import { motion } from "framer-motion";
import { BackgroundLines } from "../ui/background-lines";
import {
  IconArrowForward,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconLink,
} from "@tabler/icons-react";
import { FaReact } from "react-icons/fa";

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
          className={`w-full bg-white antialiased shadow-lg text-col_3 ${
            scroll > 10 ? "rounded-b-[66px] " : ""
          } transition-all  flex text-7xl overflow-hidden min-h-lvh z-10  sticky bottom-0  items-center justify-center `}
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
                transition={{ delay: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="z-50 font-bold text-center lg:text-9xl md:text-9xl text-8xl"
              >
                Welcome to my portfolio
              </motion.p>
              <div className="flex z-50 flex-col mt-5   gap-6 items-center">
                <motion.p
                  initial={{ y: -40, opacity: 0 }}
                  transition={{ delay: 1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-50 text-2xl  text-center"
                >
                  A dedicated frontend developer
                </motion.p>
                {/* <FlipWords words={['React JS','React Native','Next JS']} className={'font-bold text-4xl'} /> */}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  transition={{ delay: 1.5 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="hover:bg-col_3 text-2xl group border-col_3 bg-transparent transition-all cursor-pointer border-2 rounded-full px-5 py-3"
                >
                  <p className="group-hover:text-white text-col_3"> Linkedin</p>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-1 h-full flex-col items-center w-full "></div> */}
        </div>
        <div className="flex flex-col merienda antialiased bg-white  items-center justify-center gap-9 w-full h-[1000px] sticky bottom-0">
          <div className="w-full h-full relative">
            <BackgroundLines className={"bg-white"} />
          </div>
          <div className="flex antialiased text-black px-14 flex-col pt-24 items-center gap-4 absolute ">
            <p className="text-5xl font-bold text-center">
              Frontend Development Expertise
            </p>
            <p className="text-xl  text-center">
              Leveraging the Latest Technologies for Modern Web Applications
            </p>
            <FlipWords
              words={["React JS", "React Native", "Next JS"]}
              className={"font-bold text-5xl  text-center"}
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
          className="flex items-center  justify-center -mt-96  lg:-mt-80  pb-36 w-full gap-8 z-50 lg:flex-row flex-col"
        >
          {overLapCards?.map((data, i) => {
            return (
              <motion.div
                key={i}
                className={`flex flex-col lg:h-[379px] p-4 gap-3 bg-[#ffffff69] merienda rounded-xl group relative overflow-hidden items-center transition-all shadow-[0px_0px_5px_-1px_#6e6e6e] backdrop-blur-3xl  lg:w-[455px] w-[90%] lg:max-w-[455px]  overlapCard lg:min-h-[350px]  `}
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
                  <Image src={data?.src} fill objectFit="cover" alt="mark" />
                </div>

                <div className={`w-full text-sm relative  flex flex-col gap-2`}>
                  <p className={` w-full text-start font-bold`}>{data.name}</p>
                  <p>{data.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full items-center pb-28 pt-16 min-h-[900px] text-black merienda  ">
        <div className="flex flex-col  px-12 sticky top-24 lg:w-[800px] md:w-[600px] w-full items-center gap-4">
          <div className="w-72 h-72 mb-9 rounded-full overflow-hidden relative">
            <Image
              fill
              objectFit="cover"
              src={require("../../../../public/assets/images/author.jpg")}
            />
          </div>
          <p className="text-5xl text-center font-bold">
            Hi I am Rahul, Nice to meet you
          </p>
          <p className=" text-center">
            A dedicated React.js and React Native developer with 3+ years of
            professional experience. Over this time, I have successfully
            developed and delivered multiple projects, demonstrating my
            expertise in creating responsive and user-friendly web and mobile
            applications, I'm quietly confident, naturally curious, and
            perpetually working on improving my chops.
          </p>
          <div className="flex items-center gap-6">
            <div className="p-2 border-black border-2 rounded-full">
              <IconBrandInstagram size={30} />
            </div>
            <div className="p-2 border-black border-2 rounded-full">
              <IconBrandLinkedin size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mb-32">
        <motion.div
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center gap-3"
        >
          {shuffleCards?.map((data, i) => {
            return (
              <div
                className={`flex w-[90%] lg:flex-row merienda ${data?.bgColor} ${data?.color} top-24 flex-col-reverse rounded-[40px] items-center lg:p-20 pb-12 px-12 pt-4 sm:gap-10 lg:gap-32 gap-0 sticky `}
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
        </motion.div>
      </div>

      <div className="flex flex-col w-full items-center">
        <div className="flex  w-[80%] max-w-[1300px] flex-col merienda items-center  overflow-hidden gap-4">
          {dummyCards?.map((data) => {
            return (
              <div className="flex w-full lg:flex-row flex-col items-center gap-4">
                {data?.subCard?.map((cards, i) => {
                  return (
                    <motion.div
                    initial={{x:cards?.id == 0  ? -100 : cards?.id === 3 ? 100 : cards?.id === 1 ? 100 : -100  ,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.6,delay:cards?.id == 0  ? 0 : cards?.id === 3 ? 0 : cards?.id === 1 ? 1 : 1 }}
                      className={`flex flex-col gap-2 flex-1  lg:min-h-full  rounded-3xl overflow-hidden  p-7  group relative    bg-col_4   ${cards?.hover_color}`}
                    >
                      <div className="flex items-center z-50 gap-2">
                      {cards?.icon}
                      <p className="text-xl font-bold">{cards?.badge}</p>

                      </div>
                      <div className="z-50  ">
                        <p className={`z-50 transition-all delay-300`}>{cards.description}</p>
                      </div>
                      <div className={` w-14 h-14 group-hover:rounded-none gap-2 items-end justify-end pr-4 pb-4 flex  transition-all duration-500 group-hover:w-full group-hover:h-full ${cards?.buttonColor} rounded-tl-3xl absolute right-0 bottom-0`}>
                        <p className="hidden group-hover:flex transition-all delay-0 duration-0">Checkout</p>
                        <IconLink color="white"/>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      
      </div>
      <div className="flex w-full items-center flex-col pt-28 bg-white  mt-10  z-50">
        <div className="flex w-[70%] z-50 bg-white lg:min-w-[1000px] md:min-w-[500px] min-w-[300px] lg:pl-64 pl-32 flex-col border-l-2 border-black  gap-10 ">
          {dummyContent?.map((data, i) => {
            return (
              <div
                key={i}
                className="flex w-full flex-col relative merienda gap-2"
              >
                <div className="flex items-center gap-3 lg:gap-10 sticky top-36 left-0 z-50 ml-[-113px] md:ml-[-141px] lg:ml-[-269px]">
                  <div className="w-6 h-6 bg-black border-4 border-white rounded-full"></div>
                  <p className="text-black">2024</p>
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
                  <p className="text-sm text-black">{data?.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-44   flex sticky bottom-0    justify-center items-center">
          <div className="hover:bg-col_3 text-2xl group border-col_3 bg-transparent transition-all cursor-pointer border-2 rounded-full px-5 py-3">
            <p className="group-hover:text-white text-col_3"> Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
const dummyCards = [
  {
    id: 0,
    subCard: [
      {
    id: 0,

        title:
          "Comprehensive Carer System with Multi-Role Access and Service Management (Next JS)",
        description:
          "Developed a carer system for individuals needing care, featuring five roles: Loved One, Family Admin, Family Member, Carer, and Sponsor. The app includes services like story creation, mood tracking, chat, media uploads, health info management, and scheduling. A robust access management system and a comprehensive dashboard streamline functionality and content control",
        badge: "Next JS",
        color: "text-col_10",
        bgColor: "bg-col_9",
        buttonColor: "bg-col_10",
        hover_bgColor: "hover:bg-col_10",
        hover_color: "hover:text-col_9",
       icon:<IconBrandNextjs size={60}/>,
        image: require("../../../../public/assets/images/tracing-images/carerog.jpg"),
      },
      {
    id: 1,

        title:
          "Developed frontend for a mental health app for Android/IOS (React Native)",
        description: `Developed a mental health mobile app that analyzes users' mental states and behaviors using integrated techniques like meditation and breathing exercises. The app suggests personalized podcasts from its course section and incorporates RESTful API integration for seamless functionality`,
        badge: "React Native",
        color: "text-col_3",
        bgColor: "bg-col_6",
        buttonColor: "bg-col_3",
        hover_bgColor: "hover:bg-col_3",
        hover_color: "hover:text-col_6",
       icon:<IconBrandReactNative size={60}/>,
        image: require("../../../../public/assets/images/tracing-images/ai.png"),
      },
    
    ],
  },
  {
    id: 0,
    subCard: [
      {
    id: 2,

        title: "License management system for test automation tool (ReactJS)",
        description:
          "Developed a fully functional license management system for a test automation tool, enabling license key generation, user registration, and license purchases. The system supports allocating licenses to multiple users, features a customizable purchasing interface, and integrates RESTful APIs for efficient functionality",
        badge: "React JS",
        color: "text-col_11",
        bgColor: "bg-col_8",
        buttonColor: "bg-col_11",
        hover_bgColor: "hover:bg-col_11",
        hover_color: "hover:text-col_8",
       icon:<FaReact  size={60}/>,
        image: require("../../../../public/assets/images/tracing-images/licenseTA.jpg"),
      },
      {
    id: 3,

        title:
          "Employee management system to manage mental health organizations (ReactJS)",
        description:
          "Developed a comprehensive interface for a mental health application, allowing organizations to bulk-register employees and manage licenses with ease. Features include detailed license stats, a robust CRUD system for employee management (single or bulk via CSV upload), and Stripe integration for subscription purchases",
        badge: "React JS",
        color: "text-col_7",
        bgColor: "bg-col_5",
        buttonColor: "bg-col_7",
        hover_bgColor: "hover:bg-col_7",
        hover_color: "hover:text-col_5",
       icon:<FaReact  size={60}/>,
        image: require("../../../../public/assets/images/tracing-images/licenseMA.jpg"),
      },
    ],
  },
];
const overLapCards = [
  {
    description: `Developed a mental health mobile app that analyzes users' mental states and behaviors using integrated techniques like meditation and breathing exercises. The app suggests personalized podcasts from its course section and incorporates RESTful API integration for seamless functionality`,

    name: "React Native Developer",
    src: require("../../../../public/assets/images/tech-scroll/react-native.avif"),
    heading: "",
    subHeading: "",
    bgColor: "bg-col_8",
    color: "text-black",
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
    color: "text-black",
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
