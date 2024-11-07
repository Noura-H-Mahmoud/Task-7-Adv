import Image, { StaticImageData } from "next/image";
import Welcome from "../Welcome/Welcome";

interface DataProps {
    para: string;
    h2: string;
    text: string;
}
interface Data {
    ClassNameDiv?: string;
    Class?: string;
    src: StaticImageData;
    alt: string;
    data: DataProps;
}
export default function SiteSection({ ClassNameDiv, src, Class, alt, data }: Data) {
    return (
        <div className="max-w-1920 m-auto mt-60 md:mt-120 pr-6 pl-6 md:pr-8 
            md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250
            flex flex-col justify-between items-center gap-2.5 lg:flex-row">
            <div className={`${ClassNameDiv}`}>
                <Image src={src} alt={alt} loading="lazy" className={`ml-0 xl:ml-[55.31px] ${Class}`} />
            </div>
            <Welcome data={data} />
        </div>
    )
}
