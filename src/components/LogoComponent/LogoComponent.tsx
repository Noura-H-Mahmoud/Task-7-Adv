import Image from "next/image"
interface DataProps {
    logo: string;
    text: string;
    logoTitle: string;
}

export default function LogoComponent({ data }: { data: DataProps }) {
    const { logo, text, logoTitle } = data;
    return (
        <div className="relative w-[133px] h-24 desctopHuge:h-[130px]">
            <Image src={logo} alt="logo" loading="lazy" width={50} className="m-auto desctopHuge:w-[69.72px]" />
            <div className="absolute font-podcast text-end bottom-0 desctopHuge:bottom-1 left-7 desctopHuge:left-3  text-base desctopHuge:text-lg">
                <p>{text}</p>
                <h2 className="text-mainColor text-3xl desctopHuge:text-[43.435px] -mt-[13px]  desctopHuge:-mt-[6.43px]">{logoTitle}</h2>
            </div>
        </div>
    )
}
