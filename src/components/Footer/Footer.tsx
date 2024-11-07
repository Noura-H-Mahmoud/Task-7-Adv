import LogoComponent from "../LogoComponent/LogoComponent";
import logo from '@/app/assets/images/NewSymbol.svg'
import Items from "./Items";
import location from '@/app/assets/images/Location.svg'
import phone from '@/app/assets/images/Phone.svg'
import email from '@/app/assets/images/Email.svg'

const navData = {
  logo: logo,
  text: 'tours to',
  logoTitle: 'Tuscany',
}

const items = [
  {
    h4: 'Services',
    ul: [
      { text: 'Bike and Rickshaw rental', href: '#' },
      { text: 'Guided Tours of Lucca', href: '#' },
      { text: 'Guided Bike Tour of Lucca', href: '#' },
      { text: 'Trip In The Tuscan Hills', href: '#' },
      { text: 'Transportation With Luxury Cars', href: '#' },
      { text: 'Wine Tours By Bus With Guide', href: '#' }
    ]
  },
  {
    h4: 'Home',
    ul: [
      { text: 'Home', href: '/' },
      { text: 'About Us', href: '/about' },
      { text: 'Tour Packages', href: '/packages' }
    ]
  },
  {
    h4: 'Help',
    ul: [
      { text: 'Terms of Use', href: '#' },
      { text: 'Provicy Policy', href: '#' }
    ]
  },
  {
    h4: 'Contacts',
    ul: [
      { hrefa: '#', src: location, texta: 'Piazza Napoleone, Lucca, Tuscany' },
      { hrefa: 'tel:+39 346 368 5708', src: phone, texta: '+39 346 368 5708' },
      { hrefa: 'mailto:italiainlimo@gmail.com', src: email, texta: 'italiainlimo@gmail.com' }
    ]
  },
]

export default function Footer() {
  return (
    <div className="w-full pr-6 pl-6 md:pr-8 md:pl-8 lg:pr-10 
     lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250 bg-blackColor py-10">
      <div className="max-w-1420 m-auto">
        <LogoComponent data={navData} />
        <Items items={items} />
        <p className="text-white text-center text-base leading-26">
          Copyright © 2022.  All rights reserved.
        </p>
      </div>
    </div>
  )
}
