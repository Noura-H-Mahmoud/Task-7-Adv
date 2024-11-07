import Icon from "./Icon";
import Item from "./Item";
import TitleFooter from "./TitleFooter";
import twitter from '@/app/assets/images/twitter.svg'
import facebook from '@/app/assets/images/facebook.svg'
import instagram from '@/app/assets/images/instagram.svg'
interface Ul {
    text?: string;
    href?: string;
    hrefa?: string;
    src?: string;
    texta?: string;
}
interface Data {
    h4: string;
    ul: Ul[];
}
interface ItemsProps {
    items: Data[];
}
export default function Items({ items }: ItemsProps) {
    const icons = [
        { src: twitter },
        { src: facebook },
        { src: instagram }
    ];
    return (
        <div className="w-full py-8 my-33 border-t border-b 
        border-white desctopHuge:flex grid grid-cols-1 md:grid-cols-3 
        lg:grid-cols-5 justify-between  gap-30 lg:gap-2.5">
            {items.map((item, index: number) => (
                <div key={index}>
                    <Item
                        h4={item.h4}
                        ul={item.ul}
                    />
                </div>
            ))}
            <div className="text-center">
                <TitleFooter h4='Social Media' classh4='!text-center' />
                <div className="flex justify-center gap-5">
                    {icons.map((icon, index: number) => (
                        <Icon key={index} src={icon.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}
