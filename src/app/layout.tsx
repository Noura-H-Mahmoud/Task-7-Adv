import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import logo from '@/app/assets/images/NewSymbol.svg'

const podcast = localFont({
  src: "./fonts/Podcast.ttf",
  variable: "--font-podcast",
  weight: "400",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Enjoy in the best way",
  description: "Book your perfect trip with unique experiences and over 10 years of expertise. Enjoy top destinations with us",
};
const navData = {
  logo: logo,
  text: 'tours to',
  logoTitle: 'Tuscany',
}
const navList = [
  { link: '/', linkTitle: 'Home' },
  { link: '/about', linkTitle: 'About Us' },
  { link: '/packages', linkTitle: 'Tour Packages' },
  { link: '/contact', linkTitle: 'Contact Us' },
]

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${podcast.variable}`}>
      <body
        className="font-openSans text-base 2xl:text-lg text-blackColor"
      >
        <NavBar list={navList} data={navData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
