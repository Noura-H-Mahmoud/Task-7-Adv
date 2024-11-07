'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import LogoComponent from "../LogoComponent/LogoComponent";
import Lang from "../Lang/Lang";
import AuthButtons from "../AuthButtons/AuthButtons";
import { useEffect, useState } from "react";
import menuBtn from '@/app/assets/images/menuButton.svg'
import Image from "next/image";
import closeBtn from '@/app/assets/images/closeBtn.svg'

interface ListItem {
  link: string;
  linkTitle: string;
}

interface NavBarProps {
  list: ListItem[];
  data: {
    logo: string;
    text: string;
    logoTitle: string;
  };
}
export default function NavBar({ list, data }: NavBarProps) {
  const pathname = usePathname();
  const [hasScroll, setHasScroll] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`w-full fixed text-white z-50  ${hasScroll ? 'bg-[#4C2902]' : 'bg-bgTransparent'}`}>
      <div className={`max-w-1920 m-auto pr-6 pl-6 md:pr-8 
        md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250 flex justify-between 
        items-center  h-28 desctopHuge:h-[170px]
        ${show ? 'max-lg:h-screen max-lg:bg-[#4C2902] max-lg:flex-col max-lg:gap-10 max-lg:justify-center' : ''} 
        `}
      >
        <LogoComponent data={data} />
        <div className={`w-[77%] xl:w-[71%] flex justify-between ${show ? 'max-lg:flex-col max-lg:items-center max-lg:gap-7' : ''} ${!show ? 'max-lg:hidden' : ''}`}>
          <ul className={`w-[51.337958%] flex items-center gap-4 justify-between ${show ? 'max-lg:flex-col' : ''}`}>
            {list.map((li, index) => (
              <li key={index} className=" relative"
                onClick={show ? () => setShow(false) : undefined}
              >
                <Link href={li.link}
                  className={` ${pathname === li.link ?
                    'after:w-full' : 'after:w-0'}
                      transition-all duration-500 ease-in-out
                      after:absolute after:left-0
                      after:bottom-0 after:h-[1px] desctopHuge:after:h-[2px]
                      after:bg-mainColor desctopHuge:text-xl font-medium
                      desctopHuge:font-semibold whitespace-nowrap`}>
                  {li.linkTitle}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`w-full lg:w-[32.11%] flex items-center gap-2.5 ${show ? 'max-lg:flex-col max-lg:gap-10 ' : ''}`}>
            <Lang />
            <div className="w-[78.769%] flex justify-center">
              <AuthButtons />
            </div>
          </div>
        </div>
        <button onClick={() => setShow((prev) => !prev)} className={`hidden max-lg:block ${show ? 'absolute bottom-11 max-[330px]:bottom-0' : ''}`}>
          <Image src={show ? closeBtn : menuBtn} alt="menu button icon" />
        </button>
      </div>
    </nav>
  )
}