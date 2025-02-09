"use client";
import { useState, useEffect } from "react";

// Components
import Image from "next/image";
import { Tabs } from "@chakra-ui/react";
import BackgroundWrapper from "@/components/ui/bgwrapper";
import Marquee from "react-fast-marquee";

// Images
import logo from "./img/logo.png";
import card1 from "./img/1.png";
import card2 from "./img/2.png";
import card3 from "./img/3.png";
import card4 from "./img/4.png";
import avatar1 from "./img/avatar1.png"
import avatar2 from "./img/avatar2.png"
import avatar3 from "./img/avatar3.png"
import avatar4 from "./img/avatar4.png"
import avatar5 from "./img/avatar5.png"
import avatar6 from "./img/avatar6.png"
import avatar7 from "./img/avatar7.png"
import avatar8 from "./img/avatar8.png"

// Icons
import { MdDevices } from "react-icons/md";
import { RxComponent2 } from "react-icons/rx";
import { IoIosStats } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { BsArrowUpRightCircleFill, BsStars, BsBadgeAd } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaSearchLocation, FaMapMarkerAlt, FaStar } from "react-icons/fa";


const getRandomUsers = (users) => {
  return [...users].sort(() => Math.random() - 0.5);
};

function Page() {
  const [shuffledUsers, setShuffledUsers] = useState(getRandomUsers(users));
  const [activeTab, setActiveTab] = useState("developer");

  useEffect(() => {
    setShuffledUsers(getRandomUsers(users));
  }, [activeTab]);
  return (
    <div className="overflow-x-hidden bg-white w-full">
      <BackgroundWrapper/>
      <header className="flex justify-around font-manrope pt-6 items-center text-base animate-fadeInOut opacity-0 [animation-delay:0.5s]">
        <a href="#">
          <Image src={logo} alt="logo" width={183} height={17} />
        </a>
        <nav className="font-normal flex justify-between w-[523px] text-neutral-800">
          <a href="#">Create Resume</a>
          <a href="#">Skillset</a>
          <a href="#">Partnered Job Board</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className="w-[187px] h-12 font-bold pl-6 border rounded-full border-white text-white flex items-center justify-center hover:border-border-100 hover:text-border-100 transition ease-in duration-300">
          <p className="py-3 pr-4">Register Now</p>
          <BsArrowUpRightCircleFill className="w-10 h-10 p-1" />
        </button>
      </header>
      <main>
        <section className="font-manrope mt-14 flex flex-col justify-center items-center text-main-200 font-normal text-base text-center animate-fadeInOut opacity-0 [animation-delay:1.2s]">
          <div className="w-[320px] h-10 px-6 py-2 flex justify-between items-center bg-white rounded-3xl mb-4">
            <IoBriefcaseOutline className="w-6 h-6" />
            <p>Your #1 Platform for Skill Sharing</p>
          </div>
          <h1 className="text-7xl/[86px] font-general font-medium mb-4">
            Showcase Your Mastery.<br />Get Connected
          </h1>
          <p className="text-main-100">
            Create your profile, showcase your skills, and let<br />employers find you.
          </p>
          <div className="flex items-center justify-center mt-9">
            <div className="flex items-center border border-border-100 rounded-full overflow-hidden w-[500px] h-14 bg-white drop-shadow-lg">
              <div className="flex items-center px-7 w-1/2">
                <FaSearchLocation className="text-main-200 w-5 h-5" />
                <input
                  type="text"
                  placeholder="e.g. UX Designer"
                  className="ml-2 outline-none w-full bg-transparent"
                />
              </div>
              <div className="w-[1px] h-6 bg-border-100"></div>
              <div className="flex items-center px-4 w-1/2">
                <FaMapMarkerAlt className="text-main-200 w-5 h-5" />
                <input
                  type="text"
                  placeholder="e.g. Liverpool, USA"
                  className="ml-2 outline-none w-full bg-transparent"
                />
              </div>
            </div>
            <button className="bg-button-100 text-white px-6 h-14 w-[150px] rounded-full font-bold ml-2 hover:bg-main-200 transition ease-in duration-300">
              Search
            </button>
          </div>
          <Marquee speed={50} className="mt-[52px] overflow-hidden">
            <Image src={card1} alt="card1" width={288} height={338} className="mx-3" />
            <Image src={card2} alt="card2" width={288} height={338} className="mx-3" />
            <Image src={card3} alt="card3" width={288} height={338} className="mx-3" />
            <Image src={card4} alt="card4" width={288} height={338} className="mx-3" />
            <Image src={card1} alt="card1" width={288} height={338} className="mx-3" />
            <Image src={card3} alt="card3" width={288} height={338} className="mx-3" />
            <Image src={card4} alt="card4" width={288} height={338} className="mx-3" />
          </Marquee>
        </section>
        <section className="pt-[88px] flex flex-col items-center justify-center font-normal text-base font-manrope text-center animate-fadeInOut opacity-0 [animation-delay:1.7s]">
          <h1 className="font-general font-medium text-6xl text-neutral-900">Discover the<br/>Emerging Masters</h1>
          <p className="text-main-200 mt-4">Find the best master for your company and boosts<br/>your business 10x!</p>
          
          <Tabs.Root defaultValue="developer" className=" mt-10">
            <Tabs.List className="flex justify-between border-b">
              {categories.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="flex items-center justify-center w-[185px] h-12 text-neutral-900  hover:text-button-100 aria-selected:text-button-100 transition-all duration-200 border-b border-main-300/10 aria-selected:bg-gradient-to-t aria-selected:border-b-button-100 aria-selected:from-button-100/10 aria-selected:to-white aria-selected:to-40% aria-selected:pb-1.5 overflow-hidden 
                  aria-selected:border-none aria-selected:after:content-[''] aria-selected:after:absolute aria-selected:after:bottom-0 aria-selected:after:left-0 aria-selected:after:w-full aria-selected:after:h-[1px] aria-selected:after:bg-button-100"
          >
                  {tab.icon}
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {categories.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value} className="p-6">
              <div className="grid grid-cols-4 gap-6">
                {shuffledUsers.map((user, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 w-[292px] h-[242px] bg-white border hover:border-border-blue-100 hover:bg-[#E6F0FF] border-neutral-50 transition-all duration-200 flex justify-center hover:shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)] flex-col font-manrope"
                    
                  >
                    <div className="flex flex-col items-center">
                      <Image src={user.img} alt={user.name} width={64} height={64} className="rounded-full object-cover" />
                        <div className="flex justify-center text-neutral-800 py-2"><FaStar className="text-[#FFC805] mr-3" width={12} height={12}/><span className="font-semibold text-sm">{user.rating} </span><span className="text-xs">{user.peopleRates}</span></div>
                        <p className="font-bold text-neutral-900 text-xl">{user.name}</p>
                        <p className="text-sm text-neutral-500">{user.role}</p>
                      
                    </div>
                    <div className="mt-5 flex gap-1 flex-wrap justify-center">
                      {user.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium text-neutral-700 rounded-full border border-neutral-50">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
          </Tabs.Root>
          <div className="flex justify-center mt-10">
                <button>
                  <a href="#" className="flex items-center text-button-100 border border-button-100 rounded-full hover:bg-button-100 hover:text-white transition font-bold">
                    <p className="p-3 pl-6">View All</p> <BsArrowUpRightCircleFill className="w-10 h-10 m-1" />
                  </a>
                </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const categories = [
  { value: "developer", label: "Developer", icon: <MdDevices size={20} /> },
  { value: "uidesigner", label: "UI Designer", icon: <RxComponent2 size={20} /> },
  { value: "manager", label: "Project Manager", icon: <IoIosStats size={20} /> },
  { value: "designer", label: "Designer", icon: <BsStars size={20} /> },
  { value: "accountant", label: "Accountant", icon: <TbReportMoney size={20} /> },
  { value: "hr", label: "Human Resource", icon: <GoPeople size={20} /> },
  { value: "marketing", label: "Marketing", icon: <BsBadgeAd size={20} /> },
];
const users = [
  { name: "Zrand Hobs", role: "Developer", skills: ["Gimp", "Wordpress"], img: avatar1, rating:"4.8", peopleRates:"(6)" },
  { name: "Dorothy Wood", role: "Teacher", skills: ["Elementor", "Wix", "Illustrator"], img: avatar2, rating:"4.8", peopleRates:"(6)" },
  { name: "Timothy Baker", role: "Teacher", skills: ["Figma", "Elementor", "Wordpress"], img: avatar3, rating:"4.8", peopleRates:"(6)" },
  { name: "Shane Pratt", role: "Developer", skills: ["Figma", "Wordpress", "Gimp"], img: avatar4, rating:"4.8", peopleRates:"(6)" },
  { name: "Frances Washing", role: "Developer", skills: ["Wordpress", "Wix", "Illustrator"], img: avatar5, rating:"4.8", peopleRates:"(6)" },
  { name: "Jason Bell", role: "Web Designer", skills: ["Elementor", "Wordpress"], img: avatar6, rating:"4.8", peopleRates:"(6)" },
  { name: "Kathryn Sanchez", role: "Teacher", skills: ["Framer", "Webflow", "Wix"], img: avatar7, rating:"4.8", peopleRates:"(6)" },
  { name: "Jaime Strickland", role: "Web Designer", skills: ["Gimp", "Figma", "Webflow"], img: avatar8, rating:"4.8", peopleRates:"(6)" },
];

export default function Home(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);
  return(
    <>
    {loading ? (
    <div className="bg-white flex w-screen h-screen justify-center items-center">
      <div role="status">
          <svg aria-hidden="true" className="inline w-12 h-12 text-gray-200 animate-spin dark:text-button-100 fill-main-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
    </div>
  ) : (
    <Page/>
  )}
  </>
  )
}