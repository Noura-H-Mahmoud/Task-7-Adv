import Image, { StaticImageData } from "next/image";
import CardContent from "./CardContent";
interface ListItem {
  icon: string;
  text: string;
}

interface CardContentProps {
  src: StaticImageData;
  title: string;
  price: string;
  ul: ListItem[];
}
export default function PackagesCards({ Cards }: { Cards: CardContentProps[] }) {
  return (
    <div className="grid 600:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-60">
      {Cards.map((card, index: number) => (
        <div key={index}>
          <Image src={card.src} loading="lazy" alt="package photo" className="w-full"/>
          <CardContent
            title={card.title}
            price={card.price}
            ul={card.ul}
          />
        </div>
      ))}
    </div>
  )
}
