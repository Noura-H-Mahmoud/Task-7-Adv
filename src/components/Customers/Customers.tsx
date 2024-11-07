import BlackTitle from "../BlackTitle/BlackTitle";
import MainSlider from "../MainSlider/MainSlider"
import user from '@/app/assets/images/customer.png'

const cardData = [
    {
        img: user,
        customerName: 'Lyod Gomez',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'
    },
    {
        img: user,
        customerName: 'Lyod Gomez',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'
    },
    {
        img: user,
        customerName: 'Lyod Gomez',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'
    }
]
export default function Customers() {
    return (
        <div className="max-w-1920 m-auto 
            pr-6 pl-6 md:pr-8 md:pl-8 lg:pr-10 
            lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250  mb-60 md:mb-[160px]">
            <BlackTitle h2="Happy Customers Says" />
            <MainSlider slides={cardData} num={2} className="!gap-5" />
        </div>
    )
}
