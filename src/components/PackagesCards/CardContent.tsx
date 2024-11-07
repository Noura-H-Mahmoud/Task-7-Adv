import Image from "next/image";
import Button from "../AuthButtons/Button";

const dataButton = {
  link: '#',
  textLink: 'Book Now',
  className: 'w-full h-[51px] border border-mainColor text-mainColor hover:text-white hover:bg-mainColor transition-all duration-300 ease-in-out'
}

interface ListItem {
  icon: string;
  text: string;
}

interface CardContentProps {
  title: string;
  price: string;
  ul: ListItem[];
}
export default function CardContent({ title, price, ul }: CardContentProps) {
  return (
    <div className="px-25 py-6 border border-garyColor rounded-b-3xl">
      <h4 className="h-max lg:h-[27px] text-xl font-extrabold leading-line27.24 mb-4">{title}</h4>
      <div className="h-max lg:h-[65px]">
        <span className="relative pl-[18.72px] pr-[6.72px]
          before:content-['€'] before:absolute before:opacity-50
          before:top-1.5 before:left-[0] before:text-xl
          before:text-blackColor before:leading-line27.24
          before:font-normal leading-[65.37px] text-5xl
          font-bold text-mainColor after:content-['/day'] after:absolute
          after:bottom-1.5 after:-right-9 after:text-lg
          after:text-blackColor after:leading-[24.51px]
          after:font-normal after:opacity-60">
          {price}
        </span>
      </div>
      <ul className="my-4">
        {ul.map((li, index: number) => (
          <li key={index} className="h-30 lg:h-[57px] flex gap-4 items-center">
            <Image src={li.icon} alt="icon" loading="lazy" className="h-max lg:h-6" />
            {li.text}
          </li>
        ))}
      </ul>
      <Button data={dataButton} />
    </div>
  )
}
