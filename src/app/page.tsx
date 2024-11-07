import imgHero from "@/app/assets/images/Hero.png";
import Cards from "@/components/Cards/Cards";
import Destinantions from "@/components/Destinantions/Destinantions";
import Hero from "@/components/Hero/Hero";
import Offers from "@/components/Offers/Offers";
import SiteSection from "@/components/SiteSection/SiteSection";
import img1 from '@/app/assets/images/Rectangle1.png'
import img2 from '@/app/assets/images/Rectangle2.png'
import img3 from '@/app/assets/images/Rectangle3.png'
import img4 from '@/app/assets/images/Rectangle4.png'
import BookBike from "@/components/BookBike/BookBike";
import Packages from "@/components/Packages/Packages";
import Customers from "@/components/Customers/Customers";
import TabsWithData from "@/components/Tabs/TabsWithData";
import about from '@/app/assets/images/aboutPicture.png'

const dataCards = [
  {
    src: img1,
    h3: 'Bike and rickshaw rental',
    alt: 'Bike',
    text: 'Book your quality vehicle quickly for an hour or all day!'
  },
  {
    src: img2,
    h3: 'Guided tour of the countryside',
    alt: 'People',
    text: 'Live the real Lucchese experience by visiting the suburbs by bike!'
  },
  {
    src: img3,
    h3: 'Taxi and NCC service',
    alt: 'Taxi',
    text: 'Do you need not only a bike but also a driver? Then you have found the right place!'
  },
  {
    src: img4,
    h3: 'Bus Package',
    alt: 'Bus',
    text: 'Do you need not only a bike but also a driver? Then you have found the right place!'
  },
]
const data = {
  para: 'WELCOME TO OUR SITE!',
  h2: 'We are the best company for your visit',
  text: 'After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!'
}
export default function Home() {
  return (
    <>
      <Hero
        content="Enjoy in the best way!"
        text="Enjoy our services for your trip anytime"
        component={<TabsWithData />}
        img={imgHero}
      />
      <Destinantions />
      <SiteSection data={data}
        src={about}
        alt="girl picture"

      />
      <Offers />
      <Cards cards={dataCards} />
      <BookBike />
      <Packages />
      <Customers />
    </>
  );
}
