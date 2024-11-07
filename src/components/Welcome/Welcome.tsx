import BlackTitle from "../BlackTitle/BlackTitle";
import CompanyInfo from "./CompanyInfo";
interface DataProps {
    para: string;
    h2: string;
    text: string;
}
const items = [
    { span: '20+', para: 'Years Experience' },
    { span: '100+', para: 'Happy Customer' },
    { span: '15+', para: 'Choice of Services' },
    { span: '10+', para: 'Professional Guides' }
]
export default function Welcome({ data }: { data: DataProps }) {
    const { para, h2, text } = data;
    return (
        <div className="w-full lg:w-[49.2957746478%]">
            <p className="h-[22px] text-base mb-1.5">{para}</p>
            <BlackTitle h2={h2} />
            <p className="my-8 leading-8 h-[164px] max-[1900px]:h-max">{text}</p>
            <CompanyInfo items={items} />
        </div>
    )
}
