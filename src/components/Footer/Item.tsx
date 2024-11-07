import Image from "next/image";
import TitleFooter from "./TitleFooter";
import ClientSideLinks from "./ClientSideLinks";

interface Ul {
    text?: string;
    href?: string;
    hrefa?: string;
    src?: string;
    texta?: string;
}

interface ItemProps {
    h4: string;
    ul: Ul[];
}

export default function Item({ h4, ul }: ItemProps) {
    return (
        <div className="text-white">
            <TitleFooter h4={h4} />
            <ul className="flex items-center md:items-start flex-col gap-2.5">
                {ul.map((li, index) => (
                    <li key={index} className="font-semibold leading-line30">
                        {li.href && li.text ? (
                            <ClientSideLinks href={li.href} text={li.text} />
                        ) : (
                            li.hrefa && li.src && (
                                <a href={li.hrefa} target="_blank" rel="noopener noreferrer" className="flex items-center text-center md:text-start gap-2.5">
                                    <Image src={li.src} alt="icon" width={24} height={24} />
                                    {li.texta}
                                </a>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
