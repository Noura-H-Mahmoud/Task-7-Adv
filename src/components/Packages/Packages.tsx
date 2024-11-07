import BlackTitle from "../BlackTitle/BlackTitle";
import PackagesCards from "../PackagesCards/PackagesCards";
import img1 from '@/app/assets/images/package1.png'
import img2 from '@/app/assets/images/package2.png'
import img3 from '@/app/assets/images/package3.png'
import img4 from '@/app/assets/images/package4.png'
import icon1 from '@/app/assets/images/iconOneDay.svg'
import icon2 from '@/app/assets/images/iconMap.svg'
import icon3 from '@/app/assets/images/discount.png'
import icon4 from '@/app/assets/images/iconSupport.svg'
import icon5 from '@/app/assets/images/mountainBike.svg'
import icon6 from '@/app/assets/images/iconGuide.svg'
import icon7 from '@/app/assets/images/iconWater.svg'
import icon8 from '@/app/assets/images/iconTicket.png'
import icon9 from '@/app/assets/images/iconBus.svg'
import icon10 from '@/app/assets/images/iconCompanion.svg'
import icon11 from '@/app/assets/images/iconDriver.svg'
import icon12 from '@/app/assets/images/iconLocation.png'
import icon13 from '@/app/assets/images/bestPrice.png'


const Cards = [
    {
        src: img1,
        title: 'BIKE / RICKSHAW',
        price: '10',
        ul: [
            {
                icon: icon1,
                text: 'Your bike for a day'
            },
            {
                icon: icon2,
                text: 'City App'
            },
            {
                icon: icon3,
                text: 'Discount on Rickshaw'
            },
            {
                icon: icon4,
                text: 'Guaranteed Support'
            }
        ]
    },
    {
        src: img2,
        title: 'BIKE / RICKSHAW',
        price: '10',
        ul: [
            {
                icon: icon5,
                text: 'Your bike for a day'
            },
            {
                icon: icon6,
                text: 'City App'
            },
            {
                icon: icon7,
                text: 'Discount on Rickshaw'
            },
            {
                icon: icon4,
                text: 'Guaranteed Support'
            }
        ]
    },
    {
        src: img3,
        title: 'BIKE / RICKSHAW',
        price: '10',
        ul: [
            {
                icon: icon8,
                text: 'Your bike for a day'
            },
            {
                icon: icon9,
                text: 'City App'
            },
            {
                icon: icon10,
                text: 'Discount on Rickshaw'
            },
            {
                icon: icon4,
                text: 'Guaranteed Support'
            }
        ]
    },
    {
        src: img4,
        title: 'BIKE / RICKSHAW',
        price: '10',
        ul: [
            {
                icon: icon11,
                text: 'Your bike for a day'
            },
            {
                icon: icon12,
                text: 'City App'
            },
            {
                icon: icon13,
                text: 'Discount on Rickshaw'
            },
            {
                icon: icon4,
                text: 'Guaranteed Support'
            }
        ]
    },

]
export default function Packages() {
    return (
        <div className="max-w-1920 m-auto 
            pr-6 pl-6 md:pr-8 md:pl-8 lg:pr-10 
            lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250 
            mt-60 md:mt-[154px]  mb-60 md:mb-[120px]">
            <BlackTitle h2="The Most Popular Packages" />
            <PackagesCards Cards={Cards} />
        </div>
    )
}
