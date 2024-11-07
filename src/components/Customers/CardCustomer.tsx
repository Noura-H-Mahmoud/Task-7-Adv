import Image, { StaticImageData } from "next/image";
import comma from '@/app/assets/images/comma.svg'

interface dataCustomer {
    img: StaticImageData ;
    customerName: string;
    text: string;
}
export default function CardCustomer({ data }: { data: dataCustomer }) {
    const { img, customerName, text } = data;
    return (
        <div className="flex flex-col items-center px-30 py-[29px] border border-garyColor rounded-24raduis">
            <div className="flex flex-col gap-[15px] items-center">
                <Image src={img} alt="customer" className="rounded-full" loading="lazy" />
                <p className="h-25">{customerName}</p>
            </div>
            <div className="flex flex-col gap-2.5">
                <Image src={comma} alt="comma" loading="lazy"/>
                <p className="pl-5 leading-line30">{text}</p>
                <div className="flex justify-end">
                    <Image src={comma} alt="comma" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}
