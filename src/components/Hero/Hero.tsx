import MainTitle from "@/components/MainTitle/MainTitle";
import Text from "@/components/Text/Text";
import { StaticImageData } from "next/image";
interface Data {
    content: string;
    text: string;
    component: React.ReactNode;
    Class?: string;
    img: StaticImageData;
}
export default function Hero({ content, text, component, Class, img }: Data) {
    return (
        <header
            className="h-screen bg-cover bg-center max-[1275px]:py-40 max-[1275px]:h-max max-[330px]:!py-72"
            style={{ backgroundImage: `url(${img.src})` }}
        >
            <div className={`max-w-1920 m-auto h-screen flex flex-col gap-4 items-center justify-center ${Class}`}>
                <MainTitle content={content} />
                <Text text={text} />
                <div className="mx-6 md:mx-8 lg:mx-10">{component}</div>
            </div>
        </header>
    )
}
// pt-28 desctopHuge:pt-[170px]