import Button from "../AuthButtons/Button";
import BlackTitle from "../BlackTitle/BlackTitle";
interface DataProps {
    link: string;
    textLink: string;
    className?: string;
}
interface Data {
    h2: string;
    text: string;
    data: DataProps;
}
export default function OffersBox({ dataBox }: { dataBox: Data }) {
    const { h2, text, data } = dataBox;
    return (
        <div className="w-full lg:w-[40.0704225%] bg-[#FFFFFF4D] 
        py-4 px-6 lg:py-30 lg:px-[42.62px]
        flex flex-col gap-8 items-center text-center rounded-3xl">
            <BlackTitle h2={h2} />
            <p className="h-[71px] max-[1831px]:h-max leading-[26px]">{text}</p>
            <Button data={data} />
        </div>
    )
}
