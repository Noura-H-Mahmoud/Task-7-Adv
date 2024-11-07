import Image, { StaticImageData } from "next/image";

interface Data {
    src: StaticImageData;
    title: string;
}
export default function Box({ boxes }: { boxes: Data[] }) {
    return (
        <div className="grid gap-5 lg:gap-[83px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {boxes.map((box, index: number) => (
                <div key={index} className="w-full bg-[#FFFFFF4D] p-30 rounded-24raduis flex flex-col items-center text-center gap-[15px]">
                    <Image src={box.src} alt="icon" loading="lazy" className="w-60 h-60" />
                    <p className="h-[54px] max-[1900px]:h-max text-xl font-semibold leading-line27.24 flex items-center">
                        {box.title}
                    </p>
                </div>
            ))}
        </div>
    )
}
