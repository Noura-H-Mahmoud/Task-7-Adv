import Image, { StaticImageData } from "next/image";
import TitleCard from "../TitleCard/TitleCard";
import CardDetailsDes from "../CardDetailsDes/CardDetailsDes";

interface DataProps {
    src: StaticImageData | string;
    h3: string;
    para: string;
    span: string;
    para1: string;
    para2: string;
    text: string;
}
export default function CardDestinantions({ data }: { data: DataProps }) {
    const { src, h3, para, span, para1, para2, text } = data;
    return (
        <div className="flex flex-col gap-3">
            <div className="mb-1">
                <Image src={src} alt="Destinantion Photo" loading="lazy" width={100} height={404} className="w-full" />
            </div>
            <TitleCard h3={h3} />
            <p className="flex gap-2.5 items-center font-semibold h-33">
                {para}
                <span className="text-mainColor text-2xl font-extrabold">{span}</span>
            </p>
            <CardDetailsDes para1={para1} para2={para2} />
            <p className="leading-26 h-[46px]">{text}</p>
        </div>
    )
}
