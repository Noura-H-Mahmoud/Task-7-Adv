import bg from '@/app/assets/images/bg.png'
import Image from 'next/image'
import wommen from '@/app/assets/images/wommen.png'
import OffersBox from '../OffersBox/OffersBox'

const dataBox = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    h2: 'Get Special Offers for Organizations',
    data: {
        link: '#',
        textLink: 'Contact Us',
        className: 'w-[170px] lg:w-[43.82338%] bg-mainColor text-white'
    }
}
export default function Offers() {
    return (
        <div className="w-full bg-cover bg-center  mt-60 md:mt-[217px] pr-6 pl-6 md:pr-8 
        md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 
        desctopHuge:pr-250 py-60 "
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className='w-full desctopHuge:max-w-1420 m-auto relative'>
                <OffersBox dataBox={dataBox} />
                <Image src={wommen} alt='wommen' loading="lazy"
                    className='absolute right-0 -bottom-60 hidden lg:block' />
            </div>
        </div>
    )
}
