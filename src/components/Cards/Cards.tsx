import Image, { StaticImageData } from "next/image";
import Title from "./Title";

interface DataProps {
    src: StaticImageData;
    h3: string;
    alt: string;
    text: string;
}
export default function Cards({ cards }: { cards: DataProps[] }) {
    return (
        <div className="max-w-1920 m-auto gap-33 
            mt-60 md:mt-120 mb-[63px] pr-6 pl-6 md:pr-8 
            md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            ">
            {cards.map((card, index: number) => (
                <div key={index}>
                    <Image src={card.src} alt={card.alt} loading="lazy" className="w-full mb-5" />
                    <Title h3={card.h3} />
                    <p className="mt-3 leading-26">{card.text}</p>
                </div>
            ))}
        </div>
    )
}
