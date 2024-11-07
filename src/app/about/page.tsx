import ButtonHero from "@/components/ButtonHero/ButtonHero";
import Hero from "@/components/Hero/Hero";
import imgHero from "@/app/assets/images/Hero2.png";
import SiteSection from "@/components/SiteSection/SiteSection";
import city from '@/app/assets/images/city.png'
import Customers from "@/components/Customers/Customers";
import BoxesAbout from "@/components/BoxesAbout/BoxesAbout";

export default function AboutUs() {
  const data = {
    para: 'WELCOME TO OUR SITE!',
    h2: 'We Are The Center Of Lucca To Offer You The Best',
    text: 'We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!'
  }
  return (
    <>
      <Hero
        content="Our team cares about your full relax"
        text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        component={<ButtonHero />}
        Class='w-full lg:w-[49.11459%] m-auto text-center gap-6'
        img={imgHero}
      />
      <SiteSection data={data}
        src={city}
        alt="girl picture"
        Class="!ml-0"
        ClassNameDiv="w-full lg:w-[45.77465%] border border-grayColor px-6 py-[21.5px] rounded-[24px]"
      />
      <BoxesAbout />
      <Customers />
    </>
  )
}
